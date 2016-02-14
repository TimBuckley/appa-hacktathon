class Api::GraduatesController < Api::BaseController

  # params: month, year, bootcamp_location, employed, employment_location
  def index
    @graduates = Graduate.all.limit(50)

    render :index
  end

  def show
    @graduate = Graduate.find_by_uuid(params[:id])

    render :show
  end

end
