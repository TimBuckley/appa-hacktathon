class Api::CompaniesController < Api::BaseController

  def index
    @companies = Company.all

    render :index
  end
end
