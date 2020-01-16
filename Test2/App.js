/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { createContext } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CustomHeader from './components/CustomHeader';
import { render } from 'react-dom';
import {
  tabNavigator
} from './navigation/MainTabNavigator'

var debug = ""

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ backgroundColor: Colors.lighter }}>
        <View style={{ marginTop: 32, marginBottom: 0 }}>
          <Text style={styles.title1}>Bitchass</Text>
          <Text style={styles.paragraph1}>{debug}</Text>
        </View>
      </ScrollView>
    </>
  );
}

apiReq()

async function apiReq() {
  var ret = fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => {
      debug = response
    }).catch((error) => {
      debug = "error"
      console.log(error)
    })
}

const styles = StyleSheet.create({
  title1: {
    fontSize: 40,
    fontWeight: '600',
    color: Colors.black,
    textAlign: "center"
  },
  title2: {
    fontSize: 32,
    fontWeight: '600',
    color: Colors.black,
    textAlign: "center"
  },
  paragraph1: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    textAlign: "center"
  }
})

export default App;
