class WorkHistory < ActiveRecord::Base
  validates_uniqueness_of :current, scope: :graduate_id

  attr_accessor :company_name
end
