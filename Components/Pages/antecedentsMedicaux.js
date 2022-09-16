import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../Form/FormButton";
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import 'localstorage-polyfill';
import { ScrollView } from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';
const AntecendentsMedicaux = (props) => {



  return (
<LinearGradient colors={['#d7dbdd', '#abebc6','#d7dbdd']} style={styles.body}>
    <ScrollView>


      <View style={tailwind(' items-center ')} >
        <Text style={tailwind('text-gray-700 font-bold py-2 text-xl text-center')}>Antécédents medicaux:{props.patientList["generalInformation"]["nom"] + " " + props.patientList["generalInformation"]["prenom"]}</Text>
        <View style={tailwind('py-24')}>
          <FormButton title="Ajouter un antécédent medical" onPress={() => { props.navigation.navigate("AddAntecendentsMedicaux") }} />
          <FormButton title="Liste des antécédents medicaux" onPress={() => props.navigation.navigate("AntecedentsList")} />
        </View>


        <FormButton title="Retour" onPress={() => { props.navigation.navigate("PatientDetails") }} />





      </View>
    </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2193b0',
  },
});

const mapStateToProps = (state) => ({

  patientList: state.medicalService.patientList,
});
const mapActionToProps = {
  getAllAntecedentsMedicaux: actions.getAllAntecedentsMedicaux,
  removeAntecedentMedical: actions.removeAntecedentMedical
};

export default connect(mapStateToProps, mapActionToProps)(AntecendentsMedicaux);
