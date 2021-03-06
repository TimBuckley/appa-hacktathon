class Graduate < ActiveRecord::Base
  validates_presence_of :uuid, :full_name
  validates_uniqueness_of :uuid
  validates_each :picture_url, :linkedin_url, :website_url, :github_url, :capstone_url do |record, attr, value|
    record.errors.add(attr, 'must be a valid url') unless value.nil? || value =~ /^https?:\/\//
  end

  after_initialize :ensure_uuid, :clean_full_name
  after_create :make_github_account, :make_capstone

  has_one :github_account, class_name: "GithubDatum"
  has_one :capstone
  has_many :work_histories

  scope :by_bootcamp, ->(bootcamp) { where(bootcamp_location: bootcamp) if bootcamp}
  scope :by_employed, ->(employed) {
    if employed == 'true'
      joins(:work_histories).where("work_histories.date_hired > graduates.cohort_date")
    elsif employed == 'false'
      joins(:work_histories).where("linkedin_url is NOT null AND NOT work_histories.date_hired > graduates.cohort_date")
    end
  }
  scope :by_year, ->(year) { where('extract(year from cohort_date) = ?', year.to_i) if year && year.to_i.between?(2013, 2016) }
  scope :by_month, ->(month) { where('extract(month from cohort_date) = ?', month.to_i) if month && month.to_i.between?(1, 12) }
  attr_accessor :github_url, :capstone_url

  private

  def ensure_uuid
    self.uuid || generate_uuid
  end

  def generate_uuid
    self.uuid = SecureRandom::urlsafe_base64(12)
  end

  def clean_full_name
    self.full_name = full_name.strip.split('  ').join(' ')
  end

  def make_github_account
    github_url && self.github_account = GithubDatum.new(url: github_url)
  end

  def make_capstone
    capstone_url && self.capstone = Capstone.new(website_url: capstone_url)
  end
end
