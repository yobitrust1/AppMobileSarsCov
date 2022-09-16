import React, { useState, useEffect } from 'react';


import tailwind from 'tailwind-rn';
import {  Button,
  View, 
  Text, 
  TextInput,
  Platform,
  StyleSheet ,
  StatusBar,
  Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FormButton from "./FormButton";
import DateTimePicker from '@react-native-community/datetimepicker';


const CaracCls = (props) => {
  const [datePicker, setDatePicker] = useState(false);
  const [datePicker1, setDatePicker1] = useState(false);
  function showDatePicker() {
    setDatePicker(true);
  };
  function onDateSelected(event, value) {
    props.setDateD(value);
    setDatePicker(false);
  };
  function showDatePicker1() {
    setDatePicker1(true);
  };
  function onDateSelected1(event, value) {
    props.setDateF(value);
    setDatePicker1(false);
  };
  return (

    <>

<View style={styles.row}>

<Text style={tailwind('text-gray-700 py-2')}>
  Date de debut</Text>
{datePicker && (
  <DateTimePicker
    value={props.dateD}
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
    <Button title={(props.dateD !== undefined && props.dateD.toDateString()) || "Show Date Picker"} color="green" onPress={showDatePicker} />
  </View>
  
)}
</View>
<View style={styles.row}>

<Text style={tailwind('text-gray-700 py-2')}>
  Date de fin </Text>
{datePicker1 && (
  <DateTimePicker
    value={props.dateF}
    mode={'date'}
    minimumDate={new Date(1950, 0, 1)}
    maximumDate={new Date()}
    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
    is24Hour={true}
    onChange={onDateSelected1}
    style={styles.datePicker}
  />
)}
{!datePicker1 && (
  <View >
    <Button title={(props.dateF !== undefined && props.dateF.toDateString()) || "Show Date Picker"} color="green" onPress={showDatePicker1} />
  </View>
  
)}
</View>
      <FormButton title="Enregistrer" onPress={props.onSubmit} />

    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    padding: 10
  },
  
});


export default CaracCls;