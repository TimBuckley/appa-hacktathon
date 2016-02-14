json.extract!(@graduate, :uuid, :full_name, :picture_url, :bootcamp_name, :bootcamp_location, :linkedin_url)

json.date_attended @graduate.cohort_date
json.personal_website_url @graduate.website_url
json.github_url @graduate.github_account.url

current = @graduate.work_histories.find_by(current: true)
json.set! :current_company do
  json.partial! "company", company: current
end

first = @graduate.work_histories.find_by(first_job: true)
if first != current
  json.set! :first_company do
    json.partial! "company", company: first
  end
end

json.past_companies do
  json.array! @graduate.past_companies do |company|
    json.partial! "company", company: company
  end
end


