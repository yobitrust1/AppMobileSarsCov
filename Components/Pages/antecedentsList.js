import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../Form/FormButton";
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import 'localstorage-polyfill';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';


const AntecedentsList = (props) => {
  useEffect(() => {
    props.getAllAntecedensMedicaux(props.patientList["cin"])
  }, [])

  const list = {
    "grossesse": "Grossesse",
    "PathResChronique": "Pathologie respiratoire chronique",
    "Cardiopathies": "Cardiopathies",
    "TrRythCardiaque": "Trouble de rythme cardique",
    "HTA": "HTA",
    "Diabete": "Diabète",
    "InsRenaleChro": "Inssufisance rénale chronique",
    "Retinopathie": "Retinopathie",
    "ATCDchir": "ATCD chirurgicaux",
    "PriseAINS": "Prise récente d'AINS",
    "Immunosuppreseur": "Traitement immunosuppreseur",
    "AutresATCD": "Autres ATCD"
  }

  const listPath = {
    "grossesse": "Grossesse",
    "PathResChronique": "PathRespChronique",
    "Cardiopathies": "Cardiopathies",
    "TrRythCardiaque": "TrRythCardiaque",
    "HTA": "HTA",
    "Diabete": "Diabete",
    "InsRenaleChro": "InsRenaleChro",
    "Retinopathie": "Retinopathie",
    "ATCDchir": "ATCDchir",
    "PriseAINS": "PriseAINS",
    "Immunosuppreseur": "Immunosuppreseur",
    "AutresATCD": "AutresATCD",
    "AVC": "AVC"

  }

  var handleModifier = (item) => {
    props.navigation.navigate(listPath[item])
  }

  var handleRemove = (item) => {
    var values = {
      "antecedent": item
    }
    props.removeAntecedentMedical(props.patientList["cin"], values)
  }



  return (
<LinearGradient style={styles.BigContainer} colors={['#d7dbdd', '#abebc6','#d7dbdd']} >
<ScrollView>
      <View style={styles.card}>
        <View style={styles.ExtraSpaceUp}>
    </View>
    <View >
      <View style={tailwind(' items-center ')} >
        <Text style={tailwind('text-gray-700 font-bold py-2 text-xl text-center')}>Antécedents Médicaux:{props.patientList["generalInformation"]["nom"] + " " + props.patientList["generalInformation"]["prenom"]}</Text>

        <View style={tailwind("py-8")}>
          {props.antecedents.map((item, index) => (<View key={item} style={tailwind("py-2")}>

            <Text style={tailwind("font-bold text-gray-700")} >{list[item]}</Text>

            <TouchableOpacity onPress={() => handleModifier(item)}>
              <Text style={tailwind('text-teal-500 px-8')}>
                Modifier ?
    </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { handleRemove(item) }}>
              <Text style={tailwind('text-teal-500 px-8')}>
                Supprimer ?
    </Text>
            </TouchableOpacity>






          </View>
          ))}

        </View>
        <View style={styles.row}>
          <FormButton title=" Ajouter un antécedent médical" onPress={() => props.navigation.navigate("AddAntecendentsMedicaux")} />
          <FormButton title="Retour" onPress={() => props.navigation.navigate("AntecendentsMedicaux")} />

        </View>


      </View>
      </View>
      <View style={styles.ExtraSpaceDown}>
    </View>
    </View>
    </ScrollView>
     </LinearGradient>
  );
};
const styles = StyleSheet.create({
  BigContainer:{
      flex:1,
      backgroundColor:'#fff',
  },
  ExtraSpaceUp:{
    flex:1,
  },
  BoxLayout:{
    flex:3,
    flexDirection:'row',
    //justifyContent:'center',
    alignContent:'center',
    backgroundColor:'#fff',
    //width:'95%',
    borderRadius:15,
    marginRight:'4%',
    marginLeft:'4%',
  },
  ExtraSpaceDown:{
    flex:1,
  },
  LeftBox:{
    flex:1,
    
    backgroundColor:'#fff',
    marginRight:'2.5%',
    marginLeft:'10%',
    marginVertical:'5%',
},
  RightBox:{
    flex:1,
    backgroundColor:'#fff',
    marginLeft:'2.5%',
    marginRight:'7%',
    marginVertical:'5%',
  },
  LeftBox1:{
    flex:1,
    backgroundColor:'#fff',
    marginBottom:'15%',
    borderRadius:15,
    elevation:10,
    justifyContent:'center',
    alignItems:'center',
  },
  LeftBox2:{
    flex:1,
    backgroundColor:'#fff',
    borderRadius:15,
    elevation:10,
    justifyContent:'center',
    alignItems:'center',
  },
  RightBox1:{
    flex:3,
    backgroundColor:'#fff',
    marginBottom:'15%',
    borderRadius:15,
    elevation:10,
    justifyContent:'center',
    alignItems:'center',
  },
  RightBox2:{
    flex:1,
    backgroundColor:'#fff',
    borderRadius:15,
    elevation:10,
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    fontSize:18,
    color:"#696969"
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
});
const mapStateToProps = (state) => ({
  patientList: state.medicalService.patientList,
  antecedents: state.medicalService.antecedentList,
});
const mapActionToProps = {
  getAllAntecedensMedicaux: actions.getAllAntecedentsMedicaux,
  removeAntecedentMedical: actions.removeAntecedentMedical
};

export default connect(mapStateToProps, mapActionToProps)(AntecedentsList);
