# Happy Camper

A mobile app for finding out about coding bootcamp graduates and the careers they get after graduation. Built with a React native front-end and a Rails 4 JSON API for the inaugural AppAcademy Alumni Hackathon.

## Why We Made It

The coding bootcamp model seems almost too good to be true for prospective students, and it can be hard to determine which bootcamp will best help you get the career you want. With this app, you can see where graduates are getting hired and how long it takes them to get a job after their course.

# Requests

Happy Camper currently support read-only routes. A later implementation may provide user information uploading.
## Graduates

Currently there are two routes:
### Index
*/api/graduates?<query options>*
The following query options are available for this route. Both URL querying and JSON requests are supported. All query parameters are optional.
* `per_page` - defaults to 25. There is no maximum.
* `page` - defaults to page 1.
* `bootcamp_location` - options `NYC` or `SF` only. Returns only graduates who attended in that city
* `employed` - options `true` or `false`. Returns graduates who got a job after app academy or didn't. This data is limited by graduates who publicly listed their Linkedin profiles. Leaving this parameter out returns graduates irrespective of employment.
* `month` - options `1` through `12`. Filters by the month that graduates attended
* `year` - options `2013` through `2016`. Filters by the year that graduates attended

The response body also includes the total count of graduates who meet your query criteria. Here is an example:
*request made to /api/graduates?employed=true&bootcamp_location=NYC*
```
{
  num_graduates: 63,
  graduates: [
    {
      uuid: "Yl6c2bNnjnLB5vh8",
      full_name: "David Colucci",
      picture_url: "http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/000/161/medium/david-colucci.jpg?1410367727",
      date_attended: "2014-09-01",
      bootcamp_name: "App Academy",
      bootcamp_location: "NYC"
      },
      . . .
  ]
}
```

### Show
*api/graduates/:graduate_uuid*
No query parameters are accepted. Here is an example:
*request made to /api/graduates/q-fD95EDxmmmgFq7*
```
{
  uuid: "q-fD95EDxmmmgFq7",
  full_name: "Fiona Conn",
  picture_url: "http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/000/926/medium/fiona-conn.jpg?1443627795",
  bootcamp_name: "App Academy",
  bootcamp_location: "NYC",
  linkedin_url: "https://www.linkedin.com/in/fconn",
  date_attended: "2015-09-01",
  personal_website_url: null,
  github_url: "http://github.com/fpcyan",
  current_company: {
    company_uuid: "0FW05gLM8y2j7y9g",
    name: "New York University",
    title: "Adjunct Instructor",
    date_hired: "2013-12-02T00:00:00.000Z",
    location: null
  }
}
```
## Companies

WIP

----

# Todos

* Currently only shows app academy graduates. We would like to get graduates from other prominent bootcamps for the sake of comparison.
* Better error handling for bad Linkedin URLs.
* Cool, shiny graphs showing aggregate data on bootcamp grads and company info.
