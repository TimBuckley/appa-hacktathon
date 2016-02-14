import React, {
  Image,
  StyleSheet,
  ScrollView,
  Text,
  View} from 'react-native';
// import { Link } from 'react-native-link'


const GradDetail = React.createClass({
  initialState: function() {
    return {
      first_name: 'Fiona',
      last_name: 'Conn',
      uuid: 'th1S-isau-uidf-orfi-onac',
      picture_url: 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAX0AAAAJGUxOTU3MjhjLTBiZmYtNDBmMi04NTRhLWZmOTJjMDZiZjNhMg.jpg',
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
  currentCompany: function(current_company) {
    if (!current_company || current_company === null || current_company === undefined) {
      return (
        <View style={styles.currentCompany}>
          <Text>(No current company)</Text>
        </View>)
    }

    const { company_uuid, name, title, date_hired, location } = current_company
    const { month, year } = date_hired
    return (
      <View>
        <Text style={styles.label}>Current Company:</Text>
        {this.singleCompany(current_company)}
      </View>
    )
  },

  pastCompanies: function(past_companies) {
    if (!past_companies ||
        past_companies === null ||
        past_companies === undefined ||
        past_companies.length === 0) {
      return (
        <View style={styles.pastCompanies}>
          <Text>(No available work history)</Text>
        </View>)
    }

    // const { company_uuid, name, title, date_hired } = past_companies
    // const { month, year } = date_hired
    return (
      <View>
        <Text style={styles.label}>Past Compan{past_companies.length > 1 ?
                                                                    'y' :
                                                                    'ies'}:</Text>
        {past_companies.map((company) => this.singleCompany(company))}
      </View>
    )
  },

  singleCompany: function({company_uuid, name, title, date_hired, location}) {

    const { year, month } = date_hired
    return (
        <View
          style={styles.singleCompany}
          key={company_uuid}
        >
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.label}>Name: </Text>
            <Text>{name}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.label}>Title: </Text>
            <Text>{title}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.label}>Hired: </Text>
            <Text>{month} - {year}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.label}>Location: </Text>
            <Text>{location}</Text>
          </View>
        </View>
    )
  },

  userPicture: function(picture_url) {
    return (
      <Image
        style={styles.avatar}
        source={{uri: picture_url}}
      />
    )
  },

  userLinks: function(linkedin_url, github_url, personal_website_url) {
    return (
      <View style={styles.sites}>
        <View style={styles.linkPairs}>
          <Text style={styles.label}>LinkedIn: </Text>
          <Text style={styles.link}>{linkedin_url}</Text>
        </View>
        <View style={styles.linkPairs}>
          <Text style={styles.label}>Github: </Text>
          <Text style={styles.link}>{github_url}</Text>
        </View>
        <View style={styles.linkPairs}>
          <Text style={styles.label}>Personal: </Text>
          <Text style={styles.link}>{personal_website_url}</Text>
        </View>
      </View>
    )
  },

  render: function() {
    const {
      first_name,
      last_name,
      uuid,
      current_company,
      picture_url,
      date_attended,
      bootcamp_name,

      linkedin_url,
      github_url,
      personal_website_url,

      past_companies } = this.props.gradDetail || this.initialState()

    return(
      <ScrollView
        automaticallyAdjustContentInsets={false}
        scrollEventThrottle={200}
        style={styles.scrollView}
      >
        <View style={styles.container}>
          {this.userPicture(picture_url)}
          <Text style={styles.name}>{first_name} {last_name}</Text>
          <Text>{'\n'}</Text>
          {this.userLinks(linkedin_url, github_url, personal_website_url)}
          <Text>{'\n'}</Text>
          {this.currentCompany(current_company)}
          <Text>{'\n'}</Text>
          {this.pastCompanies(past_companies)}
        </View>
      </ScrollView>
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
    width: 300,
    height: 300
  },
  name: {
    fontSize: 30
  },
  label: {
    fontWeight: 'bold'
  },
  sites: {

  },
  linkPairs: {

  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline'
  },
  currentCompany: {

  },
  pastCompanies: {

  },
  singleCompany: {

  },
  scrollView: {
    height: 300
  }
})

export default GradDetail
