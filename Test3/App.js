/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { createContext, Component } from 'react';
import RNFetchBlob from 'react-native-fetch-blob'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Linking,
  Image,
  SectionList,
  Picker,
  Vibration,
} from 'react-native';

import Divider from 'react-native-divider';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LinkList from 'react-native/Libraries/NewAppScreen/components/LearnMoreLinks';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    marginRight: 0,
    marginLeft: 0,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: Colors.lighter
  },
  imageContainer: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    height: 270,
    width: null,
  },
  title1: {
    fontSize: 40,
    fontWeight: '600',
    color: Colors.black,
    textAlign: "center",
    marginTop: 16
  },
  title2: {
    fontSize: 32,
    fontWeight: '600',
    color: Colors.black,
    textAlign: "center",
    marginTop: 8
  },
  paragraph1: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    textAlign: "center"
  },
  link: {
    fontSize: 20,
    fontWeight: '600',
    color: "blue",
    textAlign: "center"
  },
  picker: {
    fontSize: 40,
    alignItems: "center",
    textAlign: "center"
  },
  divider: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.grey,
    textAlign: "center"
  }
})

export default class app extends Component {

  async apiReq() {
    this.debug = "njcdfskjnm"
    var ret = await RNFetchBlob.config({
      trusty: true
    }).fetch('GET', 'https://192.168.1.180:443/randomRecipe' + this.state.recipeOption)

    ret = await JSON.parse(ret.data)
    const data = ret
    this.setState({ data })
    Vibration.vibrate(40)
  }

  constructor() {
    super()
    this.debug = ""
    this.state = {
      data: {
      },
      recipeOption: ""
    }
  }

  componentDidMount() {
    this.apiReq()
  }



  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.screen}>
          <ScrollView>
            <Picker
              selectedValue={this.state.recipeOption}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ recipeOption: itemValue })
              }>
              <Picker.Item label="Primi" value="/Primi" />
              <Picker.Item label="Secondi" value="/Secondi" />
              <Picker.Item label="Dolci" value="/Dolci" />
              <Picker.Item label="Contorni" value="/Contorni" />
              <Picker.Item label="Antipasti" value="/Antipasti" />
              <Picker.Item label="Piatti Unici" value="/Piatti-Unici" />
              <Picker.Item label="Lievitati" value="/Lievitati" />
            </Picker>


            <View style={styles.imageContainer} onTouchStart={() => { this.apiReq() }}>
              <Image
                source={{ uri: this.state.data ? this.state.data.image : "" }}
                style={styles.image}
                resizeMode="contain" />
            </View>
            <Text style={styles.title1}>
              {this.state.data ? this.state.data.name : ""}
            </Text>

            <View style={{ marginTop: 8, marginBottom: 8 }} />
            <Divider borderColor="#000" textStyle={styles.divider} orientation="center" padding={10}>Porzioni</Divider>

            <Text style={styles.title2}>
              {this.state.data.name ? this.state.data.recipeYield.toString() : ""}
            </Text>

            <View style={{ marginTop: 8, marginBottom: 8 }} />
            <Divider borderColor="#000" textStyle={styles.divider} orientation="center" padding={10}>Tempo</Divider>

            <Text style={styles.title2}>
              {this.state.data.name ? (this.state.data.prepTime + this.state.data.cookTime).toString() + " Minuti" : ""}
            </Text>

            <View style={{ marginTop: 8, marginBottom: 8 }} />
            <Divider borderColor="#000" textStyle={styles.divider} orientation="center" padding={10}>Instructions</Divider>
            <View style={{ marginTop: 8, marginBottom: 8 }} />
            <Text
              style={styles.paragraph1}>
              {this.state.data ? this.state.data.recipeInstructions : ""}
            </Text>
          </ScrollView>
        </View>
      </>
    );
  }
}