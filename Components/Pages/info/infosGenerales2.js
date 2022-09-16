import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import 'localstorage-polyfill';
import FormInput from "../../Form/FormInput";
import RadioGroup from 'react-native-radio-buttons-group';
import DatePicker from 'react-native-datepicker'
import FormButton from '../../Form/FormButton';
import {LinearGradient} from 'expo-linear-gradient';
import JSONTree from 'react-native-json-tree'
import Heading from './Heading';
// If you're using Immutable.js: `npm i --save immutable`
import { Map } from 'immutable'
const json = {
array: [1, 2, 3],
bool: true,
object: {
  foo: 'bar',
},
immutable: Map({ key: 'value' })
}
const theme = {
  scheme: 'monokai',
  base00: '#272822',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#f92672',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#a6e22e',
  base0C: '#a1efe4',
  base0D: '#66d9ef',
  base0E: '#ae81ff',
  base0F: '#cc6633'
};
const InfosGenerales2 = (props) => {

      return (
  <LinearGradient colors={['#d7dbdd', '#abebc6','#d7dbdd']} style={styles.body}>
          <ScrollView style={tailwind(' overflow-visible h-24 h- ...')}>


              <View style={tailwind(' items-center ')} >
              <Heading>react-native-json-tree</Heading>
<JSONTree  data={props.patientList} theme={theme} invertTheme={false}   />

              </View>
          </ScrollView>
          </LinearGradient>
      );
};

  const mapStateToProps = (state) => ({
      patientList: state.medicalService.patientList
  });
  const mapActionToProps = {
  };
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2193b0',
    },
  });
  export default connect(mapStateToProps, mapActionToProps)(InfosGenerales2);
