import React, { useState, useEffect } from 'react';
import { StyleSheet,View, Text } from 'react-native';
import {IconButton,color} from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Boxlayout = (props) => {
  
  return (
  
    <View style={styles.BigContainer}>
    <View style={styles.ExtraSpaceUp}>
    </View>
    <View style={styles.BoxLayout}>
    <View style={styles.LeftBox}>
    <View style={styles.LeftBox1}>
      <IconButton icon="mail" color={Colors.deepPurpleA700} size={20} onPress={() => props.navigation.navigate("SearchPatient")}>
      </IconButton></View>
    <View style={styles.LeftBox2}></View>
    </View>
    <View style={styles.RightBox}>
    <View style={styles.RightBox1}></View>
    <View style={styles.RightBox2}></View>
    </View>
    </View>
    
    <View style={styles.ExtraSpaceDown}>
    </View>
  </View>
 

  );
};


const styles = StyleSheet.create({
    BigContainer:{
        flex:1,
        backgroundColor:'#fff',
    },
    ExtraSpaceUp:{
      flex:1,
      backgroundColor:'#fff',
    },
    BoxLayout:{
      flex:3,
      flexDirection:'row',
      //justifyContent:'center',
      alignContent:'center',
      backgroundColor:'#fff',
      //width:'95%',
    },
    ExtraSpaceDown:{
      flex:1,
      backgroundColor:'#fff',
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
    },
    LeftBox2:{
      flex:1,
      backgroundColor:'#fff',
      borderRadius:15,
      elevation:10,
    },
    RightBox1:{
      flex:3,
      backgroundColor:'#fff',
      marginBottom:'15%',
      borderRadius:15,
      elevation:10,
    },
    RightBox2:{
      flex:1,
      backgroundColor:'#fff',
      borderRadius:15,
      elevation:10,
    },
});
export default Boxlayout;
