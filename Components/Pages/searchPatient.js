import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import FormInput from "../Form/FormInput";
import FormButton from "../Form/FormButton";
import 'localstorage-polyfill';
import { ScrollView } from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';

const SearchPatient = (props) => {
  var test=JSON.parse(localStorage.getItem("loggedUser"));
  useEffect(() => {
    props.search(search,test.username)
  }, [])

  const tableHead = ['Cin', 'Nom', 'Prenom']
  const [search, setSearch] = useState(0)
  const [search2, setSearch2] = useState(0)

  const handleSearchChange = (text) => {
    setSearch(text)
    //console.log(search)
  }
  const handleSearch = () => {
    setSearch2(search)
    console.log(search)
    props.search(search,test.username)


  }
  return (
<LinearGradient colors={['#d7dbdd', '#abebc6','#d7dbdd']} style={styles.body}>
    <ScrollView>
      <View style={styles.card}>
      <View style={tailwind(' items-center ')} >
        <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>Rechercher un patient</Text>
        <View style={tailwind('py-8 items-center')}>

          <FormInput
            placeholder="Search...Type CIN"
            type="number-pad"
            onChangeText={handleSearchChange}
            maxLength={Number("8")}
          />


          <FormButton title="Rechercher" onPress={handleSearch} />
          <View style={tailwind('py-8 items-center')}>
          
            <Text style={tailwind("text-red-500")}>
              {(search2 != 0) && ((typeof (props.patientList) === 'string' && props.patientList) ||
                (
                  <View style={tailwind('items-center')}>
                  <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>Nom:{props.patientList["generalInformation"]["nom"]||""}</Text>
                  <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>prenom:{props.patientList["generalInformation"]["prenom"]||""}</Text>
                    <FormButton title="Details" onPress={() => { props.navigation.navigate("PatientDetails") }} />
                    <FormButton title="Information" onPress={() => { props.navigation.navigate("Information") }} />
                    <FormButton title="Dashbord" onPress={() => { props.navigation.navigate("Dashbord") }} />
                    <FormButton title="Json" onPress={() => { props.navigation.navigate("Json1") }} />
                  </View>



                ))}

            </Text>
            </View>
          




        </View>

        <View style={styles.row}>
          <FormButton title="Ajouter un patient" onPress={() => { props.navigation.navigate("AddPatient"); }} />
          <FormButton title="Annuler" onPress={() => { props.navigation.navigate("Home"); }} />

        </View>
        </View>
      </View>
    </ScrollView>
    </LinearGradient>
  );
};

const mapStateToProps = (state) => ({
  patientList: state.medicalService.patientList
});
const mapActionToProps = {

  search: actions.searchPatient
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 10,
    marginRight: 10,
    marginTop:70,
    backgroundColor:"white",
    padding: 10,
    flexDirection:'row',
    borderRadius:30,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2193b0',
  },
  
});

export default connect(mapStateToProps, mapActionToProps)(SearchPatient);
