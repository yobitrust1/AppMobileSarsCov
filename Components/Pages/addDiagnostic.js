import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../Form/FormButton";
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import {Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {LinearGradient} from 'expo-linear-gradient';
import 'localstorage-polyfill';



const AddDiagnostic = (props) => {
  const [date, setDate] = useState()
  const [date2, setDate2] = useState()
  const [datePicker, setDatePicker] = useState(false);
  var handleAdd = (e) => {
    var values = {
      date: date
    }
    e.preventDefault()
    setDate2(date)
    props.addDiagnostic(props.patientList["cin"], values)
    //console.log(props.message)
  }
  function showDatePicker() {
    setDatePicker(true);
  };
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  };
  return (

<LinearGradient colors={['#d7dbdd', '#abebc6','#d7dbdd']} style={styles.body}>
    <ScrollView>
      {props.message != undefined && typeof (props.message) !== 'string' && date2 != undefined && props.navigation.navigate("DiagnosticDetails")}

      <View style={tailwind(' items-center ')} >
        <Text style={tailwind('text-gray-700 font-bold py-2 text-xl text-center')}>Ajouter diagnostic: {props.patientList["generalInformation"]["nom"] + " " + props.patientList["generalInformation"]["prenom"]}</Text>
        <Text style={tailwind("text-red-500 py-8")}>{props.message != undefined && typeof (props.message) === 'string' && date2 != undefined && props.message}</Text>
        <View style={styles.row}>

        <Text style={tailwind('text-gray-700 py-2')}>
          date de naissance ? </Text>
      {datePicker && (
          <DateTimePicker
            value={date}
            mode={'date'}
            minimumDate={new Date(1950, 0, 1)}
            maximumDate={new Date()}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateSelected}
            style={styles.datePicker}
          />
        )}
        {!datePicker && (
          <View >
            <Button title={(date !== undefined && date.toDateString()) || "Show Date Picker"} color="green" onPress={showDatePicker} />
          </View>
          
        )}
      </View>

        <View style={styles.row}>

          <FormButton title=" Ajouter " onPress={handleAdd} />
          <FormButton title="Retour" onPress={() => { props.navigation.navigate("Diagnostic") }} />
        </View>



      </View>
    </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  datePicker1: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  },
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
  message: state.medicalService.message

});
const mapActionToProps = {
  addDiagnostic: actions.addDiagnostic

};

export default connect(mapStateToProps, mapActionToProps)(AddDiagnostic);
