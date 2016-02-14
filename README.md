## Create work histories and companies

suggested routes
```
graduate = Graduate.find_by_uuid("example-uuid")
graduate.work_histories.create(
  title: "Software Engineer",
  date_hired: DateTime.new(2015, 12, 28),
  first_job: true,
  current: true,
  company_name: "Apple",
  company_website: "https://www.apple.com"
)
```
