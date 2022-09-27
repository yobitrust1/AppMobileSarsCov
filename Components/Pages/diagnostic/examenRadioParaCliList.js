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
    const test =props.patientList.examRadio_paraCli;
  })
    const test =props.patientList.examRadio_paraCli;
    console.log(test)
    var handleModifier = (item,date) => {
     
      localStorage.setItem("type", item)
      localStorage.setItem("datepr",date)
      props.navigation.navigate("examenRadioParaCliModif")

    }
  
    var handleRemove = (item,date) => {
      var values = {
        "type": item,
        "datepr":date
      }
      props.delOneExamenRadioParacli(props.patientList["cin"], values)
    }

  return (
<LinearGradient style={styles.BigContainer} colors={['#d7dbdd', '#abebc6','#d7dbdd']} >
    
    <ScrollView>
      <View style={styles.card}>
      <View style={tailwind(' items-center ')} >
       <View><Text style={tailwind('text-gray-700 font-bold py-2 text-xl text-center')}>Examen biologique:
       </Text><ScrollView>
        <View>
          
    {test!=null&& Object.keys(test).map((setNom, key) => (<View> 
      <Text>{setNom}</Text>
    <View >
       


        <View>{setNom=="thoraxes" &&test[setNom]!=null&& 
          <View>{Object.keys(test[setNom]).map((key, key1) => (
          <View> 
            <View><Text >{test[setNom][key]["datepr"]}ss</Text></View>   
            <TouchableOpacity onPress={() => handleModifier("Thorax",test[setNom][key]["datepr"])}>
            <View><Text style={tailwind('text-teal-200 px-8')}>Modifier ?</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { handleRemove("Thorax",test[setNom][key]["datepr"]) }}>
            <View><Text style={tailwind('text-teal-200 px-8')}>Supprimer ?</Text></View>
            </TouchableOpacity>
          </View>))}
        </View>   
      }</View>
    <View>{setNom=="tdmThos" &&test[setNom]!=null&& 
          <View>{Object.keys(test[setNom]).map((key, key1) => (
          <View> 
            <View><Text >{test[setNom][key]["datepr"]}ss</Text></View>   
            <TouchableOpacity onPress={() => handleModifier("TdmTho",test[setNom][key]["datepr"])}>
            <View><Text style={tailwind('text-teal-200 px-8')}>Modifier ?</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { handleRemove("TdmTho",test[setNom][key]["datepr"]) }}>
            <View><Text style={tailwind('text-teal-200 px-8')}>Supprimer ?</Text></View>
            </TouchableOpacity>
          </View>))}
        </View>   
      }</View>
      <View>{setNom=="ecgs" &&test[setNom]!=null&& 
          <View>{Object.keys(test[setNom]).map((key, key1) => (
          <View> 
            <View><Text >{test[setNom][key]["datepr"]}ss</Text></View>   
            <TouchableOpacity onPress={() => handleModifier("ECG",test[setNom][key]["datepr"])}>
            <View><Text style={tailwind('text-teal-200 px-8')}>Modifier ?</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { handleRemove("ECG",test[setNom][key]["datepr"]) }}>
            <View><Text style={tailwind('text-teal-200 px-8')}>Supprimer ?</Text></View>
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
        </ScrollView>

        </View>
      </View>
      <View style={styles.ExtraSpaceDown}>
    </View>
    </View>
    </ScrollView>
      </LinearGradient>  );
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
});
const mapActionToProps = {
  delOneExamenRadioParacli: actions.delOneExamenRadioParacli
};


export default connect(mapStateToProps, mapActionToProps)(AntecedentsList);
