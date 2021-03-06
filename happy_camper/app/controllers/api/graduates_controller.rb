require 'byebug'
class Api::GraduatesController < Api::BaseController

  # params: month, year, bootcamp_location, employed, employment_location
  def index
    unpaged_graduates = Graduate
      .by_bootcamp(params[:bootcamp_location])
      .by_employed(params[:employed])
      .by_year(params[:year])
      .by_month(params[:month])
      .uniq

    @graduates = unpaged_graduates.page(params[:page]).per(params[:per_page])

    @num_graduates = unpaged_graduates.count
    render :index
  end

  def show
    @graduate = Graduate.includes(work_histories: :company).find_by_uuid(params[:id])

    render :show
  end

end
