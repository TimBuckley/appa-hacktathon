import React, {
  Image,
  StyleSheet,
  ScrollView,
  Text,
  View} from 'react-native';

import newId from '../lib/RandomKey'


const Company = React.createClass({
  initialState: function() {
      return {
        company_uuid: 'this-is-another-uuid',
        company_name: 'Google',
        company_domain: 'google.com',
        number_of_grads: 10,
        locations: [
          'New York City',
          'Mountain View',
          'Somewhere in China'
        ]
      }
  },
  render: function() {
    const {
      company_uuid,
      company_name,
      company_domain,
      number_of_grads,
      locations } = this.props || this.initialState()

    const clearbit = "https://logo.clearbit.com/"
    const picture_url = `${clearbit}${company_domain}`

    return(
      <View style={styles.container} key={company_uuid}>
        <Image
          style={styles.logo}
          source={{uri: picture_url}}
        />
        <Text style={styles.name}>{company_name}</Text>
      </View>
    )
  }
})



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontSize: 20,
    marginLeft: 20
  },
  logo: {
    width: 50,
    height: 50
  }
})

export default Company
