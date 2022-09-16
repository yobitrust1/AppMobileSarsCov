/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';


import tailwind from 'tailwind-rn';
import { Button, TouchableOpacity, Text } from 'react-native';


const FormButton = (prpos) => {
  return (

    < >
      <TouchableOpacity style={tailwind('bg-teal-400 px-3 py-3 mx-3 my-3  w-32 rounded-md')} onPress={prpos.onPress}>
        <Text style={tailwind('text-white font-bold text-center')}>
          {prpos.title}
        </Text>
      </TouchableOpacity>
    </>
  );
};




export default FormButton;
