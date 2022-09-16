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


const HabitudesDeVie2 = (props) => {
      return (
  <LinearGradient colors={['#d7dbdd', '#abebc6','#d7dbdd']} style={styles.body}>
          <ScrollView style={tailwind(' overflow-visible h-24 h- ...')}>


              <View style={tailwind(' items-center ')} >

              <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}></Text>
              <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>datePr:{props.patientList["confDiags"]["datePr"]}</Text>
              <Text style={tailwind('text-gray-500 font-bold py-2 text-lg')}>type:{props.patientList["confDiags"]["type"]}</Text>
              <Text style={tailwind('text-gray-500 font-bold py-2 text-lg')}>result:{props.patientList["confDiags"]["result"]}</Text>
              <Text style={tailwind('text-gray-500 font-bold py-2 text-lg')}>sexe:{props.patientList["confDiags"]["sexe"]}</Text>
              <Text style={tailwind('text-gray-500 font-bold py-2 text-lg')}>birthDate:{props.patientList["confDiags"]["birthDate"]}</Text>
              <Text style={tailwind('text-gray-500 font-bold py-2 text-lg')}>nationnalite:{props.patientList["confDiags"]["nationnalite"]}</Text>
              <Text style={tailwind('text-gray-500 font-bold py-2 text-lg')}>adresse:{props.patientList["generalInformation"]["adresse"]}</Text>
              <Text style={tailwind('text-gray-500 font-bold py-2 text-lg')}>telPort:{props.patientList["generalInformation"]["telPort"]}</Text>
              <Text style={tailwind('text-gray-500 font-bold py-2 text-lg')}>telDomicile:{props.patientList["generalInformation"]["telDomicile"]}</Text>
              <Text style={tailwind('text-gray-500 font-bold py-2 text-lg')}>profession:{props.patientList["generalInformation"]["profession"]}</Text>
              <Text style={tailwind('text-gray-500 font-bold py-2 text-lg')}>niveauEtude:{props.patientList["generalInformation"]["niveauEtude"]}</Text>
              <Text style={tailwind('text-gray-500 font-bold py-2 text-lg')}>vitSeul:{props.patientList["generalInformation"]["vitSeul"].toString()}</Text>
              <Text style={tailwind('text-gray-500 font-bold py-2 text-lg')}>enfant:{props.patientList["generalInformation"]["enfant"]}</Text>
              <Text style={tailwind('text-gray-500 font-bold py-2 text-lg')}>chambres:{props.patientList["generalInformation"]["chambres"]}</Text>
              <Text style={tailwind('text-gray-500 font-bold py-2 text-lg')}>mariee:{props.patientList["generalInformation"]["mariee"]}</Text>
              </View>
          </ScrollView>
          </LinearGradient>
      );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
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
  export default connect(mapStateToProps, mapActionToProps)(HabitudesDeVie2);
