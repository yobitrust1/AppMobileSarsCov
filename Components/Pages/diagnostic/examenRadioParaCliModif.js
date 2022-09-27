import { Button,
  View, 
  Text, 
  ScrollView, 
  TextInput,
  Platform,
  StyleSheet ,
  StatusBar,
  TouchableOpacity,
  Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import FormInput from "../../Form/FormInput";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
//import 'localstorage-polyfill';
import RadioGroup from 'react-native-radio-buttons-group';
import DateTimePicker from '@react-native-community/datetimepicker';
import FormCheckBox from "../../Form/CheckBox";
import {LinearGradient} from 'expo-linear-gradient';
import FormInput4 from '../../Form/FormInput4';




const ExamenRadioParaCli1 = (props) => {
  const { colors } = useTheme();
  const [datePicker, setDatePicker] = useState(false);
  const [type, setType] = useState(localStorage.getItem("type"))
  const [datePr, setDatePr] = useState(localStorage.getItem("datepr"));
  const [result, setResult] = useState("Normale")
  const [espaceQT, setEspaceQT] = useState()
  const [aspect, setAspect] = useState()
  const [nbQua, setNbQua] = useState()

  var handleCheckBoxChange = (newValue, text) => {
    if (newValue == true) setResult(result + text + " ")
    else { setResult(result.replace(text + " ", "")) }

  }

  function showDatePicker() {
    setDatePicker(true);
  };
  function onDateSelected(event, value) {
    datePr(value);
    setDatePicker(false);
  };
  
  var handleResultChange = (data) => {
    var i;
    for (i = 0; i < data.length; i++) {
      if (data[i].selected) { setResult(data[i].label) }

    }
  }
  var handleTypeChange = (data) => {
    if (data[0].selected) {
      setType("Thorax")
      setDatePr(new Date())
      setResult("Normale")
    }

    if (data[1].selected) {
      setType("TdmTho")
      setDatePr(new Date())
      setResult("")
    }

    if (data[2].selected) {
      setType("ECG")
      setDatePr(new Date())
      setResult("")
    }


  }
  var handleSubmit = (e) => {
    e.preventDefault()
    var values = {
      type: type,
      datePr: datePr,
      result: result,
      espaceQT: espaceQT,
      aspect: aspect,
      nbQua: nbQua,
      datepr: datePr
    }
    props.addExamRadioParaCli(props.patientList["cin"], values)
    props.navigation.navigate("DiagnosticDetails")
    console.log(values)

  }


  return (
<ScrollView  >
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Examens radiologiques et para-cliniques</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >
      

      <View style={tailwind("items-center")}>
    
      </View>
      {
        type === "Thorax" && <View style={tailwind("items-center py-2")}>
          <Text style={tailwind("font-bold py-4 text-xl text-gray-700")}>Radio Thorax</Text>
          <RadioGroup radioButtons={[
            {
              label: 'Normale',
              color: '#51d1c5',

            },
            {
              label: 'Opacité alvéolaire',
              color: '#51d1c5',
            },
            {
              label: 'Opacité interstitielle',
              color: '#51d1c5',
            },
          ]}
            //flexDirection='row'
            style={tailwind('')}
            onPress={handleResultChange}
          />
          <FormInput4 placeholder="Nb de quadrants atteints" type="number-pad" min="0" max="100" onChangeText={setNbQua} />
        </View>
      }
      {
        type === "TdmTho" && <View  >


          <Text style={tailwind("font-bold py-4 text-xl text-gray-700 text-center")}>TDM thoracique</Text>



          <View style={tailwind("px-6")}>

            <FormCheckBox text="Normale" value={false} onPress={handleCheckBoxChange} />
            <FormCheckBox text="Atteinte alvéolaire" value={false} onPress={handleCheckBoxChange} />
            <FormCheckBox text="Atteinte interstitielle"  value={false} onPress={handleCheckBoxChange} />
            <FormCheckBox text="Atteinte bilatérale"  value={false} onPress={handleCheckBoxChange} />
            <FormCheckBox text="Atteinte unilatérale"  value={false} onPress={handleCheckBoxChange} />


          </View>



          <View style={tailwind('items-center')}>
            <FormInput placeholder="Aspect en verre dépoli"  onChangeText={setAspect} />

          </View>
        </View>
      }
      {
        type === "ECG" && <View >
          <Text style={tailwind("font-bold py-4 text-xl text-gray-700 text-center")}>ECG</Text>
          <View style={tailwind("px-6")}>

            <FormCheckBox text="Normale" value={false} onPress={handleCheckBoxChange} />
            <FormCheckBox text="Troubles de la repolarisation" value={false} onPress={handleCheckBoxChange} />
            <FormCheckBox text="Troubles du rythme"  value={false} onPress={handleCheckBoxChange} />
            <FormCheckBox text="Bloc auriculo vantriculaire" value={false} onPress={handleCheckBoxChange} />

          </View>
          <View style={tailwind("items-center")}>
            <FormInput4 placeholder="Espace Qt" type="decimal-pad" min="0" max="100" onChangeText={setEspaceQT} />

          </View>

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
    datePicker1: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: 320,
      height: 260,
      display: 'flex',
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

const mapStateToProps = (state) => ({
  patientList: state.medicalService.patientList,
});
const mapActionToProps = {
  login: actions.login,
  logout: actions.logout,
  addExamRadioParaCli: actions.addExamRadioParaCli
};
export default connect(mapStateToProps, mapActionToProps)(ExamenRadioParaCli1);
