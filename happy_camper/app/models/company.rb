require 'net/http'

class Company < ActiveRecord::Base
  validates_presence_of :uuid
  validates_uniqueness_of :uuid

  after_initialize :ensure_uuid, :set_domain

  has_many :work_histories

  private

  def set_domain
    return nil unless website
    self.domain = strip_website
  end

  def strip_website
    website.match(/^(?:https?:\/\/)?(?:www\.)?([^\/]*)\/?/)[1]
  end

  def ensure_uuid
    self.uuid || generate_uuid
  end

  def generate_uuid
    self.uuid = SecureRandom::urlsafe_base64(12)
  end
end
