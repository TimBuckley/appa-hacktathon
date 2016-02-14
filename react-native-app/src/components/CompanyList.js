import React, {
  Image,
  StyleSheet,
  ScrollView,
  Text,
  View} from 'react-native';

import Company from './Company'


const CompanyList = React.createClass({
  initialState: function() {
    return [
      {
        company_uuid: 'this-is-another-uuid1',
        company_name: 'Google',
        company_domain: 'google.com',
        number_of_grads: 10,
        locations: [
          'New York City',
          'Mountain View',
          'Somewhere in China'
        ]
      },
      {
        company_uuid: 'this-is-another-uuid2',
        company_name: 'Google',
        company_domain: 'google.com',
        number_of_grads: 10,
        locations: [
          'New York City',
          'Mountain View',
          'Somewhere in China'
        ]
      },
      {
        company_uuid: 'this-is-another-uuid3',
        company_name: 'Google',
        company_domain: 'google.com',
        number_of_grads: 10,
        locations: [
          'New York City',
          'Mountain View',
          'Somewhere in China'
        ]
      },
      {
        company_uuid: 'this-is-another-uuid4',
        company_name: 'Google',
        company_domain: 'google.com',
        number_of_grads: 10,
        locations: [
          'New York City',
          'Mountain View',
          'Somewhere in China'
        ]
      }
    ]
  },
  render: function() {
    const companies = this.props.companies || this.initialState()

    return(
      <ScrollView
        automaticallyAdjustContentInsets={false}
        scrollEventThrottle={200}
        style={styles.scrollView}
      >
        <View style={styles.container}>
          {companies.map((company) =>
            <Company
              key={company.company_uuid}
              style={styles.eachCompany}
              {...company} />)}
        </View>
      </ScrollView>
    )
  }
})


const styles = StyleSheet.create({
  scrollView: {
    marginTop: 50
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  eachCompany: {
    marginTop: 40,
    marginBottom: 40,
    paddingTop: 40,
    paddingBottom: 40,
  }
})

export default CompanyList
