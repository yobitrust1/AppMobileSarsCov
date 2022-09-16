import React from 'react';
//import { TextInput } from 'react-native-paper';

import tailwind from 'tailwind-rn';
import { Button, TouchableOpacity, Text, View, TextInput, ShadowPropTypesIOS } from 'react-native';


const FormInput = (props) => {
  return (

    <>
      <View style={tailwind('w-1/2 items-center')}>
        <TextInput style={tailwind('border  border-teal-500 my-3  rounded-md w-64')}
          selectTextOnFocus
          placeholder={props.placeholder}
          secureTextEntry={Boolean(props.isPassword)}
          keyboardType={props.type}
          editable={props.editable!==null}
          maxLength={props.maxLength}
          onChangeText={(text) => props.onChangeText(text)} />
      </View>


    </>
  );
};

export default FormInput;
