import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import 'localstorage-polyfill';
import FormInput from "../Form/FormInput";
import RadioGroup from 'react-native-radio-buttons-group';
import DateTimePicker from '@react-native-community/datetimepicker';
import FormButton from '../Form/FormButton';
import {LinearGradient} from 'expo-linear-gradient';


const InfosGenerales = (props) => {
  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [date, setDate] = useState(new Date());
  const [datePicker, setDatePicker] = useState(false);
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
  var handleNomChange = (text) => {
    setNom(text)
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



  return (



<LinearGradient colors={['#d7dbdd', '#abebc6','#d7dbdd']} style={styles.body}>
    <ScrollView   >
      <Text style={tailwind('text-gray-700 font-bold py-2 text-xl text-center')}>Informations génerales:{props.patientList["generalInformation"]["nom"] + " " + props.patientList["generalInformation"]["prenom"]}</Text>
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
              color: '#51d1c5',

            },
            {
              label: 'Female',
              color: '#51d1c5',
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
              color: '#51d1c5',

            },
            {
              label: 'Primaire',
              color: '#51d1c5',
            },
            {
              label: 'Collège',
              color: '#51d1c5',
            },
            {
              label: 'Secondaire',
              color: '#51d1c5',
            },
            {
              label: 'Universiatire',
              color: '#51d1c5',
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
              color: '#51d1c5',

            },
            {
              label: 'Non',
              color: '#51d1c5',
            },
            {
              label: 'Autre',
              color: '#51d1c5',
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
              color: '#51d1c5',

            },
            {
              label: 'Non',
              color: '#51d1c5',
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
          <FormButton title="Enregister" onPress={handleSubmit} />
          <FormButton title="Annuler" onPress={() => { props.navigation.navigate("PatientDetails") }} />
        </View>
      </View>

    </ScrollView>
</LinearGradient>
  );
};
const styles = StyleSheet.create({
  datePicker1: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  },
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
});

const mapStateToProps = (state) => ({
  patientList: state.medicalService.patientList

});
const mapActionToProps = {
  infosGenerales: actions.infosGenerales
};

export default connect(mapStateToProps, mapActionToProps)(InfosGenerales);
