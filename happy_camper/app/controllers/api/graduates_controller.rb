class Api::GraduatesController < Api::BaseController

  # params: month, year, bootcamp_location, employed, employment_location
  def index
    @graduates = Graduate.joins(:work_histories).where("work_histories.date_hired > graduates.cohort_date").order(cohort_date: :asc).limit(50)

    render :index
  end

  def show
    @graduate = Graduate.find_by_uuid(params[:id])

    render :show
  end

end
