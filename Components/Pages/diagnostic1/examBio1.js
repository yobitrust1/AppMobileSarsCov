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
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import RadioGroup from 'react-native-radio-buttons-group';
import DateTimePicker from '@react-native-community/datetimepicker';
//import 'localstorage-polyfill';
import FormInput from '../../Form/FormInput';
import apiMedicalService from "../../../Actions/apiMedicalService";
import {LinearGradient} from 'expo-linear-gradient';
import FormInput4 from '../../Form/FormInput4';


const ExamBio1 = (props) => {
  const { colors } = useTheme();
  const [type, setType] = useState("NFS")
  const [datePr, setDatePr] = useState(new Date());
  const [datePicker, setDatePicker] = useState(false);
  //NFS
  const [gb, setGb] = useState()
  const [lym, setLym] = useState()
  const [pla, setPla] = useState()
  const [hb, setHb] = useState()
  const [ht, setHt] = useState()
  //BIlan renal
  const [creat, setCreat] = useState()
  const [clairCreat, setClairCreat] = useState()
  const [uree, setUree] = useState()

  //Bilan hepatique
  const [biliru, setBiliru] = useState()
  const [biliru1, setBiliru1] = useState()
  const [alat, setAlat] = useState()
  const [asat, setAsat] = useState()
  const [tp, setTp] = useState()
  const [facteurV, setFacteurV] = useState()
  const [fibrinogene, setFibrinogene] = useState()
  const [cpk_mb, setCpk_mb] = useState()
  const [troponine, setTroponine] = useState()
  const [pro_bnp, setPro_bnp] = useState()
  const [albumi, setAlbumi] = useState()
  const [d_dimère, setD_dimère] = useState()
  const [ldh, setLdh] = useState()
  const [crp, setCrp] = useState()
  const [procal, setProcal] = useState()
  const [ferri, setFerri] = useState()
  //GDSA
  const [ph, setPh] = useState()
  const [pao2, setPao2] = useState()
  const [paco2, setPaco2] = useState()
  const [hco3_, setHco3_] = useState()
  const [sao2, setSao2] = useState()

  //ionogramme
  const [nak, setNak] = useState()
  const [nak1, setNak1] = useState()
  const [nakUr, setNakUr] = useState()
  const [nakUr1, setNakUr1] = useState()
  //Autre
  const [fileName, setFileName] = useState()
  const [file, setFile] = useState()
  // controle de saisie
  const [test, setTest] = useState()

  var handleFileUpload = async () => {
    try {
      const res = await DocumentPicker.pick({

      });

      setFileName(res.name)
      setFile(res)

    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }

  }
  function showDatePicker() {
    setDatePicker(true);
  };
  function onDateSelected(event, value) {
    setDatePr(value);
    setDatePicker(false);
  };
  var handleSubmit = () => {
    var values = {
      datePr: datePr,
      type: type,
      gb: gb,
      lym: lym,
      pla: pla,
      hb: hb,
      ht: ht,
      creat: creat,
      clairCreat: clairCreat,
      uree: uree,
      ph: ph,
      paco2: paco2,
      pao2: pao2,
      hco3_: hco3_,
      sao2: sao2,
      nak: nak,
      nak1: nak1,
      nakUr: nakUr,
      nakUr1: nakUr1,
      biliru: biliru,
      biliru1: biliru1,
      alat: alat,
      asat: asat,
      tp: tp,
      facteurV: facteurV,
      fibrinogene: fibrinogene,
      cpk_mb: cpk_mb,
      troponine: troponine,
      pro_bnp: pro_bnp,
      albumi: albumi,
      d_dimère: d_dimère,
      ldh: ldh,
      crp: crp,
      procal: procal,
      ferri: ferri


    }
    //console.log(values)
    props.addExamBio(props.patientList["cin"], values)
    props.navigation.navigate("ExamBio1")

  }

  var handleSUbmitAutre = () => {
    if (file === undefined) { setTest("Veuillez selectionner un fichier"); return }
    const uri = Platform.OS === "android" ? file.uri : file.uri.replace("content://", "")
    const name = file.name
    const type = file.type
    const uploadFile = {
      uri,
      name,
      type

    }
    console.log(uploadFile)
    const formData = new FormData();
    formData.append("file", uploadFile);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    apiMedicalService.medicalService().uploadFileExamBio(props.patientList["cin"], formData).then((res) => { props.navigation.navigate("ExamBio1") }).catch(err => console.log(err))

  }

  var handleTypeChange = (data) => {
    if (data[0].selected)
      setType("NFS")
    if (data[1].selected)
      setType("BilanRenal")
    if (data[2].selected)
      setType("BilanHepa")
    if (data[3].selected)
      setType("GDSA")
    if (data[4].selected)
      setType("Ionogra")
    if (data[5].selected)
      setType("Autre")
    setDatePr(new Date())

  }

  return (

<ScrollView  >
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Examens Biologiques</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >

      <View style={tailwind("items-center")}>
        <RadioGroup radioButtons={[

          {
            label: "NFS",
            color: '#51d1c5',
          },
          {
            label: "Bilan renal",
            color: '#51d1c5',
          },
          {
            label: "Bilan hepatique",
            color: '#51d1c5',
          },
          {
            label: "GDSA",
            color: '#51d1c5',
          },
          {
            label: "Ionogramme",
            color: '#51d1c5',
          },
          

        ]}
          //flexDirection='row'
          style={tailwind('')}
          onPress={handleTypeChange}
        />
      </View>

      <Text style={tailwind("text-center text-red-500 py-4")}>{test !== undefined && test}</Text>


      {
        type === "NFS" && <View style={tailwind("items-center py-12")}>
         <View style={styles.row}>

<Text style={tailwind('text-gray-700 py-2')}>
  Date de prise de l'examen </Text>
{datePicker && (
  <DateTimePicker
    value={datePr}
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
    <Button title={(datePr !== undefined && datePr.toDateString()) || "Show Date Picker"} color="green" onPress={showDatePicker} />
  </View>
  
)}
</View>

          <FormInput4 placeholder="GB" onChangeText={setGb} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="Lymphocyte" onChangeText={setLym} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="Plaquette" onChangeText={setPla} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="Hb" onChangeText={setHb} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="Ht" onChangeText={setHt} type="decimal-pad" min="0" max="100" />
          <FormButton title="Enregitrer" onPress={handleSubmit} type="decimal-pad" min="0" max="100" />

        </View>
      }
      {
        type === "BilanRenal" && <View style={tailwind("items-center py-12")}>
          <View style={styles.row}>

<Text style={tailwind('text-gray-700 py-2')}>
  Date de prise de l'examen </Text>
{datePicker && (
  <DateTimePicker
    value={datePr}
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
    <Button title={(datePr !== undefined && datePr.toDateString()) || "Show Date Picker"} color="green" onPress={showDatePicker} />
  </View>
  
)}
</View>

          <FormInput4 placeholder="Creat" onChangeText={setCreat} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="Clairance de la creat" onChangeText={setClairCreat} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="Urée" onChangeText={setUree} type="decimal-pad" min="0" max="100" />
          <FormButton title="Enregitrer" onPress={handleSubmit} />
        </View>
      }
      {
        type === "GDSA" && <View style={tailwind("items-center py-12")}>
          <View style={styles.row}>

<Text style={tailwind('text-gray-700 py-2')}>
  Date de prise de l'examen </Text>
{datePicker && (
  <DateTimePicker
    value={datePr}
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
    <Button title={(datePr !== undefined && datePr.toDateString()) || "Show Date Picker"} color="green" onPress={showDatePicker} />
  </View>
  
)}
</View>

          <FormInput4 placeholder="pH" onChangeText={setPh} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="PaO2" onChangeText={setPao2} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="PaCO2" onChangeText={setPaco2} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="HCO3-" onChangeText={setHco3_} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="SaO2" onChangeText={setSao2} type="decimal-pad" min="0" max="100" />
          <FormButton title="Enregitrer" onPress={handleSubmit} />

        </View>
      }
      {
        type === "BilanHepa" && <View style={tailwind("items-center py-12")}>
         <View style={styles.row}>

<Text style={tailwind('text-gray-700 py-2')}>
  Date de prise de l'examen </Text>
{datePicker && (
  <DateTimePicker
    value={datePr}
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
    <Button title={(datePr !== undefined && datePr.toDateString()) || "Show Date Picker"} color="green" onPress={showDatePicker} />
  </View>
  
)}
</View>

          <FormInput4 placeholder="Bilirubine (T)" onChangeText={setBiliru} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="Bilirubine (D)" onChangeText={setBiliru1} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="ALAT" onChangeText={setAlat} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="ASAT" onChangeText={setAsat} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="TP" onChangeText={setTp} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="Facteur V" onChangeText={setFacteurV} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="Fibrinogene" onChangeText={setFibrinogene} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="CPK-MB" onChangeText={setCpk_mb} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="Troponine" onChangeText={setTroponine} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="Pro BNP" onChangeText={setPro_bnp} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="ALbuminémie" onChangeText={setAlbumi} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="D-Dimère" onChangeText={setD_dimère} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="LDH" onChangeText={setLdh} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="CRP" onChangeText={setCrp} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="Procalcitonine" onChangeText={setProcal} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="FErritinemie" onChangeText={setFerri} type="decimal-pad" min="0" max="100" />
          <FormButton title="Enregitrer" onPress={handleSubmit} />


        </View>
      }
      {
        type === "Ionogra" && <View style={tailwind("items-center py-12")}>
          <View style={styles.row}>

<Text style={tailwind('text-gray-700 py-2')}>
  Date de prise de l'examen </Text>
{datePicker && (
  <DateTimePicker
    value={datePr}
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
    <Button title={(datePr !== undefined && datePr.toDateString()) || "Show Date Picker"} color="green" onPress={showDatePicker} />
  </View>
  
)}
</View>

          <FormInput4 placeholder="Na+" onChangeText={setNak} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="K+" onChangeText={setNak1} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="Na+ urinaire" onChangeText={setNakUr} type="decimal-pad" min="0" max="100" />
          <FormInput4 placeholder="K+ urinaire" onChangeText={setNakUr1} type="decimal-pad" min="0" max="100" />
          <FormButton title="Enregitrer" onPress={handleSubmit} />

        </View>
      }
      {
        type === "Autre" && <View style={tailwind("items-center py-12")}>
          <View style={styles.row}>

<Text style={tailwind('text-gray-700 py-2')}>
  Date de prise de l'examen </Text>
{datePicker && (
  <DateTimePicker
    value={datePr}
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
    <Button title={(datePr !== undefined && datePr.toDateString()) || "Show Date Picker"} color="green" onPress={showDatePicker} />
  </View>
  
)}
</View>

          <FormButton title={fileName !== undefined && fileName.substr(0, 12) || "UPload file"} onPress={handleFileUpload} />
          <FormButton title="Suivant" onPress={handleSUbmitAutre} />
        </View>
      }
      <View style={tailwind("items-center py-12")}>
        <FormButton title="Retour" onPress={() => props.navigation.navigate("ExamenRadioParaCli1")} />
        <FormButton title="Pass" onPress={() => props.navigation.navigate("Traitement1")} />


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
    datePicker1: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: 320,
      height: 260,
      display: 'flex',
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

const mapStateToProps = (state) => ({
  patientList: state.medicalService.patientList,
});
const mapActionToProps = {
  login: actions.login,
  logout: actions.logout,
  addExamBio: actions.addExamBio
};
export default connect(mapStateToProps, mapActionToProps)(ExamBio1);
