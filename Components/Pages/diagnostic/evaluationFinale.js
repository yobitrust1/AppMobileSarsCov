import { Button,
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
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
//import 'localstorage-polyfill';
import RadioGroup from 'react-native-radio-buttons-group';
import DateTimePicker from '@react-native-community/datetimepicker';
import FormInput from '../../Form/FormInput';
import FormInput2 from '../../Form/FormInput2';
import {LinearGradient} from 'expo-linear-gradient';




const EvaluationFinale1 = (props) => {
  const { colors } = useTheme();
  const [dateSor, setDateSor] = useState(new Date())
  const [deces, setDeces] = useState(false)
  const [dateDispSig, setDateDispSig] = useState(new Date())
  const [causesDir, setCausesDir] = useState()
  const [causesIndir, setCausesIndir] = useState()
  const [datePicker, setDatePicker] = useState(false);
  const [datePicker1, setDatePicker1] = useState(false);
  var handleDecesChange = (data) => {
    if (data[0].selected)
      setDeces(false)
    else setDeces(true)
  }
  var handleSubmit = (e) => {
    e.preventDefault()
    var values = {
      dateSor: dateSor,
      dateDispSig: dateDispSig,
      deces: deces,
      causesDir: causesDir,
      causesIndir: causesIndir,
    }
    //console.log(values)
    props.addEvaluationFinale(props.patientList["cin"], values)
    props.navigation.navigate("DiagnosticDetails")
  }
  function showDatePicker() {
    setDatePicker(true);
  };
  function onDateSelected(event, value) {
    setDateSor(value);
    setDatePicker(false);
  };
  function showDatePicker1() {
    setDatePicker1(true);
  };
  function onDateSelected1(event, value) {
    setDateDispSig(value);
    setDatePicker1(false);
  };

  return (
<ScrollView  >
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Evaluation finale</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >



      <View style={tailwind("items-center py-8")}>
      <View style={styles.row}>

<Text style={tailwind('text-gray-700 py-2')}>
  date de naissance ? </Text>
{datePicker && (
  <DateTimePicker
    value={dateSor}
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
    <Button title={(dateSor !== undefined && dateSor.toDateString()) || "Show Date Picker"} color="green" onPress={showDatePicker} />
  </View>
  
)}
</View>


      </View>
      <View style={tailwind("items-center")}>
        <View style={styles.row}>
          <Text style={tailwind("text-gray-700")}>Décès</Text>
          <RadioGroup radioButtons={[

            {
              label: "  Non",
              color: '#51d1c5',
            },
            {
              label: "Oui",
              color: '#51d1c5',
            },

          ]}
            //flexDirection='row'
            style={tailwind('')}
            onPress={handleDecesChange}
          />


        </View>
        {
          deces === false &&
          <View style={styles.row}>

          <Text style={tailwind('text-gray-700 py-2')}>
            date de naissance ? </Text>
        {datePicker1 && (
            <DateTimePicker
              value={dateDispSig}
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
              <Button title={(dateDispSig !== undefined && dateDispSig.toDateString()) || "Show Date Picker"} color="green" onPress={showDatePicker1} />
            </View>
            
          )}
        </View>
  
        }
        {
          deces === true && <View>
            <FormInput placeholder="Causes directes" onChangeText={setCausesDir} />
            <FormInput placeholder="Causes indirectes" onChangeText={setCausesIndir} />
          </View>
        }

      </View>

      <View style={styles.row}>
          <FormButton title="Retour" onPress={() => { props.navigation.navigate("DiagnosticDetails") }} />
          <FormButton title="Enregistrer" onPress={handleSubmit} />

        </View>
      <View>

      </View>
      </Animatable.View>
      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
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
    datePicker1: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: 320,
      height: 260,
      display: 'flex',
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


const mapStateToProps = (state) => ({
  loggedUser: state.medicalService.loggedUser,
  patientList: state.medicalService.patientList,
});
const mapActionToProps = {
  login: actions.login,
  logout: actions.logout,
  addEvaluationFinale: actions.addEvaluationFinale
};
export default connect(mapStateToProps, mapActionToProps)(EvaluationFinale1);
