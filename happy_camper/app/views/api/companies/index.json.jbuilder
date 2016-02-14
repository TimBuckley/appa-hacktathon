json.array! @companies do |company|
  json.uuid company.uuid
  json.name company.name
  json.website company.website
  json.domain company.domain
  json.number_of_grads 1
end
