import { 
    View, 
    Text, 
    ScrollView, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../Form/FormButton";
import * as actions from "../../Actions/medicalService";
import RadioGroup from 'react-native-radio-buttons-group';
import { connect } from "react-redux";
import 'localstorage-polyfill';
import FormInput from '../Form/FormInput';
import {LinearGradient} from 'expo-linear-gradient';


const HabitudesDeVie1 = (props) => {
    const { colors } = useTheme();

    const [Mg2_1, setMg2_1] = useState(1);
    const [LDH1, setLDH1] = useState(1);
    const [GB1, setGB1] = useState(1);
    const [BiliT1, setBiliT1] = useState(1);
    const [creat1, setcreat1] = useState(1);
    const [ASAT1, setASAT1] = useState(1);
    const [fibrinogene1, setfibrinogene1] = useState(1);
    const [pH1, setpH1] = useState(1);
    const [temperature, settemperature] = useState(1);
    const [CRP1, setCRP1] = useState(1);
    const [prediction, setprediction] = useState();
    var handle1Change = (text) => {
      setMg2_1(text)
  }
  var handle2Change = (text) => {
    setLDH1(text)
  }
  var handle3Change = (text) => {
    setGB1(text)
  }
  var handle4Change = (text) => {
    setBiliT1(text)
  }
  var handle5Change = (text) => {
    setcreat1(text)
  }
  var handle6Change = (text) => {
    setASAT1(text)
  }
  
  var handle7Change = (text) => {
    setfibrinogene1(text)
  }
  var handle8Change = (text) => {
    setpH1(text)
  }
  var handle9Change = (text) => {
    settemperature(text)
  }
  var handle10Change = (text) => {
    setCRP1(text)
  }
  
  function get_prediction() {
    alert(prediction)};  
  useEffect(() => {
    fetch('https://testflaskpythonjihed.herokuapp.com/predict',{method:"POST",
    body :JSON . stringify({'Mg2_1':Mg2_1,'LDH1':LDH1,'GB1':GB1,'BiliT1':BiliT1,'créat1':creat1,'ASAT1':ASAT1,'fibrinogène1':fibrinogene1,'pH1':pH1,'température':temperature,'CRP1':CRP1,})})
      .then(res => res.json())
        .then(data => {
          setprediction(data.pred);
          console.log('data')
        });
    });
  
  
     

    return (
<ScrollView  >
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>les 10 variables du modèle Mortalité</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >
            <View style={tailwind(' items-center ')} >
            <FormInput placeholder="Mg2_1" type="number-pad" onChangeText={handle1Change} required/>
       <FormInput placeholder="LDH1" type="number-pad" onChangeText={handle2Change} required/>
       <FormInput placeholder="GB1" type="number-pad" onChangeText={handle3Change} required />
       <FormInput placeholder="BiliT1" type="number-pad" onChangeText={handle4Change} required />
       <FormInput placeholder="creat1" type="number-pad" onChangeText={handle5Change} required />
       <FormInput placeholder="ASAT1" type="number-pad" onChangeText={handle6Change}required/>
       <FormInput placeholder="fibrinogene1" type="number-pad" onChangeText={handle7Change} required />
       <FormInput placeholder="pH1" type="number-pad" onChangeText={handle8Change} required />
       <FormInput placeholder="temperature" type="number-pad" onChangeText={handle9Change}required />
       <FormInput placeholder="CRP1" type="number-pad" onChangeText={handle10Change}required />
       
       <FormButton title="prediction" onPress={get_prediction} />
       <Text> "prediction est "{prediction}</Text>
            </View>
 



            </Animatable.View>
      </View>
      </ScrollView>
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
      container: {
        flex: 1, 
        backgroundColor: '#009387'
      },
      header: {
          flex: 1,
          justifyContent: 'flex-end',
          paddingHorizontal: 20,
          paddingBottom: 50
      },
      footer: {
          flex: 3,
          backgroundColor: '#fff',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingHorizontal: 20,
          paddingVertical: 30
      },
      text_header: {
        color: '#fff',
        fontWeight: 'bold',
        marginTop: Platform.OS === 'ios' ? 0 : 39,
        fontSize: 25
    },
      text_footer: {
          color: '#05375a',
          fontSize: 18
      },
      action: {
          flexDirection: 'row',
          marginTop: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#f2f2f2',
          paddingBottom: 5
      },
      actionError: {
          flexDirection: 'row',
          marginTop: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#FF0000',
          paddingBottom: 5
      },
      textInput: {
          flex: 1,
          marginTop: Platform.OS === 'ios' ? 0 : -12,
          paddingLeft: 10,
          color: '#05375a',
      },
      errorMsg: {
          color: '#FF0000',
          fontSize: 14,
      },
      button: {
          alignItems: 'center',
          marginTop: 50
      },
      signIn: {
          width: '100%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10
      },
      textSign: {
          fontSize: 18,
          fontWeight: 'bold'
      }
    });



export default HabitudesDeVie1;
