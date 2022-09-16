import React, { useState, useEffect } from 'react';
import { StyleSheet,Text, View, Image } from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {IconButton,Colors} from 'react-native-paper';
import FormButton from "../Form/FormButton";
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import {LinearGradient} from 'expo-linear-gradient';

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
    
    
      <LinearGradient style={styles.BigContainer} colors={['#d7dbdd', '#abebc6','#d7dbdd']} >
    <View style={styles.ExtraSpaceUp}>
    </View>
    <View style={styles.BoxLayout}>
    <View style={styles.LeftBox}>
    <View style={styles.LeftBox1}></View>
    <View style={styles.LeftBox2}>
      <IconButton icon="mail" color={Colors.red500} size={50} onPress={() => props.navigation.navigate("AddPatient")}></IconButton>
      <Text style={styles.title}>Ajouter un patient</Text>
      </View>
    </View>
    <View style={styles.RightBox}>
    <View style={styles.RightBox1}>
      <IconButton icon="mail" color={Colors.red500} size={50} onPress={() => props.navigation.navigate("SearchPatient")}></IconButton>
      <Text style={styles.title}>Rechercher un patient</Text></View>
    <View style={styles.RightBox2}>
      <Text style={styles.title} onClick={{logout}}>Deconnexion</Text>
    </View>
    </View>
    </View>
    
    <View style={styles.ExtraSpaceDown}>
    </View>
    </LinearGradient>
  
  );
}

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
});
const mapStateToProps = (state) => ({
  loggedUser: state.medicalService.loggedUser,
});
const mapActionToProps = {
  login: actions.login,
  logout: actions.logout
};

export default connect(mapStateToProps, mapActionToProps)(Home);
