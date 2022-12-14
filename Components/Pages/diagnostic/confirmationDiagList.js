import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { ScrollView,View, Text, StyleSheet } from 'react-native';
import 'localstorage-polyfill';
import {  TouchableOpacity } from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';


const AntecedentsList = (props) => {
  const [display, setDiplay] = useState(false);
  useEffect(() => {
    const test =props.patientList.confDiags;
  })
    const test =props.patientList.confDiags;
    console.log(test)
    var handleModifier = (item,date) => {
     
      localStorage.setItem("type", item)
      localStorage.setItem("datePr",date)
      props.navigation.navigate("confirmationDiagModif")

    }
  
    var handleRemove = (item,date) => {
      var values = {
        "type": item,
        "datePr":date
      }
      props.delOneConfDiag(props.patientList["cin"], values)
    }

  return (
<LinearGradient style={styles.BigContainer} colors={['#d7dbdd', '#abebc6','#d7dbdd']} >
    
    <ScrollView>
      <View style={styles.card}>
      <View style={styles.card1 }> 
       </View>
      <View style={styles.card1 } >
       <View><Text style={tailwind('text-gray-700 font-bold py-2 text-xl text-center')}>Confirmation diagnostique:
       </Text>
        <View>
          
    {test!=null&& Object.keys(test).map((setNom, key) => (<View> 
      <Text style={tailwind('text-center')}>{setNom}</Text>
    <View >
       


        <View>{setNom=="pcrs" &&test[setNom]!=null&& 
          <View>{Object.keys(test[setNom]).map((key, key1) => (
          <View> 
            <View><Text style={tailwind('text-center')}>{test[setNom][key]["datePr"]}ss</Text></View>   
            <TouchableOpacity onPress={() => handleModifier("Pcr",test[setNom][key]["datePr"])}>
            <View><Text style={tailwind('text-teal-600 px-8 text-center')}>Modifier ?</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { handleRemove("Pcr",test[setNom][key]["datePr"]) }}>
            <View><Text style={tailwind('text-teal-600 px-8 text-center')}>Supprimer ?</Text></View>
            </TouchableOpacity>
          </View>))}
        </View>   
      }</View>
    <View>{setNom=="rapideAcs" &&test[setNom]!=null&& 
          <View>{Object.keys(test[setNom]).map((key, key1) => (
          <View> 
            <View><Text style={tailwind('text-center')} >{test[setNom][key]["datePr"]}ss</Text></View>   
            <TouchableOpacity onPress={() => handleModifier("RapideAc",test[setNom][key]["datePr"])}>
            <View><Text style={tailwind('text-teal-600 px-8 text-center')}>Modifier ?</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { handleRemove("RapideAc",test[setNom][key]["datePr"]) }}>
            <View><Text style={tailwind('text-teal-600 px-8 text-center')}>Supprimer ?</Text></View>
            </TouchableOpacity>
          </View>))}
        </View>   
      }</View>
       <View>{setNom=="rapideAgs" &&test[setNom]!=null&& 
          <View>{Object.keys(test[setNom]).map((key, key1) => (
          <View> 
            <View><Text style={tailwind('text-center')}>{test[setNom][key]["datePr"]}ss</Text></View>   
            <TouchableOpacity onPress={() => handleModifier("RapideAg",test[setNom][key]["datePr"])}>
            <View><Text style={tailwind('text-teal-600 px-8 text-center')}>Modifier ?</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { handleRemove("RapideAg",test[setNom][key]["datePr"]) }}>
            <View><Text style={tailwind('text-teal-600 px-8 text-center')}>Supprimer ?</Text></View>
            </TouchableOpacity>
          </View>))}
        </View>   
      }</View>
      <View>{setNom=="serologies" &&test[setNom]!=null&& 
          <View>{Object.keys(test[setNom]).map((key, key1) => (
          <View> 
            <View><Text style={tailwind('text-center')}>{test[setNom][key]["datePr"]}ss</Text></View>   
            <TouchableOpacity onPress={() => handleModifier("Serologie",test[setNom][key]["datePr"])}>
            <View><Text style={tailwind('text-teal-600 px-8 text-center')}>Modifier ?</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { handleRemove("Serologie",test[setNom][key]["datePr"]) }}>
            <View><Text style={tailwind('text-teal-600 px-8 text-center')}>Supprimer ?</Text></View>
            </TouchableOpacity>
          </View>))}
        </View>   
      }</View>
      
      



     
    </View> 
  </View>
    
        ))
}
  </View>
        <View style={styles.row}>
          <FormButton title="Retour" onPress={() => props.navigation.navigate("DiagnosticDetails")} />

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
  card1:{marginRight: 100,
    justifyContent: 'center', alignItems: 'center',
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
    marginTop:130,
    backgroundColor:"white",
    padding: 10,
    flexDirection:'row',
    borderRadius:30,
  },
});
const mapStateToProps = (state) => ({
  patientList: state.medicalService.patientList,
});
const mapActionToProps = {
  delOneConfDiag: actions.delOneConfDiag
};

export default connect(mapStateToProps, mapActionToProps)(AntecedentsList);
