class Graduate < ActiveRecord::Base
  validates_presence_of :uuid, :full_name
  validates_uniqueness_of :uuid
  after_initialize :ensure_uuid

  has_one :github, class_name: "GithubDatum"
  has_one :capstone
  has_many :work_histories

  private

  def ensure_uuid
    self.uuid || generate_uuid.save
  end

  def generate_uuid
    SecureRandom::urlsafe_base64(12)
  end
end
