class WorkHistory < ActiveRecord::Base
  validates_uniqueness_of :current, scope: :graduate_id

end
