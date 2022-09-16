import React from "react";
import { StyleSheet } from "react-native";

import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import 'react-native-gesture-handler';
import App1 from "./App1";
import { createStore, applyMiddleware } from 'redux';


export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  handleResourcesAsync = async () => {
    // we're caching all the images
    // for better performance on the app

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  };

  render() {
    return (
        <App1 />
    );
  }
}

const styles = StyleSheet.create({});
