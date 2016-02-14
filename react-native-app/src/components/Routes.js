import React, {AppRegistry, Navigator, StyleSheet, Text, View} from 'react-native'
import {
  Router,
  Route,
  Schema,
  Animations,
  TabBar } from 'react-native-router-flux'

import CompanyList from './CompanyList'
import GradList from './GradList'

const Routes = React.createClass({
  render: function() {
    return(
      <Router hideNavBar={false} name="root">
        <Schema
          name="modal"
          sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
        <Schema
          name="default"
          sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
        <Schema
          name="withoutAnimation"/>
        <Schema
          name="tab"
          type="switch" />

        <Route
          name="main"
          component={GradList}
          title="Main"
          type="replace"
          initial="true"/>
        <Route
          name="graduates"
          component={GradList}
          title="Graduates"
          type="replace"/>
        <Route
          name="companies"
          component={CompanyList}
          title="Companies"
          type="replace"/>

      </Router>

    )
  }
})

export default Routes
