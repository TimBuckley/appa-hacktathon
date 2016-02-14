# WorkHistory.create(graduate_id: graduate_id, company_name: "google", company_website: "google.com", location: "NYC", current: true, first_job: true)
class WorkHistory < ActiveRecord::Base
  validates_uniqueness_of :current, scope: :graduate_id

  belongs_to :company
  belongs_to :graduate

  attr_reader :company_name, :company_website

  after_initialize :associate_company

  def company_name=(company_name)
    company_name.titleize
  end

  def company_website=(company_website)
    company_website.titleize
  end
  private

  def associate_company
    if company_name || company_website
      self.company = Company.find_by_name(company_name) || Company.find_by_website(company_website) || make_company
    end
  end

  def make_company
    Company.create(name: company_name, website: company_website)
  end
end
