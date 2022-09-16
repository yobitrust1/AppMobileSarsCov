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
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";

import FormInput from "../../Form/FormInput";
import FormButton from "../../Form/FormButton";

import { Table, TableWrapper, Cols } from 'react-native-table-component';
import {LinearGradient} from 'expo-linear-gradient';

const SearchPatient1 = (props) => {
  const { colors } = useTheme();
  var test=JSON.parse(localStorage.getItem("loggedUser"));
  useEffect(() => {
    props.search(search,test.username)
  }, [])

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
<ScrollView  >
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header }>Rechercher un patient</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >
      <View style={tailwind(' items-center ')} >
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
                  <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>patient:{props.patientList["generalInformation"]["patient"]}</Text>
                  <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>Nom:{props.patientList["generalInformation"]["nom"]}</Text>
                  <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>prenom:{props.patientList["generalInformation"]["prenom"]}</Text>
                    <FormButton title="Suivant" onPress={() => { props.navigation.navigate("Exposition1") }} />
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
      </Animatable.View>
      </View>
      </ScrollView>
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

export default connect(mapStateToProps, mapActionToProps)(SearchPatient1);
