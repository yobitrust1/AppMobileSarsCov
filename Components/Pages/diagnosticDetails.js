import React from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../Form/FormButton";
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { StyleSheet,View, Text, ScrollView } from 'react-native';
import 'localstorage-polyfill';
import { medicalService } from '../../Reducers/medicalService';
import {LinearGradient} from 'expo-linear-gradient';


const DiagnosticDetails = (props) => {


    return (
<LinearGradient colors={['#d7dbdd', '#abebc6','#d7dbdd']} style={styles.body}>
        <ScrollView>


            <View style={tailwind(' items-center ')} >
                <Text style={tailwind('text-gray-700 font-bold py-2 text-xl text-center')}>Patient:{props.patientList["generalInformation"]["nom"] + " " + props.patientList["generalInformation"]["prenom"]}</Text>
                <View style={tailwind('py-8')}>
                    <FormButton title="Confirmation diagnostique" onPress={() => { props.navigation.navigate("ConfirmationDiag") }} />
                    <FormButton title="Admission" onPress={() => { props.navigation.navigate("Admission") }} />
                    <FormButton title="Caractéristiques cliniques" onPress={() => { props.navigation.navigate("CaracCliniques") }} />
                    <FormButton title="Examens cliniques" onPress={() => { props.navigation.navigate("ExamenCliniques") }} />
                    <FormButton title="Examens radiologiques et para-cliniques" onPress={() => props.navigation.navigate("ExamenRadioParaCli")} />
                    <FormButton title="Examens biologiques" onPress={() => props.navigation.navigate("ExamBio")} />
                    <FormButton title="Traitement" onPress={()=>props.navigation.navigate("Traitement")}/>
                    <FormButton title="Evolution"  onPress={()=>props.navigation.navigate("Evolution")}/>
                    <FormButton title="Evaluation finale" onPress={() => props.navigation.navigate("EvaluationFinale")} />
                </View>




            </View>
            <View style={tailwind('items-center py-8')}>
                <FormButton title="Retour" onPress={() => { props.navigation.navigate("PatientDetails") }} />

            </View>
        </ScrollView>
        </LinearGradient>
    );
};

const mapStateToProps = (state) => ({
    patientList: state.medicalService.patientList,
    diagnosticList: state.medicalService.diagnosticList,
});
const mapActionToProps = {
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2193b0',
  },
});
export default connect(mapStateToProps, mapActionToProps)(DiagnosticDetails);
