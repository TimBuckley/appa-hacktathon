# WorkHistory.create(graduate_id: graduate_id, company_name: "google", company_website: "google.com", :title, ...)
# OR
# WorkHistory.create(:graduate_id, :company_id, :title, ...)
class WorkHistory < ActiveRecord::Base
  belongs_to :company
  belongs_to :graduate

  attr_accessor :company_name, :company_website, :company_linkedin

  after_initialize :associate_company

  private

  def associate_company
    if company_name || company_website
      self.company = Company.find_by_name(company_name.titleize) || Company.find_by_website(company_website) || make_company
    end
  end

  def make_company
    Company.create(name: company_name.titleize, website: company_website, linkedin_url: company_linkedin)
  end
end
