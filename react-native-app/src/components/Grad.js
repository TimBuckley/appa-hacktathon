import React, {
  Image,
  StyleSheet,
  ScrollView,
  Text,
  View} from 'react-native';



const Grad = React.createClass({
  initialState: function() {
      return {
          uuid: 'th1S-isau-uidf-orfi-onac',
          first_name: 'Fiona',
          last_name: 'Conn',
          picture_url: 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAX0AAAAJGUxOTU3MjhjLTBiZmYtNDBmMi04NTRhLWZmOTJjMDZiZjNhMg.jpg',
          date_attended: {
            month: 'September',
            year: '2015'
          },
          bootcamp_name: 'AppAcademy'
      }
  },
  render: function() {
    const {
      uuid,
      first_name,
      last_name,
      picture_url,
      date_attended,
      bootcamp_name } = this.props.grad || this.initialState()

    const { month, year } = date_attended

    return(
      <View style={styles.container} key={uuid}>
        <Image
          style={styles.avatar}
          source={{uri: picture_url}}
        />
        <Text style={styles.name}>{first_name} {last_name}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.bootcamp}>{bootcamp_name}</Text>
          <Text style={styles.cohort}>{month} {year}</Text>
        </View>
      </View>
    )
  }
})



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  avatar: {
    width: 50,
    height: 50
  },
  name: {
    fontSize: 20,
    marginLeft: 20
  },
  infoContainer: {
    marginLeft: 20,
  },
  bootcamp: {
    fontSize: 10
  },
  cohort: {
    fontSize: 10
  },
  label: {
    fontWeight: 'bold'
  },
  scrollView: {
    height: 300
  }
})

export default Grad
