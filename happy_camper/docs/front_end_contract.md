# Front End API endpoints

The front end will be accessible via GET requests, and will respond with JSON objects only.

# Version

This is version 1 of the api. All updates to the api will be backwards compatible.

# Controllers

GraduateControllers#index - 'api/graduates/index'

  Output:
    ```
      {[
          {
            first_name: 'Fiona'
            last_name: 'Conn'
            uuid: 'th1S-isau-uidf-orfi-onac'
            picture_url: 'http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/000/926/medium/fiona-conn.jpg?1443627795'
            date_attended: {
              month: 'September'
              year: '2015'
            }
            bootcamp_name: 'AppAcademy'
          },

          {
            ...
          }
      ]}

    ```

Graduatecontrollers#show - 'api/graduates/graduate_uuid/show'

  Output:
  ```
    {
      first_name: 'Fiona',
      last_name: 'Conn',
      uuid: 'th1S-isau-uidf-orfi-onac',
      picture_url: 'http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/000/926/medium/fiona-conn.jpg?1443627795',
      date_attended: {
        month: 'September',
        year: '2015'
      },
      bootcamp_name: 'AppAcademy',
      linkedin_url: 'example.com/fionaconn',
      github_url: 'github.com/fpcyan',
      personal_website_url: 'fionaprotagonist.com',
      current_company: {
        company_uuid: 'same-stuff-its-a-uuid'
        name: 'AppAcademy',
        title: 'Software Engineer',
        date_hired: {
          month: 'December'
          year: 2015
        },
        location: 'New York City'
      },
      past_companies: [ # optional
       {
         company_uuid: 'a-different-uuid'
         name: 'BlahBlah',
         title: "TA",
         date_hired: {
           month: 'Whatever',
           year: 2001
         }
       }
      ]
    }
  ```

CompaniesController#index - 'api/companies/index'

  Output:
  ```
    {[
      {
        company_uuid: 'this-is-another-uuid',
        company_name: 'Google',
        number_of_grads: 10,
        locations: [
        'New York City',
        'Mountain View',
        'Somewhere in China'
        ]
      }
      ]}
  ```

CompaniesController#show - 'api/companies/company_uuid/show'

  Output:
  ```
    {

    }
  ```
