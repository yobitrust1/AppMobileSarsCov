import { 
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
import RadioGroup from 'react-native-radio-buttons-group';
//import 'localstorage-polyfill';
import { ScrollView } from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';


const AVC1 = (props) => {
  const { colors } = useTheme();
  const [anciennete, setAnciennete] = useState(0.0);
  const [traitement, setTraitement] = useState(0);
  const [episode_1, setEpisode_1] = useState(true)
  const [episode_x, setEpisode_x] = useState(false)
  const [handicap, setHandicap] = useState("mineur")

  var handleHandicapChange = (data) => {
    if (data[0].selected)
      setHandicap("mineur")
    else if (data[1].selected)
      setHandicap("moyen")
    else if (data[2].selected)
      setHandicap("majeur")
  }

  var handleAnciennteChange = (text) => {
    setAnciennete(text)
  }
  var handleTraitementChange = (text) => {
    setTraitement(text)
  }
  var handleAvcChange = (data) => {
    if (data[0].selected) {
      setEpisode_1(true);
      setEpisode_x(false);
    }
    else if (data[1].selected) {
      setEpisode_1(false);
      setEpisode_x(true)
    }
  }
  var handleSubmit = (e) => {
    var values = {
      antecedent: "AVC",
      anciennete: anciennete,
      traitement: traitement,
      episode_1: episode_1,
      getEpisode_x: episode_x,
      handicap: handicap
    }
    e.preventDefault();
    console.log(values)
    props.antecedentsMedicaux(props.patientList["cin"], values)
    props.navigation.navigate("AddAntecendentsMedicaux1")
  }




  return (
<ScrollView  >
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>AVC</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >


      <View style={tailwind(' items-center ')} >

        <View style={styles.row}>
          <Text style={tailwind('text-gray-700 py-2')}>
            AVC?
    </Text>
          <RadioGroup radioButtons={[
            {
              label: 'Un seul episode',
              color: '#51d1c5',

            },
            {
              label: 'Plusieurs episodes',
              color: '#51d1c5',
            },
          ]}
            //flexDirection='row'
            style={tailwind('')}
            onPress={handleAvcChange}
          />

        </View>

        <FormInput title="Ancienneté" placeholder="Ancienneté" onChangeText={handleAnciennteChange} type="decimal-pad" />
        <FormInput title="Traitement" placeholder="Traitement" onChangeText={handleTraitementChange} />

        <View style={styles.row}>
          <Text style={tailwind('text-gray-700 py-2')}>
            Handicap?
    </Text>
          <RadioGroup radioButtons={[
            {
              label: 'Mineur',
              color: '#51d1c5',

            },
            {
              label: 'Moyen',
              color: '#51d1c5',
            },
            {
              label: 'Majeur',
              color: '#51d1c5',
            }
          ]}
            //flexDirection='row'
            style={tailwind('')}
            onPress={handleHandicapChange}
          />

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
const mapStateToProps = (state) => ({
  patientList: state.medicalService.patientList
});
const mapActionToProps = {

  antecedentsMedicaux: actions.antecedentsMedicaux
};

export default connect(mapStateToProps, mapActionToProps)(AVC1);
