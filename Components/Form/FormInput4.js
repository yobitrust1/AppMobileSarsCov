import {useState} from 'react';
//import { TextInput } from 'react-native-paper';

import tailwind from 'tailwind-rn';
import { Button, TouchableOpacity, Text, View, TextInput, ShadowPropTypesIOS } from 'react-native';


const FormInput = (props) => {
  const [value, setValue] = useState(1);

  const handleChange = event => {
    const value = Math.max(props.min, Math.min(props.max, Number(event)));
    setValue(value);
    props.onChangeText(value)
    
  };

  console.log(value);
  console.log(typeof value);
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
          value={value}
          onChangeText={handleChange} />
         { (value==props.max ||value==props.min-1) &&
         <Text style={tailwind("text-red-500")} >min is :{props.min} and max is:{props.max}  </Text>}
      </View>


    </>
  );
};

export default FormInput;
