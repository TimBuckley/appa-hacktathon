json.num_graduates @num_graduates

json.graduates do
  json.array! @graduates do |graduate|

    json.uuid graduate.uuid
    json.full_name graduate.full_name
    json.picture_url graduate.picture_url
    json.date_attended graduate.cohort_date
    json.bootcamp_name graduate.bootcamp_name
    json.bootcamp_location graduate.bootcamp_location

  end
end
