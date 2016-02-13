import React, {
  Image,
  StyleSheet,
  Text,
  View} from 'react-native';


const GradDetail = React.createClass({
  initialState: function() {
    return {
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
        company_uuid: 'same-stuff-its-a-uuid',
        name: 'AppAcademy',
        title: 'Software Engineer',
        date_hired: {
          month: 'December',
          year: 2015
        },
        location: 'New York City'
      },
      past_companies: [
       {
         company_uuid: 'a-different-uuid',
         name: 'BlahBlah',
         title: "TA",
         date_hired: {
           month: 'Whatever',
           year: 2001
         }
       }
      ]
    }
  },
  currentCompany: function() {
    const { current_company } = this.initialState()
    if (!current_company || current_company === null || current_company === undefined) {
      return (
        <View style={styles.currentCompany}>
          <Text>(No current company)</Text>
        </View>)
    }

    const { company_uuid, name, title, date_hired, location } = current_company
    const { month, year } = date_hired
    return (
      <View style={styles.currentCompany}>
        <Text>Name: {name}</Text>
        <Text>Title: {title}</Text>
        <Text>Hired: {month} - {year}</Text>
        <Text>Location: {location}</Text>
      </View>
    )
  },

  render: function() {
    const {
      first_name,
      last_name,
      uuid,
      picture_url,
      date_attended,
      bootcamp_name,
      linkedin_url,
      github_url,
      personal_website_url,
      past_companies
    } = this.initialState()

    return(
      <View style={styles.container}>
        <Text>{last_name}, {first_name}</Text>
        <Image
          style={styles.avatar}
          source={{uri: picture_url}}
        />
        <Text>Current Company:</Text>
        {this.currentCompany()}
      </View>
    )
  }
})




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 100,
    height: 100
  },
  sites: {

  },
  currentCompany: {

  },
  pastCompanies: {

  }
})

export { GradDetail }
