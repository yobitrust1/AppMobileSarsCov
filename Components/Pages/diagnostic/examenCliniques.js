import { 
    View, 
    Text, 
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
import FormInput2 from "../../Form/FormInput2";
import FormCheckBox from "../../Form/CheckBox";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import 'localstorage-polyfill';
import { ScrollView } from 'react-native-gesture-handler';
import RadioGroup from 'react-native-radio-buttons-group';
import FormInput4 from '../../Form/FormInput4';


const ExamenCliniques1 = (props) => {
    const { colors } = useTheme();
    var handleExamOroChange = (newValue, text) => {
        if (newValue == true) setExamOro(examOro + " " + text)
        else setExamOro(examOro.replace(text + " ", ""))
        if (text === " Autre" && newValue == true) setAutreOro(true)
        if (text === " Autre" && newValue == false) setAutreOro(false)
    }

    var handleExamenOphtaChange = (newValue, text) => {
        if (newValue == true) setExamOphta(examOphta + " " + text)
        else setExamOphta(examOphta.replace(text + " ", ""))
        if (text === "Autre" && newValue == true) setAutreOphta(true)
        if (text === "Autre" && newValue == false) setAutreOphta(false)
    }


    var handleExamPulChange = (newValue, text) => {
        if (newValue == true) setExamPulmo(examPulmo + " " + text)
        else setExamPulmo(examPulmo.replace(text + " ", ""))
        if (text === "Autre" && newValue == true) setAutrePul(true)
        if (text === "Autre" && newValue == false) setAutrePul(false)
    }

    var handleExamCutChange = (newValue, text) => {
        if (newValue == true) setExamCut(examCut + " " + text)
        else setExamCut(examCut.replace(text + " ", ""))
        if (text === "Autre" && newValue == true) setAutreCut(true)
        if (text === "Autre" && newValue == false) setAutreCut(false)
    }

    var handleExamNeuroChange = (newValue, text) => {
        if (newValue == true) setExamNeuro(examNeuro + " " + text)
        else setExamNeuro(examNeuro.replace(text + " ", ""))
        if (text === "Autre" && newValue == true) setAutreNeuro(true)
        if (text === "Autre" && newValue == false) setAutreNeuro(false)
    }
    var handleExamenCarChange = (newValue, text) => {
        if (newValue == true) setExamCardio(examCardio + " " + text)
        else setExamCardio(examCardio.replace(text + " ", ""))
        if (text === "Autre" && newValue == true) setAutreCar(true)
        if (text === "Autre" && newValue == false) setAutreCar(false)
    }


    //component
    const [oro, setOro] = useState(false)
    const [pul, setPul] = useState(false)
    const [oph, setOph] = useState(false)
    const [cut, setCut] = useState(false)
    const [neu, setNeu] = useState(false)
    const [card, setCard] = useState(false)
    const [aut, setAut] = useState(false)
    //values
    const [temperature, setTemperature] = useState()
    const [fr, setFr] = useState()
    const [fc, setFc] = useState()
    const [sao2, setSao2] = useState()
    const [pa_sys, setPa_sys] = useState()
    const [pa_dya, setPa_dya] = useState()

    const [scoreGlas, setScoreGlas] = useState()
    const [poids, setPoids] = useState()
    const [taille, setTaille] = useState()
    const [examOro, setExamOro] = useState("")
    const [examPulmo, setExamPulmo] = useState("Tirage intercostal")
    const [examOphta, setExamOphta] = useState("hyperhèmie conjonctivale unilatérale")
    const [examCut, setExamCut] = useState("Erruption maculo-papuleuse géneralisée")
    const [examNeuro, setExamNeuro] = useState("Désorientation temporo-spatiale")
    const [examCardio, setExamCardio] = useState("Assourdissement des bruits du coeur")
    const [autre, setAutre] = useState()
    //autre cb values values
    const [autreOro, setAutreOro] = useState(false)
    const [autrePul, setAutrePul] = useState(false)
    const [autreOphta, setAutreOphta] = useState(false)
    const [autreCut, setAutreCut] = useState(false)
    const [autreNeuro, setAutreNeuro] = useState(false)
    const [autreCar, setAutreCar] = useState(false)
    // autre inputVlaues
    const [autreInputOro, setAutreInputOro] = useState(false)
    const [autreInputPul, setAutreInputPul] = useState(false)
    const [autreInputOphta, setAutreInputOphta] = useState(false)
    const [autreInputCut, setAutreInputCut] = useState(false)
    const [autreInputNeuro, setAutreInputNeuro] = useState(false)
    const [autreInputCar, setAutreInputCar] = useState(false)


    // form validation
    const [validation, setValidation] = useState()

    var handleAutreChange = (text) => {
        setAutre(text)
    }
    //autrecb handle change functions
    var handleChangeAutreOro = (text) => {
        setAutreInputOro(text)
    }

    var handleChangeAutrePul = (text) => {
        setAutreInputPul(text)

    }
    var handleChangeAutreOpht = (text) => {
        setAutreInputOphta(text)
    }
    var handleChangeAutreCut = (text) => {
        setAutreInputCut(text)
    }
    var handleChangeAUtreNeu = (text) => {
        setAutreInputNeuro(text)
    }
    var handleChangeAutreCar = (text) => {
        setAutreInputCar(text)
    }
    //submit function
    var handleSubmit = () => {


      

        var x = examOro.replace("Autre", "Autre:" + autreInputOro)



        var values = {
            fr: fr,
            fc: fc,
            pa_sys: pa_sys,
            pa_dya: pa_dya,
            sao2: sao2,
            scoreGlas: scoreGlas,
            poids: poids,
            taille: taille,
            examOro: examOro.replace("Autre", "Autre:" + autreInputOro),
            examPulmo: examPulmo.replace("Autre", "Autre:" + autreInputPul),
            examOphta: examOphta.replace("Autre", "Autre:" + autreInputOphta),
            examCut: examCut.replace("Autre", "Autre:" + autreInputCut),
            examNeuro: examNeuro.replace("Autre", "Autre:" + autreInputNeuro),
            examCardio: examCardio.replace("Autre", "Autre:" + autreInputCar),
            autre: autre,
            temperature: temperature,

        }
        //console.log(values)
        props.addExamCli(props.patientList["cin"], values)
        props.navigation.navigate("DiagnosticDetails")
    }



    return (

        <ScrollView  >
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
          <View style={styles.header}>
              <Text style={styles.text_header}>Examen clinique a l'admission</Text>
          </View>
          <Animatable.View 
              animation="fadeInUpBig"
              style={[styles.footer, {
                  backgroundColor: colors.background
              }]}
          >

            <View style={tailwind("items-center")}>
                <Text style={tailwind('text-red-500 py-2')}>{validation}</Text>
                <FormInput4 placeholder="Température en °C" type="decimal-pad" min="0" max="100" onChangeText={setTemperature} />
                <FormInput4 placeholder="FR  C/min" type="decimal-pad" min="0" max="100" onChangeText={setFr} />
                <FormInput4 placeholder="FC bpm" type="decimal-pad" min="0" max="100" onChangeText={setFc} />
                <FormInput4 placeholder="SaO2 %" type="decimal-pad" min="0" max="100" onChangeText={setSao2} />
                <FormInput2 placeholder1="PA systolique" placeholder2="PA diastolique" onChangeText1={setPa_sys} onChangeText2={setPa_dya} />
                <FormInput4 placeholder="Score de Glasgow -/" type="decimal-pad" min="0" max="15" onChangeText={setScoreGlas} />
                <FormInput4 placeholder="Poids kg" type="decimal-pad" min="0" max="100" maxLength={Number("3")} onChangeText={setPoids} />
                <FormInput4 placeholder="Taille m" type="number-pad" min="0" max="100" onChangeText={setTaille}  maxLength={Number("3")}/>
            </View>
            <View style={tailwind("px-8 py-2 ")}>
                <TouchableOpacity onPress={() => setOro(!oro)}>
                    <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>
                        Examen oro-pharyngé
           </Text>
                </TouchableOpacity>
                {
                    oro === true &&
                    <View>
                        <FormCheckBox text='Gorge Rouge' value={false} onPress={handleExamOroChange} />
                        <FormCheckBox text="Hypertrophie des amygdales" value={false} onPress={handleExamOroChange} />
                        <FormCheckBox text="Anosmie" value={false}  onPress={handleExamOroChange} />
                        <FormCheckBox text=" Agueusie" value={false}  onPress={handleExamOroChange} />
                        <FormCheckBox text=" Autre" value={false}  onPress={handleExamOroChange} />


                    </View>


                }
                {autreOro === true && oro === true && <View style={tailwind("items-center")}><FormInput placeholder="Autre" onChangeText={handleChangeAutreOro} /></View>}
                <TouchableOpacity onPress={() => setPul(!pul)}>
                    <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>
                        Examen pulmonaire
            </Text>
                </TouchableOpacity>
                {
                    pul === true &&
                    <View>
                        <FormCheckBox text="Tirage intercostal" value={false} onPress={handleExamPulChange} />
                        <FormCheckBox text="Tirage sus-sternal" value={false} onPress={handleExamPulChange} />
                        <FormCheckBox text="Silence auscultoire" value={false} onPress={handleExamPulChange} />
                        <FormCheckBox text="Hyper-sonorité" value={false} onPress={handleExamPulChange} />
                        <FormCheckBox text="Autre" value={false} onPress={handleExamPulChange} />
                    </View>

                }
                {autrePul === true && pul === true && <View style={tailwind("items-center")}><FormInput placeholder="Autre" onChangeText={handleChangeAutrePul} /></View>}
                <TouchableOpacity onPress={() => setOph(!oph)}>
                    <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>
                        Examen ophtalmologique
            </Text>
                </TouchableOpacity>
                {
                    oph === true &&
                    <View>
                        <FormCheckBox text="Hyperhèmie conjonctivale unilatérale" value={false} onPress={handleExamenOphtaChange} />
                        <FormCheckBox text="Hyperhèmie conjonctivale bilatérale" value={false} onPress={handleExamenOphtaChange} />
                        <FormCheckBox text="Autre" value={false} onPress={handleExamenOphtaChange} />
                    </View>
                }
                {autreOphta === true && oph === true && <View style={tailwind("items-center")}><FormInput placeholder="Autre" onChangeText={handleChangeAutreOpht} /></View>}
                <TouchableOpacity onPress={() => setCut(!cut)}>
                    <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>
                        Examen cutané
           </Text>
                </TouchableOpacity>
                {
                    cut === true && <View>
                        <FormCheckBox text="Erruption maculo-papuleuse géneralisée" value={false} onPress={handleExamCutChange} />
                        <FormCheckBox text="Erruption purpurique" value={false} onPress={handleExamCutChange} />
                        <FormCheckBox text="Engelure" value={false} onPress={handleExamCutChange} />
                        <FormCheckBox text="Autre" value={false} onPress={handleExamCutChange} />
                    </View>
                }
                {autreCut === true && cut === true && <View style={tailwind("items-center")}><FormInput placeholder="Autre" onChangeText={handleChangeAutreCut} /></View>}
                <TouchableOpacity onPress={() => setNeu(!neu)}>
                    <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>
                        Examen neurologique
           </Text>
                </TouchableOpacity>
                {
                    neu === true && <View>
                        <FormCheckBox text="Désorientation temporo-spatiale" value={false} onPress={handleExamNeuroChange} />
                        <FormCheckBox text="Agitation" value={false} onPress={handleExamNeuroChange} />
                        <FormCheckBox text="Trouble de comportement" value={false} onPress={handleExamNeuroChange} />
                        <FormCheckBox text="Autre" value={false} onPress={handleExamNeuroChange} />
                    </View>
                }
                {autreNeuro === true && neu === true && <View style={tailwind("items-center")}><FormInput placeholder="Autre" onChangeText={handleChangeAUtreNeu} /></View>}
                <TouchableOpacity onPress={() => setCard(!card)}>
                    <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>
                        Examen cardiovasculaire
           </Text>
                </TouchableOpacity>
                {
                    card === true &&
                    <View>
                        <FormCheckBox text="Assourdissement des bruits du coeur" value={false} onPress={handleExamenCarChange} />
                        <FormCheckBox text="Rythme cardiaque irrégulier" value={false} onPress={handleExamenCarChange} />
                        <FormCheckBox text="Souffre cardiaque si oui" value={false} onPress={handleExamenCarChange} />
                        <FormCheckBox text="Froideur des extrémités" value={false} onPress={handleExamenCarChange} />
                        <FormCheckBox text="Marbures aux genoux /generalisées" value={false} onPress={handleExamenCarChange} />
                        <FormCheckBox text="Autre" value={false} onPress={handleExamenCarChange} />
                    </View>

                }
                {autreCar === true && card === true && <View style={tailwind("items-center")}><FormInput placeholder="Autre" onChangeText={handleChangeAutreCar} /></View>}
                <TouchableOpacity onPress={() => setAut(!aut)}>
                    <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>
                        Autres éléments de l'examen physique
           </Text>
                </TouchableOpacity>
                {aut && <View style={tailwind("items-center")}><FormInput placeholder="Précisier" onChangeText={handleAutreChange} /></View>}

            </View>
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
    patientList: state.medicalService.patientList,

});
const mapActionToProps = {
    login: actions.login,
    logout: actions.logout,
    addExamCli: actions.addExamCli
};
export default connect(mapStateToProps, mapActionToProps)(ExamenCliniques1);
