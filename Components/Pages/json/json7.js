import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  ScrollView
} from 'react-native';
import FormButton from "../../Form/FormButton";
import WavyHeader from '../WavyHeader';
import { connect } from "react-redux";
const Json2 = (props) => {
  let config = {
        num: [4, 7],
        rps: 0.1,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-50, 50],
        alpha: [0.6, 0],
        scale: [.1, 0.9],
        position: "all",
        color: [ "#ff0000"],
        cross: "dead",
        random: 10
      };
      const list = {
        "nom": "nom",
        "prenom": "prenomaaa",
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
      
      const test =props.patientList.examRadio_paraCli;
      return (
        <View style={styles.container2}><ScrollView>
      <WavyHeader customStyles={styles.svgCurve} />
      <Text style={styles.headerText}>Examens radiologiques et para-cliniques</Text>
      <View style={styles.headerContainer}>
        
        </View>
        <View style={styles.container1}>
                    {test!=null&&Object.keys(test).map((setNom, key) => (
                      
                        <View >
                <Text style={styles.name1}>{setNom}</Text>
                  
                {test[setNom]!=null&&Object.keys(test[setNom]).map((key1, i)=> (
                      
                      <View >
              <Text style={styles.name}>{key1}</Text>
                {Object.keys(test[setNom][key1]).map((key2, i1)=> (
                      <View style={styles.card} >
              <Text style={styles.name}>{key2}</Text>
                <Text style={styles.count}>{String(test[setNom][key1][key2])}</Text>
            </View>
  
        ))
  }
            </View>
  
        ))
  }
              </View>
  
          ))
  }</View>
<FormButton title="Suivant" onPress={() => { props.navigation.navigate("Json8") }} />
</ScrollView></View>
              
 
      );
};

  const mapStateToProps = (state) => ({
      patientList: state.medicalService.patientList
  });
  const mapActionToProps = {
  };
  const styles = StyleSheet.create({
    container2: {
      flex: 1,
      backgroundColor: '#fff'
    },
    headerContainer: {
      marginTop: 80,
      marginHorizontal: 10
    },
    svgCurve: {
      position: 'absolute',
      width: Dimensions.get('window').width
    },
    headerText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#f7faf9',
      textAlign: 'center',
      marginTop: 35
    },
    container1:{
      flex:1,
      marginTop:40,
      backgroundColor:'#fff',
    },
  container:{
    flex:1,
    marginTop:10,
    backgroundColor:"#ebf0f7"
  },
  contentList:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:"#ebf0f7"
  },

  card:{
    shadowColor: '#00000075',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    backgroundColor:"white",
    padding: 10,
    flexDirection:'row',
    borderRadius:30,
  },

  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#3399ff",
    fontWeight:'bold'
  },
  name1:{
    fontSize:24,
    flex:1,
    marginTop:20,
    alignSelf:'center',
    color:"#6666ff",
    fontWeight:'bold'
  },
  count:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#6666ff"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "white",
    borderWidth:1,
    borderColor:"#dcdcdc",
  },
  followButtonText:{
    color: "#dcdcdc",
    fontSize:12,
  },
  });
  export default connect(mapStateToProps, mapActionToProps)(Json2);
