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
import FormInput from "../../Form/FormInput";
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import DateTimePicker from '@react-native-community/datetimepicker';
import {LinearGradient} from 'expo-linear-gradient';
//import 'localstorage-polyfill';
import { ScrollView } from 'react-native-gesture-handler';



const PriseAINS1 = (props) => {
  const { colors } = useTheme();
  const [dose, setDose] = useState(0.0)
  const [duree, setDuree] = useState(0)
  const [molecule, setMolecule] = useState("")
  const [date, setDate] = useState(new Date())
  const [datePicker, setDatePicker] = useState(false);

  var handleDoseChange = (text) => {
    setDose(text)
  }
  var handleDureeChange = (text) => {
    setDuree(text)
  }
  var handleMoleculeChange = (text) => {
    setMolecule(text)
  }

  var handleSubmit = (e) => {
    var values = {
      antecedent: "PriseAINS",
      dose: dose,
      molecule: molecule,
      duree: duree,
      datePrise: date
    }
    e.preventDefault();
    console.log(values)
    props.antecedentsMedicaux(props.patientList["cin"], values)
    props.navigation.navigate("AddAntecendentsMedicaux1")
  }
  function showDatePicker() {
    setDatePicker(true);
  };
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  };



  return (
<ScrollView  >
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Prise récentes d'AINS</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >


      <View style={tailwind(' items-center ')} >

        <FormInput placeholder="Dose " type="decimal-pad" onChangeText={handleDoseChange} />
        <FormInput placeholder="Molecule" onChangeText={handleMoleculeChange} />
        <FormInput placeholder="Duree" type="number-pad" onChangeText={handleDureeChange} />
        <View style={styles.row}>

        <Text style={tailwind('text-gray-700 py-2')}>
        Date de prise ? </Text>
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
          <FormButton title="Retour" onPress={() => { props.navigation.navigate("AddAntecendentsMedicaux1") }} />
          <FormButton title="Enregister" onPress={handleSubmit} />

        </View>



      </View>



    </Animatable.View>
      </View>
      </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  patientList: state.medicalService.patientList
});
const mapActionToProps = {

  antecedentsMedicaux: actions.antecedentsMedicaux
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
export default connect(mapStateToProps, mapActionToProps)(PriseAINS1);
