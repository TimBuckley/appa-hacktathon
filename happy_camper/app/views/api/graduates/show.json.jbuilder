json.extract!( @graduate, :uuid, :full_name, :picture_url, :bootcamp_name, :bootcamp_location, :linkedin_url)

json.date_attended @graduate.cohort_date
json.personal_website_url @graduate.website_url
json.github_url @graduate.github_account.url
json.current_company do
  json.company_uuid json.null!
  json.name json.null!
  json.title json.null!
  json.date_hired json.null!
end

json.past_companies []



