import { 
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
import RadioGroup from 'react-native-radio-buttons-group';
import { connect } from "react-redux";
import 'localstorage-polyfill';
import FormInput from '../../Form/FormInput';
import FormInput4 from '../../Form/FormInput4';
import {LinearGradient} from 'expo-linear-gradient';


const HabitudesDeVie1 = (props) => {
    const { colors } = useTheme();

    useEffect(() => {
    })
    const [tabagisme, setTabagisme] = useState(false)
    const [nbCigarettes, setNbCigarettes] = useState(0)
    const [freqChicha, setFreqChicha] = useState(0)
    const [drogue, setDrogue] = useState(false)
    const [alcool, setAlcool] = useState(false)
    const [gs, setGs] = useState(0)
    const [poids, setPoids] = useState(0)
    const [taille, setTaille] = useState(0)


    var handleAlcoolChange = (data) => {
        if (data[0].selected)
            setAlcool(false)
        if (data[1].selected)
            setAlcool(true)
    }
    var handleDrogueChange = (data) => {
        if (data[0].selected)
            setDrogue(false)
        if (data[1].selected)
            setDrogue(true)
    }
    var handleTabagismeChange = (data) => {
        if (data[0].selected)
            setTabagisme(false)
        if (data[1].selected)
            setTabagisme(true)
    }
    var handleNbCigarettesChange = (data) => {
        setNbCigarettes(data)
    }
    var handleFreqChichaChange = (data) => {
        setFreqChicha(data)
    }
    var handleGsChange = (data) => {
        setGs(data)
    }
    var handlePoidsChange = (data) => {
        setPoids(data)
    }
    var handleTailleChange = (data) => {
        setTaille(data)
    }
    var handleSubmit = (e) => {
        var values = {
            poids: poids,
            taille: taille,
            gs: gs,
            alcool: alcool,
            drogue: drogue,
            nbCigarettes: nbCigarettes,
            freqChicha: freqChicha
        }
        console.log(values)
        e.preventDefault();
        props.habitudesDeViePatient(props.patientList["cin"], values)
        props.navigation.navigate("ConfirmationDiag1")
    }

    return (
<ScrollView  >
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Habitudes de vie:</Text>
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
                        Tabagisme ?
                   </Text>
                    <RadioGroup radioButtons={[
                        {
                            label: 'Non',
                            color: '#51d1c5',

                        },
                        {
                            label: 'Oui',
                            color: '#51d1c5',
                        },
                    ]}
                        flexDirection='row'
                        style={tailwind('')}
                        onPress={handleTabagismeChange}
                    />


                </View>

                <View>
                    {tabagisme == true && (
                        <View style={tailwind("items-center")}>

                            <FormInput4 placeholder="Nombre de cigarettes/jour"
                                type="number-pad" min="0" max="100"
                                onChangeText={handleNbCigarettesChange}
                            />


                            <FormInput4 placeholder="Frequence de Chicha/semaine"
                                type="number-pad" min="0" max="100"
                                onChangeText={handleFreqChichaChange}
                            />
                        </View>

                    )}

                </View>
                <View style={styles.row}>

                    <Text style={tailwind('text-gray-700 py-2')}>
                        Drogues/cannabis ?
                    </Text>
                    <RadioGroup radioButtons={[
                        {
                            label: 'Non',
                            color: '#51d1c5',

                        },
                        {
                            label: 'Oui',
                            color: '#51d1c5',
                        },
                    ]}
                        flexDirection='row'
                        style={tailwind('')}
                        onPress={handleDrogueChange}
                    />


                </View>
                <View style={styles.row}>

                    <Text style={tailwind('text-gray-700 py-2')}>
                        Alcool ?
                    </Text>
                    <RadioGroup radioButtons={[
                        {
                            label: 'Non',
                            color: '#51d1c5',

                        },
                        {
                            label: 'Oui',
                            color: '#51d1c5',
                        },
                    ]}
                        flexDirection='row'
                        style={tailwind('')}
                        onPress={handleAlcoolChange}
                    />


                </View>
                <FormInput placeholder="Poids"
                    onChangeText={handlePoidsChange} />
                <FormInput placeholder="Taille"
                    onChangeText={handleTailleChange} />
                <FormInput placeholder="GS"
                    onChangeText={handleGsChange} />
                <View style={styles.row}>
                    <FormButton title="Annuler" onPress={() => { props.navigation.navigate("HabitudesDeVie1") }} />
                    <FormButton title="Suivant" onPress={handleSubmit} />
                </View>
                <FormButton title="Pass" onPress={() => { props.navigation.navigate("ConfirmationDiag1") }} />
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
    patientList: state.medicalService.patientList
});
const mapActionToProps = {
    habitudesDeViePatient: actions.habitudesDeViePatient

};

export default connect(mapStateToProps, mapActionToProps)(HabitudesDeVie1);
