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


  scope :post_bootcamp_work, -> { joins(:work_histories).where("work_histories.date_hired > graduates.cohort_date") }

  attr_accessor :github_url, :capstone_url

  def past_companies
    work_histories.where(current: false, first_job: false)
  end

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
