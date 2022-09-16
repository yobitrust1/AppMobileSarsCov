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

    const [prediction, setprediction] = useState();
  const [prediction2, setprediction2] = useState();
  const [laboratory_test_L, setLaboratory_test_L] = useState(0)
  const [laboratory_test_N, setLaboratory_test_N] = useState(0)
  const [laboratory_test_ESR, setLaboratory_test_ESR] = useState()
  const [laboratory_test_CRP, setLaboratory_test_CRP] = useState()
  const [laboratory_test_PCT, setLaboratory_test_PCT] = useState()
  const [laboratory_test_CK_MB, setLaboratory_test_CK_MB] = useState()
  const [laboratory_test_D_dimer, setLaboratory_test_D_dimer] = useState()
  const [laboratory_test_ALT, setLaboratory_test_ALT] = useState()
  const [laboratory_test_AST, setLaboratory_test_AST] = useState()
  const [laboratory_test_ALB, setLaboratory_test_ALB] = useState()
  const [laboratory_test_LDH, setLaboratory_test_LDH] = useState()
  const [age, setAge] = useState()
  const [cK, setCK] = useState()
  const [o2, setO2] = useState()
  const [symptoms_Cough, setSymptoms_Cough] = useState()
  const [symptoms_Dyspnea, setSymptoms_Dyspnea] = useState()
  const [symptoms_Fatigue, setSymptoms_Fatigue] = useState()
  var handle1Change = (text) => {
    setLaboratory_test_L(text)
}
var handle2Change = (text) => {
  setLaboratory_test_N(text)
}
var handle3Change = (text) => {
  setLaboratory_test_ESR(text)
}
var handle4Change = (text) => {
  setLaboratory_test_CRP(text)
}
var handle5Change = (text) => {
  setLaboratory_test_PCT(text)
}
var handle6Change = (text) => {
  setLaboratory_test_CK_MB(text)
}

var handle7Change = (text) => {
  setLaboratory_test_D_dimer(text)
}
var handle8Change = (text) => {
  setLaboratory_test_ALT(text)
}
var handle9Change = (text) => {
  setLaboratory_test_AST(text)
}
var handle10Change = (text) => {
  setLaboratory_test_ALB(text)
}
var handle11Change = (text) => {
  setLaboratory_test_LDH(text)
}
var handle12Change = (text) => {
  setAge(text)
}
var handle13Change = (text) => {
  setCK(text)
}
var handle14Change = (text) => {
  setO2(text)
}
var handle15Change = (data) => {
  if (data[0].selected)
  setSymptoms_Cough(true)
    else setSymptoms_Cough(false)
}
var handle16Change = (data) => {
  if (data[0].selected)
  setSymptoms_Dyspnea(true)
    else setSymptoms_Dyspnea(false)
}
var handle17Change = (data) => {
  if (data[0].selected)
  setSymptoms_Fatigue(true)
    else setSymptoms_Fatigue(false)
};
function get_prediction() {
  alert(prediction)};
function get_prediction2() {
    alert(prediction2)};  
useEffect(() => {
  fetch('https://lit-brook-43404.herokuapp.com/predict',{method:"POST",
  body :JSON . stringify({ 'Laboratory_test_L':laboratory_test_L, 'Laboratory_test_N':laboratory_test_N, 'Laboratory_test_ESR_(mm/hr)':laboratory_test_ESR, 'Laboratory_test_CRP_(mg/L)':laboratory_test_CRP, 'Laboratory_test_PCT_(ng/ml)':laboratory_test_PCT, 'Laboratory_test_CK_MB_(ng/ml)':laboratory_test_CK_MB, 'Laboratory_test_D_dimer_(ug/ml)':laboratory_test_D_dimer, 'Laboratory_test_ALT_(U/L)':laboratory_test_ALT, 'Laboratory_test_AST_(U/L)':laboratory_test_AST, 'Laboratory_test_ALB_(g/L)':laboratory_test_ALB, 'Laboratory_test_LDH_(U/L)':laboratory_test_LDH, 'Age':age, 'CK':cK, 'O2%':o2, 'Symptoms_Cough':symptoms_Cough, 'Symptoms_Dyspnea':symptoms_Dyspnea, 'Symptoms_Fatigue':symptoms_Fatigue,
})})
    .then(res => res.json())
      .then(data => {
        setprediction(data.pred);
        setprediction2(data.pred2);
        console.log(data)
      });
  });

    return (
<ScrollView  >
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>les 17 variables du modèle:</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >
            <View style={tailwind(' items-center ')} >
            <FormInput placeholder="laboratory_test_L" type="number-pad" onChangeText={handle1Change} required/>
       <FormInput placeholder="laboratory_test_N" type="number-pad" onChangeText={handle2Change} required/>
       <FormInput placeholder="laboratory_test_ESR" type="number-pad" onChangeText={handle3Change} required />
       <FormInput placeholder="laboratory_test_CRP" type="number-pad" onChangeText={handle4Change} required />
       <FormInput placeholder="laboratory_test_PCT" type="number-pad" onChangeText={handle5Change} required />
       <FormInput placeholder="laboratory_test_CK_MB" type="number-pad" onChangeText={handle6Change}required/>
       <FormInput placeholder="laboratory_test_D_dimer" type="number-pad" onChangeText={handle7Change} required />
       <FormInput placeholder="laboratory_test_ALT" type="number-pad" onChangeText={handle8Change} required />
       <FormInput placeholder="laboratory_test_AST" type="number-pad" onChangeText={handle9Change}required />
       <FormInput placeholder="laboratory_test_ALB" type="number-pad" onChangeText={handle10Change}required />
       <FormInput placeholder="laboratory_test_LDH" type="number-pad" onChangeText={handle11Change} required />
       <FormInput placeholder="Age" type="number-pad" onChangeText={handle12Change} required/>
       <FormInput placeholder="cK" type="number-pad" onChangeText={handle13Change}required />
       <FormInput placeholder="o2%" type="number-pad" onChangeText={handle14Change} required/>
       <View style={styles.row}>
            <Text style={tailwind('text-gray-700 py-2')}>
            symptoms_Cough ?</Text>
        <RadioGroup radioButtons={[
                        {
                            label: 'Non',
                            color: '#51d1c5',

                        },
                        {
                            label: 'Oui',
                            color: '#51d1c5',
                        },
                    ]}
                        flexDirection='row'
                        style={tailwind('')}
                        onPress={handle15Change}
                    />
        </View>
        <View style={styles.row}>
            <Text style={tailwind('text-gray-700 py-2')}>
            symptoms_Dyspnea ?</Text>
        <RadioGroup radioButtons={[
                        {
                            label: 'Non',
                            color: '#51d1c5',

                        },
                        {
                            label: 'Oui',
                            color: '#51d1c5',
                        },
                    ]}
                        flexDirection='row'
                        style={tailwind('')}
                        onPress={handle16Change}
                    />
        </View>
        <View style={styles.row}>
            <Text style={tailwind('text-gray-700 py-2')}>
            symptoms_Fatigue ?</Text>
        <RadioGroup radioButtons={[
                        {
                            label: 'Non',
                            color: '#51d1c5',

                        },
                        {
                            label: 'Oui',
                            color: '#51d1c5',
                        },
                    ]}
                        flexDirection='row'
                        style={tailwind('')}
                        onPress={handle17Change}
                    />
        </View>
       <FormButton title="prediction" onPress={get_prediction} />
       <FormButton title="prediction2" onPress={get_prediction2} />
       <Text> "prediction est "{prediction}</Text>
       <Text> "prediction2 est "{prediction2}</Text>
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
