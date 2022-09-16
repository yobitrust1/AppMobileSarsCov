import React from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { StyleSheet,View, Text, ScrollView } from 'react-native';
import 'localstorage-polyfill';
import {LinearGradient} from 'expo-linear-gradient';


const Information = (props) => {


    return (
<LinearGradient colors={['#d7dbdd', '#abebc6','#d7dbdd']} style={styles.body}>
        <ScrollView>


            <View style={tailwind(' items-center ')} >
                <Text style={tailwind('text-gray-700 font-bold py-2 text-xl text-center')}>Patient:{props.patientList["generalInformation"]["nom"] + " " + props.patientList["generalInformation"]["prenom"]}</Text>
                <View style={tailwind('py-24')}>
                    <FormButton title="Informations générales" onPress={() => { props.navigation.navigate("InfosGenerales2") }} />
                    <FormButton title="Habitudes de vie" onPress={() => { props.navigation.navigate("HabitudesDeVie") }} />
                    <FormButton title="Antécédents médicaux" onPress={() => { props.navigation.navigate("AntecendentsMedicaux") }} />
                    <FormButton title="Expositions a risque" onPress={() => { props.navigation.navigate("Exposition") }} />
                    <FormButton title="Diagnostics" onPress={() => { props.navigation.navigate("DiagnosticDetails") }} />
                </View>




            </View>
            <View style={tailwind('items-center py-8')}>
                <FormButton title="Retour" onPress={() => { props.navigation.navigate("SearchPatient") }} />

            </View>
        </ScrollView>
        </LinearGradient>
    );
};

const mapStateToProps = (state) => ({
    patientList: state.medicalService.patientList
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
export default connect(mapStateToProps, mapActionToProps)(Information);
