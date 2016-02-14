class Company < ActiveRecord::Base
  validates_presence_of :uuid,
  validates_uniqueness_of :uuid

  after_initialize :ensure_uuid, :find_logo

  has_many :work_histories

  private

  def find_logo
    return nil unless website
    domain = strip_website
    self.logo = call_clearbit(domain)
  end

  def ensure_uuid
    self.uuid || generate_uuid
  end

  def generate_uuid
    self.uuid = SecureRandom::urlsafe_base64(12)
  end
end
