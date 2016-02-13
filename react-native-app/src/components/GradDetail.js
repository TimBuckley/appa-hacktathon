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
        company_uuid: 'same-stuff-its-a-uuid'
        name: 'AppAcademy',
        title: 'Software Engineer',
        date_hired: {
          month: 'December'
          year: 2015
        },
        location: 'New York City'
      },
      past_companies: [
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
  },
  render: function() {

    const avatarUri = "http://i.imgur.com/UJwz62B.gif"

    return(
      <View style={styles.container}>
        <Text>My name</Text>
        <Image
          style={styles.avatar}
          source={{uri: avatarUri}}
        />
        <Text>Anybody here?</Text>
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
  }
})

export { GradDetail }
