import React, {
  Image,
  StyleSheet,
  ScrollView,
  Text,
  View} from 'react-native';

import Grad from './Grad'


const GradList = React.createClass({
  initialState: function() {
    return [
        {
          first_name: 'Fiona',
          last_name: 'Conn',
          uuid: '1',
          picture_url: 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAX0AAAAJGUxOTU3MjhjLTBiZmYtNDBmMi04NTRhLWZmOTJjMDZiZjNhMg.jpg',
          date_attended: {
            month: 'September',
            year: '2015'
          },
          bootcamp_name: 'AppAcademy'
        },
        {
          first_name: 'Fiona',
          last_name: 'Conn',
          uuid: '2',
          picture_url: 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAX0AAAAJGUxOTU3MjhjLTBiZmYtNDBmMi04NTRhLWZmOTJjMDZiZjNhMg.jpg',
          date_attended: {
            month: 'September',
            year: '2015'
          },
          bootcamp_name: 'AppAcademy'
        },
        {
          first_name: 'Fiona',
          last_name: 'Conn',
          uuid: '3',
          picture_url: 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAX0AAAAJGUxOTU3MjhjLTBiZmYtNDBmMi04NTRhLWZmOTJjMDZiZjNhMg.jpg',
          date_attended: {
            month: 'September',
            year: '2015'
          },
          bootcamp_name: 'AppAcademy'
        },
        {
          first_name: 'Fiona',
          last_name: 'Conn',
          uuid: '4',
          picture_url: 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAX0AAAAJGUxOTU3MjhjLTBiZmYtNDBmMi04NTRhLWZmOTJjMDZiZjNhMg.jpg',
          date_attended: {
            month: 'September',
            year: '2015'
          },
          bootcamp_name: 'AppAcademy'
        }
    ]
  },
  render: function() {
    const grads = this.props.grads || this.initialState()

    return(
      <ScrollView
        automaticallyAdjustContentInsets={false}
        scrollEventThrottle={200}
        style={styles.scrollView}
      >
        <View style={styles.container}>
          {grads.map((grad) =>
            <Grad
              key={grad.uuid}
              style={styles.eachGrad}
              {...grad} />)}
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
    // alignItems: 'flex-end',
    marginTop: 20
  },
  eachGrad: {
    marginTop: 40,
    marginBottom: 40,
    paddingTop: 40,
    paddingBottom: 40,
  }
})

export default GradList
