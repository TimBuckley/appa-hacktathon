require "linkedin_scraper"

class LinkedinLoader
  attr_reader :graduate, :profile
  def initialize(graduate)
    @graduate = graduate
    @profile = Linkedin::Profile.get_profile(@graduate.linkedin_url)
  end

  def load_work_histories
    # loads companies from oldest to newest
    return if profile.nil?

    first_job = false

    all_companies.reverse.each do |company|
      if company[:start_date] && company[:start_date] > graduate.cohort_date && !first_job
        first_job = true
        generate_work_history(company, true)
      else
        generate_work_history(company)
      end
    end
  end

  def all_companies
    profile.current_companies + profile.past_companies
  end

  private

  def generate_work_history(company, first_job = false)
    graduate.work_histories.create(
      title: company[:title],
      date_hired: company[:start_date],
      first_job: first_job,
      current: profile.current_companies.include?(company),
      company_name: company[:company],
      company_website: company[:website]
    )
  end
end
