import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../Form/FormButton";
import FormCheckBox from "../Form/CheckBox";
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { StyleSheet,View, Text } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import 'localstorage-polyfill';



const Home = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const logout = (e) => {


    props.logout();
    localStorage.setItem("loggedUser", JSON.stringify(null))
    props.navigation.navigate("Login")
    console.log(localStorage.getItem("loggedUser"));

    console.log(props.loggedUser)

  }
  return (

    <>

<LinearGradient colors={['#d7dbdd', '#abebc6','#d7dbdd']} style={styles.body}>
      <View style={tailwind(' items-center ')} >
        <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>Bienvenue a Hack-Covid-19</Text>
        <View style={tailwind('py-24')}>
          <FormButton title="Ajouter un patient" onPress={() => props.navigation.navigate("AddPatient")} />
          <FormButton title=" Rechercher un patient " onPress={() => props.navigation.navigate("SearchPatient")} />
        </View>


        <FormButton title="Deconnexion" onPress={logout} />





      </View>
      </LinearGradient>
    </>
  );
};

const mapStateToProps = (state) => ({
  loggedUser: state.medicalService.loggedUser,
});
const mapActionToProps = {
  login: actions.login,
  logout: actions.logout
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2193b0',
  },
});
export default connect(mapStateToProps, mapActionToProps)(Home);
