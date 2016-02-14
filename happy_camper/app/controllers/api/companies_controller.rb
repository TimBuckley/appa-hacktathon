class Api::CompaniesController < Api::BaseController

  def index
    @companies = Company.includes(:work_histories).all

    render :index
  end
end
