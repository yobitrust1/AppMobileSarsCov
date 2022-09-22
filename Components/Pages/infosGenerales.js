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
import FormInput from "../Form/FormInput";
import tailwind from 'tailwind-rn';
import RadioGroup from 'react-native-radio-buttons-group';
import DateTimePicker from '@react-native-community/datetimepicker';
import FormButton from '../Form/FormButton';
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import 'localstorage-polyfill';
const SignInScreen = (props) => {
useEffect(() => {
}, [localStorage.getItem("addPatientMessage")])
const [matricule, setMatricule] = useState(0)
const [identifiant, setIdentifiant] = useState("")
const [nom, setNom] = useState("")
const [prenom, setPrenom] = useState("")
const [date, setDate] = useState(new Date());
const [sexe, setSexe] = useState("Male")
const [adresse, setAdresse] = useState("")
const [nationnalite, setNationnalite] = useState("")
const [telDomicile, setTelDomicile] = useState("")
const [telProtable, setTelPortable] = useState("")
const [profession, setProfession] = useState("")
const [marie, setMarie] = useState("")
const [vitSeul, setVitSeul] = useState(false)
const [nbIndiv, setNbIndiv] = useState(0)
const [nbEnf, setNbEnf] = useState(0)
const [nbCham, setNbCham] = useState(0)
const [nivEtude, setNivEtude] = useState("")
const [datePicker, setDatePicker] = useState(false);

const { colors } = useTheme();
var handleNivEtude = (data) => {
  if (data[0].selected)
    setNivEtude(data[0].label)
  if (data[1].selected)
    setNivEtude(data[1].label)
  if (data[2].selected)
    setNivEtude(data[2].label)
  if (data[3].selected)
    setNivEtude(data[3].label)
  if (data[4].selected)
    setNivEtude(data[4].label)
}

var handleNbCham = (text) => {
  setNbCham(text)
}

var handleNbEnf = (text) => {
  setNbEnf(text)
}
var handleNbIndivChange = (text) => {
  setNbIndiv(text)
}

var handleProfessionChange = (text) => {
  setProfession(text)
}
var handleTelPortable = (text) => {
  setTelPortable(text)
}
var handleTelDomicile = (text) => {
  setTelDomicile(text)
}
var handleNationnaliteChange = (text) => {
  setNationnalite(text)
}
var handleCinChange = (text) => {
  setCin(text)
}

var handleMatriculeChange = (text) => {
  setMatricule(text)
}
var handleNomChange = (text) => {
  setNom(text)
}
var handleIdentifiantChange = (text) => {
  setIdentifiant(text)
}
var handlePrenomChange = (text) => {

  setPrenom(text)
}
var handleAddresseChange = (text) => {
  setAdresse(text)
}

var handleSexeChange = (data) => {
  if (data[0].selected) {
    setSexe(data[0].label)
  }
  else setSexe(data[1].label)

}
var handleMarieChange = (data) => {
  if (data[0].selected) {
    setMarie(data[0].label)
  }
  else {
    if (data[1].selected) {
      setMarie(data[1].label)
    }
    else setMarie(data[2].label)
  }
}

var handleVitSeul = (data) => {
  if (data[0].selected) {
    setVitSeul(true)
  }
  else setVitSeul(false)
}

var handleSubmit = (e) => {
  var values = {

    nom: nom,
    prenom: prenom,
    sexe: sexe,
    birthDate: date,
    nationnalite: nationnalite,
    adresse: adresse,
    telPort: telProtable,
    telDomicile: telDomicile,
    profession: profession,
    niveauEtude: nivEtude,
    vitSeul: vitSeul,
    individu: nbIndiv,
    enfant: nbEnf,
    chambres: nbCham,
    mariee: marie

  }
  console.log(values)
  e.preventDefault()
  props.infosGenerales(props.patientList["cin"], values)
  props.navigation.navigate("PatientDetails")

}




var handleExit = (e) => {
  localStorage.setItem("addPatientMessage", JSON.stringify(null))
  props.navigation.navigate("SearchPatient1")
}


  
var test=JSON.parse(localStorage.getItem("loggedUser"));
 

function showDatePicker() {
  setDatePicker(true);
};
function onDateSelected(event, value) {
  setDate(value);
  setDatePicker(false);
};

 

  return (<ScrollView  >
    <View style={styles.container}>
        <StatusBar backgroundColor='#4c1d95' barStyle="light-content"/>
      <View style={styles.header}>
          <Text style={styles.text_header}>ajouter un patients</Text>
      </View>
      <Animatable.View 
          animation="fadeInUpBig"
          style={[styles.footer, {
              backgroundColor: colors.background
          }]}
      >
          
    <View style={tailwind(' items-center ')}>
    
      
      <FormInput
        placeholder="Nom"
        onChangeText={handleNomChange}
      />
      <FormInput
        placeholder="Prenom"
        onChangeText={handlePrenomChange}
      />
      <View style={styles.row}>

        <Text style={tailwind('text-gray-700 py-2')}>
          Sexe ?
  </Text>
        <RadioGroup radioButtons={[
          {
            label: 'Male',
            color: '#9035db',

          },
          {
            label: 'Female',
            color: '#9035db',
          },
        ]}
          flexDirection='row'
          style={tailwind('')}
          onPress={handleSexeChange}
        />

      </View>
      <View style={styles.row}>

        <Text style={tailwind('text-gray-700 py-2')}>
          date de naissance ? </Text>
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
      <FormInput
        placeholder="Adresse"
        onChangeText={handleAddresseChange}
      />
      <FormInput
        placeholder="Nationalité"
        onChangeText={handleNationnaliteChange}
      />
      <FormInput
        placeholder="Telephone Domicile"
        onChangeText={handleTelDomicile}
        type="number-pad"
        maxLength={Number("8")}
      />
      <FormInput
        placeholder="Telephone portable"
        type="number-pad"
        onChangeText={handleTelPortable}
        maxLength={Number("8")}
      />
      <FormInput
        placeholder="Profession"
        onChangeText={handleProfessionChange}
      />


      <View style={styles.row}>

        <Text style={tailwind('text-gray-700 py-2 pb-2')}>
          Niveau d'étude
  </Text>
        <RadioGroup radioButtons={[
          {
            label: 'Non Scolarisé',
            color: '#9035db',

          },
          {
            label: 'Primaire',
            color: '#9035db',
          },
          {
            label: 'Collège',
            color: '#9035db',
          },
          {
            label: 'Secondaire',
            color: '#9035db',
          },
          {
            label: 'Universiatire',
            color: '#9035db',
          },
          

        ]}
          //flexDirection='row'
          style={tailwind('')}
          onPress={handleNivEtude}

        />



      </View>

      <View style={styles.row}>

        <Text style={tailwind('text-gray-700 py-2')}>
          Marié ?
  </Text>
        <RadioGroup radioButtons={[
          {
            label: 'Oui',
            color: '#9035db',

          },
          {
            label: 'Non',
            color: '#9035db',
          },
          {
            label: 'Autre',
            color: '#9035db',
          },
        ]}
          flexDirection='row'
          style={tailwind('')}
          onPress={handleMarieChange}
        />



      </View>

      <View style={styles.row}>

        <Text style={tailwind('text-gray-700 py-2')}>
          Vit seul ?
  </Text>
        <RadioGroup radioButtons={[
          {
            label: 'Oui',
            color: '#9035db',

          },
          {
            label: 'Non',
            color: '#9035db',
          },

        ]}
          flexDirection='row'
          style={tailwind('')}
          onPress={handleVitSeul}
        />



      </View>
      <FormInput
        placeholder="Nbre d'individus par famille"
        type="number-pad"
        onChangeText={handleNbIndivChange}
        maxLength={Number("2")}
      />

      <FormInput
        placeholder="Nbre d'enfants à cahrge"
        type="number-pad"
        onChangeText={handleNbEnf}
        maxLength={Number("2")}
      />

      <FormInput
        placeholder="Nbre de chambres dans la maison"
        type="number-pad"
        onChangeText={handleNbCham}
        maxLength={Number("2")}
      />
      <View style={styles.row}>
        <FormButton title="Retour" onPress={() => { props.navigation.navigate("PatientDetails") }} />
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
  infosGenerales: actions.infosGenerales
};
export default connect(mapStateToProps, mapActionToProps)(SignInScreen);

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
