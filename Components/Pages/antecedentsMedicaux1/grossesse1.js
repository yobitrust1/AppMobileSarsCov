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
import RadioGroup from 'react-native-radio-buttons-group';
import { connect } from "react-redux";
import {LinearGradient} from 'expo-linear-gradient';
//import 'localstorage-polyfill';
import { ScrollView } from 'react-native-gesture-handler';



const Grossesse1 = (props) => {
  const { colors } = useTheme();
  const [simple, setSimple] = useState(true)
  const [gpa, setGPA] = useState(true)
  const [sa, setSa] = useState(true)
  const [path, setPath] = useState(true)
  const [pathologie, setPathologie] = useState(null)


  var handleSimpleChange = (data) => {
    if (data[0].selected)
      setSimple(true)
    else if (data[1].selected)
      setSimple(false)
  }

  var handleGpaChange = (data) => {
    if (data[0].selected)
      setGPA(true)
    else if (data[1].selected)
      setGPA(false)
  }

  var handleSaChange = (data) => {
    if (data[0].selected)
      setSa(true)
    else if (data[1].selected)
      setSa(false)
  }
  var handlePathChange = (data) => {
    if (data[0].selected)
      setPath(true)
    else if (data[1].selected)
      setPath(false)
  }
  var handlePathologieChange = (text) => {
    setPathologie(text)
  }


  var handleSubmit = (e) => {
    var values = {
      antecedent: "grossesse",
      simple: simple,
      gpa: gpa,
      sa: sa,
      pathologie: pathologie
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
            <Text style={styles.text_header}>Grossesse en cours</Text>
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
            Grossesse?
    </Text>
          <RadioGroup radioButtons={[
            {
              label: 'Grossesse simple',
              color: '#51d1c5',

            },
            {
              label: 'Grossesse compliqué',
              color: '#51d1c5',
            },
          ]}
            //flexDirection='row'
            style={tailwind('')}
            onPress={handleSimpleChange}
          />

        </View>



        <View style={styles.row}>
          <Text style={tailwind('text-gray-700 py-2')}>
            G.P.A?
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
            onPress={handleGpaChange}
          />
        </View>

        <View style={styles.row}>
          <Text style={tailwind('text-gray-700 py-2')}>
            SA?
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
            onPress={handleSaChange}
          />



        </View>

        <View style={styles.row}>
          <Text style={tailwind('text-gray-700 py-2')}>
            Pathologies liées à la grossesse?
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
            //flexDirection='row'
            style={tailwind('')}
            onPress={handlePathChange}
          />



        </View>
        <View>
          {(path === true) && <FormInput placeholder="Précisier les pathologies" onChangeText={handlePathologieChange} />}
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

export default connect(mapStateToProps, mapActionToProps)(Grossesse1);
