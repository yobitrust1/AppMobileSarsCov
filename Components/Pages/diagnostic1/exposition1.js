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
import * as actions from "../../../Actions/medicalService";
import 'localstorage-polyfill';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import RadioGroup from 'react-native-radio-buttons-group';
import FormInput from '../../Form/FormInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import FormButton from '../../Form/FormButton';
import { medicalService } from '../../../Reducers/medicalService';
import {LinearGradient} from 'expo-linear-gradient';
import FormInput4 from '../../Form/FormInput4';
import { connect } from "react-redux";

const Exposition1 = (props) => {
  const { colors } = useTheme();


  //component test variable
  const [sejour, setSejour] = useState(false)
  const [arivee, setArivee] = useState(false)
  const [parcours, setParcours] = useState(false)
  const [etroit, setEtoit] = useState(false)
  const [autres, setAutres] = useState(false)
  const [quarantine, setQurarantine] = useState(false)
  //checkbox variable
  const [contactC, setContactC] = useState("Oui")
  const [autreBox, setAutreBox] = useState("Oui")
  const [miseQuarantine, setMiseQuarantine] = useState("Oui")
  const [datePicker, setDatePicker] = useState(false);
  const [datePicker1, setDatePicker1] = useState(false);
  const [datePicker2, setDatePicker2] = useState(false);
  const [datePicker3, setDatePicker3] = useState(false);
  const [datePicker4, setDatePicker4] = useState(false);
  const [datePicker5, setDatePicker5] = useState(false);
  const [datePicker6, setDatePicker6] = useState(false);
  const [datePicker7, setDatePicker7] = useState(false);
  const [datePicker8, setDatePicker8] = useState(false);

  //values
  //Sejour /Transit component
  const [habite, setHabite] = useState(true)
  const [dateD, setDateD] = useState(new Date())
  const [dateF, setDateF] = useState(new Date())
  const [villes, setVilles] = useState()
  //arivee en tunisie
  const [dateEnt, setDateEnt] = useState(new Date())
  const [lieuEnt, setLieuEnt] = useState()
  const [moyensTran, setMoyensTran] = useState()
  //parcours en Tunise
  const [villesPar, setVillesPar] = useState()
  const [dateV1, setDateV1] = useState(new Date())
  const [moyenTranV1, setMoyenTranV1] = useState()
  const [dateV2, setDateV2] = useState(new Date())
  const [moyenTranV2, setMoyenTranV2] = useState()
  const [moyenTranQu, setMoyenTranQu] = useState()
  //contact etroit
  const [idTun, setIdTun] = useState(0)
  const [dateDebutC, setDateDebutC] = useState(new Date())
  const [dateFinC, setDateFinC] = useState(new Date())
  //Autres criteres ayant conduit

  const [details, setDetails] = useState()
  //mise en quarantine
  const [dateDQu, setDateDQu] = useState(new Date())
  const [dateFDQu, setDateFQu] = useState(new Date())
  const [respect, setRespect] = useState(true)
  function showDatePicker() {
    setDatePicker(true);
  };
  function onDateSelected(event, value) {
    setDateD(value);
    setDatePicker(false);
  };
  function onDateSelected1(event, value) {
    setDateF(value);
    setDatePicker1(false);
  };
  function showDatePicker1() {
    setDatePicker1(true);
  };
  function onDateSelected2(event, value) {
    setDateEnt(value);
    setDatePicker2(false);
  };
  function showDatePicker2() {
    setDatePicker2(true);
  };
  function onDateSelected3(event, value) {
    setDateV1(value);
    setDatePicker3(false);
  };
  function showDatePicker3() {
    setDatePicker3(true);
  };
  function onDateSelected4(event, value) {
    setDateV2(value);
    setDatePicker4(false);
  };
  function showDatePicker4() {
    setDatePicker4(true);
  };
  function onDateSelected5(event, value) {
    setDateDebutC(value);
    setDatePicker5(false);
  };
  function showDatePicker5() {
    setDatePicker5(true);
  };
  function showDatePicker6() {
    setDatePicker6(true);
  };
  function onDateSelected6(event, value) {
    setDateFinC(value);
    setDatePicker6(false);
  };
  function showDatePicker7() {
    setDatePicker7(true);
  };
  function onDateSelected7(event, value) {
    setDateDQu(value);
    setDatePicker7(false);
  };
  function showDatePicker8() {
    setDatePicker8(true);
  };
  function onDateSelected8(event, value) {
    setDateFQu(value);
    setDatePicker8(false);
  };

  //values handleChange functions
  //sejour/transit values
  var habiteHandleChange = (data) => {
    if (data[0].selected)
      setHabite(true)
    if (data[1].selected)
      setHabite(false)
  }
  var handleVillesChange = (text) => {
    setVilles(text)
  }
  //arrivee values
  var handleLieuEnt = (text) => {
    setLieuEnt(text)
  }
  var handletMoyensTran = (text) => {
    setMoyensTran(text)
  }
  //parcours en Tunisie
  var handleVillesPar = (text) => {
    setVillesPar(text)
  }
  var handleMoyenTranV1 = (text) => {
    setMoyenTranV1(text)
  }
  var handleMoyenTranV2 = (text) => {
    setMoyenTranV2(text)
  }
  var handleMoyenTranQu = (text) => {
    setMoyenTranQu(text)
  }
  //contact etroit
  var handleIdTun = (text) => {
    setIdTun(text)
  }
  //AUtres criteres

  var handleDetailsChange = (text) => {
    setDetails(text)
  }
  //Mise en quarantine
  var handleRespectChange = (data) => {
    if (data[0].selected)
      setRespect(true)
    else setRespect(false)
  }

  var handleSejourChange = () => {
    setSejour(!sejour)
  }
  var handleAriveeChange = () => {
    setArivee(!arivee)
  }
  var handleParousChange = () => {
    setParcours(!parcours)
  }
  var handleEtroitChange = () => {
    setEtoit(!etroit)
  }
  var handleAutresChange = () => {
    setAutres(!autres)
  }
  var handleQuarantineChange = () => {
    setQurarantine(!quarantine)
  }
  var handleContactCChange = (data) => {
    if (data[0].selected)
      setContactC("Oui")

    if (data[1].selected)
      setContactC("Non")
    if (data[2].selected)
      setContactC("Ne sait pas")
  }
  var handleAutreBoxChange = (data) => {
    if (data[0].selected)
      setAutreBox("Oui")
    if (data[1].selected)
      setAutreBox("Non")
    if (data[2].selected)
      setAutreBox("NSP")
  }
  var handleMiseQuarantineChange = (data) => {
    if (data[0].selected)
      setMiseQuarantine("Oui")
    else setMiseQuarantine("Non")
  }

  //submit function
  var handleSubmit = (e) => {
    e.preventDefault()
    var values = {
      //Sejour /transit
      habite: habite,
      dateD: dateD,
      dateF: dateF,
      villes: villes,
      // Arivee
      dateEnt: dateEnt,
      lieuEnt: lieuEnt,
      moyensTran: moyensTran,
      // parcours en tunisie
      villesPar: villesPar,
      dateV1: dateV1,
      dateV2: dateV2,
      moyenTranV1: moyenTranV1,
      moyenTranV2: moyenTranV2,
      moyenTranQu: moyenTranQu,

      //contact etroit
      contact: contactC,
      idTun: idTun,
      dateDebutC: dateDebutC,
      dateFinC: dateFinC,

      //autre critere
      autre: autreBox,
      details: details,

      //mise en quarantine
      dateDQu: dateDQu,
      dateFDQu: dateFDQu,
      respect: respect


    }
    console.log(values)

    props.addExposition(props.patientList["cin"], values)
    props.navigation.navigate("AddAntecendentsMedicaux1")
  }
  return (
<ScrollView  >
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Expositions à Risque</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >

      <View style={tailwind(' items-center ')} >


        <View style={tailwind('py-8 px-8')}>
          <TouchableOpacity onPress={handleSejourChange}>
            <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>Séjour ou transit dans une zone a risque</Text>
          </TouchableOpacity>
          {sejour == true && <View style={tailwind('items-center ')}>
            <Text style={tailwind('text-gray-700 py-2')}>
              Réside habituellement dans la zone a risque  ?
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
              onPress={habiteHandleChange}
            />
            <Text>Séjour ou transit dans zone risque ?</Text>
            <View style={styles.row}>

<Text style={tailwind('text-gray-700 py-2')}>
Du ? </Text>
{datePicker && (
  <DateTimePicker
    value={dateD}
    mode={'date'}
    minimumDate={new Date(1950, 0, 1)}
    maximumDate={new Date()}
    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
    is24Hour={true}
    onChange={onDateSelected}
  />
)}
{!datePicker && (
  <View >
    <Button title={(dateD !== undefined && dateD.toDateString()) || "Show Date Picker"} color="green" onPress={showDatePicker} />
  </View>
  
)}
</View>

           

<View style={styles.row}>

<Text style={tailwind('text-gray-700 py-2')}>
  Au ? </Text>
{datePicker1 && (
  <DateTimePicker
    value={dateF}
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
    <Button title={(dateF !== undefined && dateF.toDateString()) || "Show Date Picker"} color="green" onPress={showDatePicker1} />
  </View>
  
)}
</View>
            <FormInput
              placeholder="Villes Visitées"
              onChangeText={handleVillesChange}
            />
          </View>
          }

          <TouchableOpacity onPress={handleAriveeChange}>
            <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>Arivée sur le territoire tunisien </Text>
          </TouchableOpacity>
          {arivee == true && <View style={tailwind("items-center")}>
          <View style={styles.row}>

<Text style={tailwind('text-gray-700 py-2')}>
Date d'arrivée en Tunisie? </Text>
{datePicker2 && (
  <DateTimePicker
    value={dateEnt}
    mode={'date'}
    minimumDate={new Date(1950, 0, 1)}
    maximumDate={new Date()}
    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
    is24Hour={true}
    onChange={onDateSelected2}
    style={styles.datePicker}
  />
)}
{!datePicker2 && (
  <View >
    <Button title={(dateEnt !== undefined && dateEnt.toDateString()) || "Show Date Picker"} color="green" onPress={showDatePicker2} />
  </View>
  
)}
</View>

            <FormInput placeholder="Lieu d'entrée" onChangeText={handleLieuEnt} />
            <FormInput placeholder="Moyen de transport" onChangeText={handletMoyensTran} />
          </View>}
          <TouchableOpacity onPress={handleParousChange}>
            <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>Parcours en Tunisie</Text>
          </TouchableOpacity>
          {(parcours == true) && <View style={tailwind("items-center")}>
            <FormInput placeholder="Villes visités en Tunisie" onChangeText={handleVillesPar} />
            <View style={styles.row}>

        <Text style={tailwind('text-gray-700 py-2')}>
       Date d'arrivée ville 1 </Text>
      {datePicker3 && (
          <DateTimePicker
            value={dateV1}
            mode={'date'}
            minimumDate={new Date(1950, 0, 1)}
            maximumDate={new Date()}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateSelected3}
            style={styles.datePicker}
          />
        )}
        {!datePicker3 && (
          <View >
            <Button title={(dateV1 !== undefined && dateV1.toDateString()) || "Show Date Picker"} color="green" onPress={showDatePicker3} />
          </View>
          
        )}
      </View>
            <FormInput placeholder="Moyens de transport" onChangeText={handleMoyenTranV1} />

            <View style={styles.row}>

        <Text style={tailwind('text-gray-700 py-2')}>
       Date d'arrivée ville 2 </Text>
      {datePicker4 && (
          <DateTimePicker
            value={dateV2}
            mode={'date'}
            minimumDate={new Date(1950, 0, 1)}
            maximumDate={new Date()}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateSelected4}
            style={styles.datePicker}
          />
        )}
        {!datePicker4 && (
          <View >
            <Button title={(dateV2 !== undefined && dateV2.toDateString()) || "Show Date Picker"} color="green" onPress={showDatePicker4} />
          </View>
          
        )}
      </View>
            <FormInput placeholder="Moyens de transport" onChangeText={handleMoyenTranV2} />
            <FormInput placeholder="Moyen de transport quotidien" onChangeText={handleMoyenTranQu} />

          </View>}
          <TouchableOpacity onPress={handleEtroitChange}>
            <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>Contact étroit</Text>
          </TouchableOpacity>
          {
            (etroit == true) && (<View style={tailwind("items-center")}>
              <Text style={tailwind('text-gray-700 py-2')}>
                Contact avec un cas confirmé ou suspect ?
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
                  label: "Ne sait pas",
                  color: '#51d1c5',
                }
              ]}
                flexDirection='row'
                style={tailwind('')}
                onPress={handleContactCChange}
              />


            </View>
            )}
          {(contactC === "Oui" && etroit == true) && (<View style={tailwind("items-center")}>

            <View style={styles.row}>

              <Text style={tailwind('text-gray-700 py-2')}>
             Du ? </Text>
            {datePicker5 && (
                <DateTimePicker
                  value={dateDebutC}
                  mode={'date'}
                  minimumDate={new Date(1950, 0, 1)}
                  maximumDate={new Date()}
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  is24Hour={true}
                  onChange={onDateSelected5}
                  style={styles.datePicker}
                />
              )}
              {!datePicker5 && (
                <View >
                  <Button title={(dateDebutC !== undefined && dateDebutC.toDateString()) || "Show Date Picker"} color="green" onPress={showDatePicker5} />
                </View>
                
              )}
            </View>

            <View style={styles.row}>

        <Text style={tailwind('text-gray-700 py-2')}>
       Au ? </Text>
      {datePicker6 && (
          <DateTimePicker
            value={dateFinC}
            mode={'date'}
            minimumDate={new Date(1950, 0, 1)}
            maximumDate={new Date()}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateSelected6}
            style={styles.datePicker}
          />
        )}
        {!datePicker6 && (
          <View >
            <Button title={(dateFinC !== undefined && dateFinC.toDateString()) || "Show Date Picker"} color="green" onPress={showDatePicker6} />
          </View>
          
        )}
      </View>
            <FormInput4 placeholder="Identifiant en Tunisie" type="number-pad" min="0" max="100" onChangeText={handleIdTun} />
          </View>)}

          <TouchableOpacity onPress={handleAutresChange}>
            <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>Autres critères ayant conduit au classement en cas possible</Text>
          </TouchableOpacity>
          {(autres == true) && <View style={tailwind("items-center")}>

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
                label: 'NSP',
                color: '#51d1c5',
              },
            ]}
              flexDirection='row'
              style={tailwind('')}
              onPress={handleAutreBoxChange}
            />
            {autreBox === "Oui" && <FormInput placeholder="Précisier" onChangeText={handleDetailsChange} />}


          </View>}
          <TouchableOpacity onPress={handleQuarantineChange}>
            <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>Mise en quarantine</Text>
          </TouchableOpacity>
          {(quarantine == true) && <View style={tailwind("items-center")}>

            <Text style={tailwind('text-gray-700 py-2')}>
              Mise en quarantine ?
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
              onPress={handleMiseQuarantineChange}
            />

          </View>}
          {(quarantine == true && miseQuarantine === "Oui") && <View style={tailwind('items-center')}>
          <View style={styles.row}>

<Text style={tailwind('text-gray-700 py-2')}>
Du ? </Text>
{datePicker7 && (
  <DateTimePicker
    value={dateDQu}
    mode={'date'}
    minimumDate={new Date(1950, 0, 1)}
    maximumDate={new Date()}
    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
    is24Hour={true}
    onChange={onDateSelected7}
    style={styles.datePicker}
  />
)}
{!datePicker7 && (
  <View >
    <Button title={(dateDQu !== undefined && dateDQu.toDateString()) || "Show Date Picker"} color="green" onPress={showDatePicker7} />
  </View>
  
)}
</View>

<View style={styles.row}>

<Text style={tailwind('text-gray-700 py-2')}>
Au ? </Text>
{datePicker8 && (
  <DateTimePicker
    value={dateFDQu}
    mode={'date'}
    minimumDate={new Date(1950, 0, 1)}
    maximumDate={new Date()}
    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
    is24Hour={true}
    onChange={onDateSelected8}
    style={styles.datePicker}
  />
)}
{!datePicker8 && (
  <View >
    <Button title={(dateFDQu !== undefined && dateFDQu.toDateString()) || "Show Date Picker"} color="green" onPress={showDatePicker8} />
  </View>
  
)}
</View>

            <Text style={tailwind('text-gray-700 py-2')}>
              Respect de la quarantine ?
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
              onPress={handleRespectChange}
            />

          </View>}
        </View>
      </View>
      <View style={tailwind("items-center")}>
        <View style={styles.row}>
          <FormButton title="Retour" onPress={() => { props.navigation.navigate("AddPatient") }} />
          <FormButton title="Suivant" onPress={handleSubmit} />
        </View>
        <FormButton title="Pass" onPress={() => { props.navigation.navigate("AddAntecendentsMedicaux1") }} />

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
    datePicker: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: 320,
      height: 260,
      display: 'flex',
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
  //loggedUser: state.medicalService.loggedUser,
  patientList: state.medicalService.patientList
});
const mapActionToProps = {
  //login: actions.login,
  addExposition: actions.addExposition
};
export default connect(mapStateToProps, mapActionToProps)(Exposition1);
