/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';

var test=Math.floor(Math.random() * 100)
import tailwind from 'tailwind-rn';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import CheckBox from 'expo-checkbox';


const FormCheckBox = (props) => {
  const [value, setValue] = useState(props.value)
  return (
    <>
      <View style={tailwind("text-left")} >
        <View style={styles.row}>

          <CheckBox 
          id={test}
            // disabled={false}
            value={value}
            // tintColors={{ true: '#51d1c5', false: '#51d1c5' }}

            onValueChange={(newValue) => { setValue(newValue); props.onPress(newValue, props.text) }}
          />
          <Text for={test}  style={tailwind("py-1 text-gray-700")}> {props.text}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
});





export default FormCheckBox;
