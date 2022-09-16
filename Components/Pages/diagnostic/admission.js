import { Button,
  View, 
  Text, 
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
import RadioGroup from 'react-native-radio-buttons-group';
import DateTimePicker from '@react-native-community/datetimepicker';
import { connect } from "react-redux";
//import 'localstorage-polyfill';
import { ScrollView } from 'react-native-gesture-handler';
import FormInput from '../../Form/FormInput';
import {LinearGradient} from 'expo-linear-gradient';

const Admission1 = (props) => {
  const { colors } = useTheme();
  const [type, setType] = useState("hhop")
  const [lieu, setLieu] = useState("chez lui")
  const [lieuCB, setLieuCB] = useState("lui")
  const [dateEnt, setDateEnt] = useState(new Date())
  const [mode, setMode] = useState("transfert inter-hopital")
  const [modeCB, setModeCB] = useState("transfert")
  const [hopital, setHopital] = useState()
  const [service, setService] = useState()
  const [datePicker, setDatePicker] = useState(false);
  function showDatePicker() {
    setDatePicker(true);
  };
  function onDateSelected(event, value) {
    setDateEnt(value);
    setDatePicker(false);
  };
  var handleModeCB = (data) => {
    if (data[0].selected) {
      setMode(data[0].label)
      setModeCB(data[0].label)
    }
    if (data[1].selected) {
      setMode(data[1].label)
      setModeCB(data[1].label)
    }
    if (data[2].selected) {
      setMode(data[2].label)
      setModeCB(data[2].label)
    }
    if (data[3].selected) {
      setMode(data[3].label)
      setModeCB(data[3].label)
    }
    if (data[4].selected) {
      setMode(data[4].label)
      setModeCB(data[4].label)
    }
    if (data[5].selected) {
      //setMode(data[5].label)
      setModeCB(data[5].label)
    }
  }
  var handleTypeChange = (data) => {
    if (data[0].selected)
      setType("hhop")
    if (data[1].selected)
      setType("hop")
  }
  var handleLieuCB = (data) => {
    if (data[0].selected) {
      setLieu("chez lui"),
        setLieuCB("lui")
    }
    if (data[1].selected) {
      setLieuCB("centre")
    }
    if (data[2].selected)
      setLieuCB("autre")

  }
  var handleLieuChange = (text) => {
    setLieu(text)
  }
  var handleHopitalChange = (text) => {
    setHopital(text)
  }
  var handleServiceChange = (text) => {
    setService(text)
  }
  var handleModeChange = (text) => {
    setMode(text)
  }

  var handleSubmit = (e) => {
    e.preventDefault();
    var values = {
      type: type,
      lieu: lieu,
      hopital: hopital,
      service: service,
      dateEnt: dateEnt,
      mode: mode,

    }
    console.log(values)
    console.log(props.patientList["cin"])
    props.addAdmission(props.patientList["cin"], values)
    props.navigation.navigate("DiagnosticDetails")

  }

  return (
    <ScrollView  >
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Admission d'un cas confirmé COVID-19</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >
      <Text style={tailwind(" text-gray-700 text-center pt-8 pb-2")}>Admission?</Text>
      <RadioGroup radioButtons={[

        {
          label: "En dehors de l'hopital",
          color: '#51d1c5',
        },
        {
          label: "A l'hopital",
          color: '#51d1c5',
        },


      ]}
        flexDirection='row'
        style={tailwind('')}
        onPress={handleTypeChange}
      />
      {
        type === "hhop" && <View style={tailwind("items-center")}>
          <Text style={tailwind(" text-gray-700 text-center pt-8 pb-2")}>Précisier le lieu?</Text>
          <RadioGroup radioButtons={[

            {
              label: "Chez lui",
              color: '#51d1c5',
            },
            {
              label: "Dans un centre d'isolement",
              color: '#51d1c5',
            },
            {
              label: "Autre",
              color: '#51d1c5',
            }


          ]}
            //flexDirection='row'
            style={tailwind('')}
            onPress={handleLieuCB}
          />
          {lieuCB === "autre" && <FormInput placeholder="..." onChangeText={handleLieuChange} />}
          {lieuCB == "centre" && <FormInput placeholder="Préciser le quel" onChangeText={handleLieuChange} />}
          <View style={styles.row}>

        <Text style={tailwind('text-gray-700 py-2')}>
        Date d'entée? </Text>
      {datePicker && (
          <DateTimePicker
            value={dateEnt}
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
            <Button title={(dateEnt !== undefined && dateEnt.toDateString()) || "Show Date Picker"} color="green" onPress={showDatePicker} />
          </View>
          
        )}
      </View>

        </View>
      }
      {
        type === "hop" && <View style={tailwind("items-center")}>
          <FormInput placeholder="Hopital" onChangeText={handleHopitalChange} />
          <FormInput placeholder="Service" onChangeText={handleServiceChange} />
          <View style={styles.row}>

        <Text style={tailwind('text-gray-700 py-2')}>
        Date d'entée? </Text>
      {datePicker && (
          <DateTimePicker
            value={dateEnt}
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
            <Button title={(dateEnt !== undefined && dateEnt.toDateString()) || "Show Date Picker"} color="green" onPress={showDatePicker} />
          </View>
          
        )}
      </View>

          <Text style={tailwind(" text-gray-700 text-center pt-8 pb-2")}>Mode d'entrée?</Text>
          <RadioGroup radioButtons={[

            {
              label: "Transfert inter-hopital",
              color: '#51d1c5',
            },
            {
              label: "Transfert inter-service",
              color: '#51d1c5',
            },
            {
              label: "Urgences",
              color: '#51d1c5',
            },
            {
              label: "SAMU",
              color: '#51d1c5',
            },
            {
              label: "D'un lieu d'isolement(Chez lui ou centre)",
              color: '#51d1c5',
            },
            {
              label: "Autre",
              color: '#51d1c5',
            },
          ]}
            //flexDirection='row'
            style={tailwind('')}
            onPress={handleModeCB}
          />
          {modeCB === "Autre" && <FormInput placeholder="Précisier" onChangeText={handleModeChange} />}


        </View>
      }
     <View style={styles.row}>
          <FormButton title="Retour" onPress={() => { props.navigation.navigate("DiagnosticDetails") }} />
          <FormButton title="Enregistrer" onPress={handleSubmit} />

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
      datePicker1: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 320,
        height: 260,
        display: 'flex',
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
  
const mapStateToProps = (state) => ({
  loggedUser: state.medicalService.loggedUser,
  patientList: state.medicalService.patientList,

});
const mapActionToProps = {
  addAdmission: actions.addAdmission
};
export default connect(mapStateToProps, mapActionToProps)(Admission1);
