class Graduate < ActiveRecord::Base
  validates_presence_of :uuid, :full_name
  validates_uniqueness_of :uuid


  after_initialize :ensure_uuid
  after_create :make_github_account


  has_one :github_account, class_name: "GithubDatum"
  has_one :capstone
  has_many :work_histories

  attr_accessor :github_url

  private

  def ensure_uuid
    self.uuid || generate_uuid
  end

  def generate_uuid
    self.uuid = SecureRandom::urlsafe_base64(12)
  end

  def make_github_account
    self.github_account = GithubDatum.new(url: github_url)
  end
end
