import { Button,
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
import RadioGroup from 'react-native-radio-buttons-group';
import FormInput from '../../Form/FormInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import FormButton from '../../Form/FormButton';
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import {LinearGradient} from 'expo-linear-gradient';
import 'localstorage-polyfill';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Traitement1 = (props) => {
  const { colors } = useTheme();
  useEffect(() => {
    props.getTraitment(props.patientList["cin"], {
      trai: trai
    })
   if ( props.traitmentList !=null &&typeof(props.traitmentList)!=="string"&& props.traitmentList["dateD"] !== null &&   props.traitmentList["dateD"] !== undefined &&oper === "M") setDateD(props.traitmentList["dateD"].slice(0, 10))
    //else setDateD()
    //if (typeof(props.traitmentList)!=="string"&& props.traitmentList["dateF"] !== null && oper === "M") setDateF(props.traitmentList["dateF"].slice(0, 10))
    //else setDateF()
  })

  const [oldPactt, setOldPactt] = useState(true)
  const [pactt, setPactt] = useState("Bras 1")
  const [type, setType] = useState("M")
  const [trai, setTrai] = useState("Lopinavir/ritonavir")
  const [oper, setOper] = useState("A")
  const [dateD, setDateD] = useState(new Date())
  const [dateF, setDateF] = useState(new Date())
  const [datePicker, setDatePicker] = useState(false);
  const [datePicker1, setDatePicker1] = useState(false);
  const [datePicker2, setDatePicker2] = useState(false);
  const [datePicker3, setDatePicker3] = useState(false);
  const [autreBox, setAutreBox] = useState(trai === "Autre")
  const [dosage, setDosage] =  useState()

  //formValidation
  const [validation, setValidation] = useState()

  function showDatePicker() {
    setDatePicker(true);
  };
  function onDateSelected(event, value) {
    setDateD(value);
    setDatePicker(false);
  };
  function showDatePicker1() {
    setDatePicker1(true);
  };
  function onDateSelected1(event, value) {
    setDateF(value);
    setDatePicker1(false);
  };

  function showDatePicker2() {
    setDatePicker2(true);
  };
  function onDateSelected2(event, value) {
    setDateD(value);
    setDatePicker2(false);
  };
  function showDatePicker3() {
    setDatePicker3(true);
  };
  function onDateSelected3(event, value) {
    setDateF(value);
    setDatePicker3(false);
  };

  var handlePacttChange = (data) => {
    var i;
    for (i = 0; i < data.length; i++) {
      if (data[i].selected) { setPactt(data[i].label) }

    }
  }

  var handleOperChange = (data) => {
    var i;
    for (i = 0; i < data.length; i++) {
      if (data[i].selected) { setOper(data[i].label[0]); setDateF(); setDateD(); }

      if (data[i].label[0]==="M" && typeof(props.traitmentList)!=="string"&& props.traitmentList["dosage"] !== null  && props.traitmentList["dosage"] !== undefined)
       {setDosage(props.traitmentList["dosage"])}

    }
  }
  var handleTypeChange = (data) => {
    /* var i;
    for (i = 0; i < data.length; i++) {
      if (data[i].selected) { setType(data[i].label.charAt(0)) ;  }

    }*/
    if (data[0].selected) {
      setType("M"); setTrai("Lopinavir/ritonavir"); setDateD(); setDateF()
    }
    if (data[1].selected) {
      setType("P"); setTrai("O2"); setDateD(); setDateF()
    }
    if (data[2].selected) {
      setType("A"); setTrai("Amoxicilline/Acide clavunique"); setDateD(); setDateF()
    }
  }

  var handlePacttChange = (data) => {
    var i;
    for (i = 0; i < data.length; i++) {
      if (data[i].selected) { setPactt(data[i].label) }

    }
  }
  var handleTraiChange = (data) => {
    var i;
    for (i = 0; i < data.length; i++) {
      setDateF()
      setDateD()
      if (data[i].selected) {
        setTrai(data[i].label);

        if (data[i].label == "Autre") { setAutreBox(true); setTrai() }
        else setAutreBox(false)
        props.getTraitment(props.patientList["cin"], {
          trai: trai
        })
      }

    }
  }

  //SubmitFunction
  var handleSUbmit = () => {
    var values = {
      dosage: dosage,
      dateD: dateD,
      dateF: dateF,
      trai: trai,
      pactt:pactt
    }
    console.log(values)
     if(trai ===undefined)
     { setValidation("Veuillez choisir un traitment") ;return;}
      if(dosage ===undefined)
      {setValidation("Veuillez precisier un dosage");return}
      if(dateD ===undefined)
     { setValidation("La date de debut de traitement est obligatoire");return}
     setValidation()

    props.addTraitment(props.patientList["cin"], values)
    props.navigation.navigate("Evolution1")

  }

  return (
<ScrollView  >
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Traitement</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >
      {validation !== undefined && <Text style={tailwind("text-center font-bold text-red-500")}>{validation}</Text>}
      <Text style={tailwind('text-gray-700 pt-8  pl-4 text-center pb-4')}>Participation au projet PACTT ?</Text>
      
      
        <RadioGroup radioButtons={[

          {
            label: "Bras 1",
            color: '#51d1c5',
          },
          {
            label: "Bras 2",
            color: '#51d1c5',
          },
          {
            label: "Non",
            color: '#51d1c5',
          },


        ]}
          flexDirection='row'
          style={tailwind('')}
          onPress={handlePacttChange}
        />

      <View style={tailwind("py-12")}>
        <Text style={tailwind('text-gray-700  text-center pb-4')}>Modifier ajouter les traitements</Text>
        <RadioGroup radioButtons={[

          {
            label: "Molécules",
            color: '#51d1c5',
          },
          {
            label: "Prise en charge standard",
            color: '#51d1c5',
          },
          {
            label: "Antibiothérapie",
            color: '#51d1c5',
          },


        ]}
          //flexDirection='row'
          onPress={handleTypeChange}
        />
        <Text style={tailwind('text-gray-700  text-center p-4')}> Lequel/Laquelle ?</Text>
        {
          type === "M" && <RadioGroup radioButtons={[

            {
              label: "Lopinavir/ritonavir",
              color: '#51d1c5',
            },
            {
              label: "Chloroquine phosphate",
              color: '#51d1c5',
            },
            {
              label: "Hydroxy-Chloroquine",
              color: '#51d1c5',
            },
            {
              label: "Azithromycine",
              color: '#51d1c5',
            },
            {
              label: "Remdesivir",
              color: '#51d1c5',
            },
            {
              label: "Autre",
              color: '#51d1c5',
            },


          ]}
            //flexDirection='row'
            onPress={handleTraiChange}
          />
        }

        {
          type === "P" && <RadioGroup radioButtons={[

            {
              label: "O2",
              color: '#51d1c5',
            },
            {
              label: "HFNC",
              color: '#51d1c5',
            },
            {
              label: "CPAP",
              color: '#51d1c5',
            },
            {
              label: "VNI",
              color: '#51d1c5',
            },
            {
              label: "VMI",
              color: '#51d1c5',
            },
            {
              label: "Paracétamol",
              color: '#51d1c5',
            },
            {
              label: "Anti coaguant",
              color: '#51d1c5',
            },
            {
              label: "H2O",
              color: '#51d1c5',
            },
            {
              label: "ADO",
              color: '#51d1c5',
            },
            {
              label: "Insulinothérapie",
              color: '#51d1c5',
            },
            {
              label: "Nébulisation corticoides",
              color: '#51d1c5',
            },
            {
              label: "Nébulisation bronchodilateurs",
              color: '#51d1c5',
            },

          ]}
            //flexDirection='row'
            onPress={handleTraiChange}
          />
        }
        {
          type === "A" && <RadioGroup radioButtons={[

            {
              label: "Amoxicilline/Acide clavunique",
              color: '#51d1c5',
            },
            {
              label: "Cefotaxime",
              color: '#51d1c5',
            },
            {
              label: "Ceftriaxone",
              color: '#51d1c5',
            },

            {
              label: "Autre",
              color: '#51d1c5',
            },


          ]}
            //flexDirection='row'
            onPress={handleTraiChange}
          />
        }
        {autreBox === true && <View style={tailwind("items-center")}>
          <FormInput placeholder="Autre traitement ..." onChangeText={setTrai} />
        </View>}
        <Text style={tailwind('text-gray-700  text-center p-4')}> Choisir l'opération ?</Text>
        <RadioGroup radioButtons={[

          {
            label: "Ajouter Autre",
            color: '#51d1c5',
          },

          {
            label: "Modifier date fin",
            color: '#51d1c5',
          },
        ]}
          //flexDirection='row'
          onPress={handleOperChange}
        />
        {
          (oper === "A") && <View style={tailwind("items-center ")}>
            <FormInput placeholder={"Dosage"} onChangeText={setDosage}  />
            <View style={styles.row}>

<Text style={tailwind('text-gray-700 py-2')}>
  Date de debut</Text>
{datePicker && (
  <DateTimePicker
    value={dateD}
    mode={'date'}
    minimumDate={new Date(1950, 0, 1)}
    maximumDate={new Date()}
    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
    is24Hour={true}
    onChange={onDateSelected}
    style={styles.datePicker}
  />
)}
{!datePicker && (
  <View >
    <Button title={(dateD !== undefined && dateD.toDateString()) || "Show Date Picker"} color="green" onPress={showDatePicker} />
  </View>
  
)}
</View>
<View style={styles.row}>

<Text style={tailwind('text-gray-700 py-2')}>
  Date de fin </Text>
{datePicker1 && (
  <DateTimePicker
    value={dateF}
    mode={'date'}
    minimumDate={new Date(1950, 0, 1)}
    maximumDate={new Date()}
    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
    is24Hour={true}
    onChange={onDateSelected1}
    style={styles.datePicker}
  />
)}
{!datePicker1 && (
  <View >
    <Button title={(dateF !== undefined && dateF.toDateString()) || "Show Date Picker"} color="green" onPress={showDatePicker1} />
  </View>
  
)}
</View>
          </View>
        }
        {
          oper === "M" && typeof (props.traitmentList) === "string" && <Text style={tailwind("text-center py-4 font-bold  text-red-500")}>{"Aucun traitement " + trai + " trouvé , Veuillez ajouter autre !"}</Text>
        }
        {
          oper === "M" && typeof (props.traitmentList) !== "string" && props.traitmentList !== null && <View style={tailwind("items-center")}>
            <FormInput placeholder={"Doage/Debit:" + props.traitmentList["dosage"]} editable="false" />
            <View style={styles.row}>

        <Text style={tailwind('text-gray-700 py-2')}>
          Date de debut</Text>
      {datePicker2 && (
          <DateTimePicker
            value={dateD}
            mode={'date'}
            minimumDate={new Date(1950, 0, 1)}
            maximumDate={new Date()}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateSelected2}
            style={styles.datePicker}
          />
        )}
        {!datePicker2 && (
          <View >
            <Button title={(dateD !== undefined && dateD.toDateString()) || "Show Date Picker"} color="green" onPress={showDatePicker2} />
          </View>
          
        )}
      </View>
<View style={styles.row}>

        <Text style={tailwind('text-gray-700 py-2')}>
          Date de fin </Text>
      {datePicker3 && (
          <DateTimePicker
            value={dateF}
            mode={'date'}
            minimumDate={new Date(1950, 0, 1)}
            maximumDate={new Date()}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateSelected3}
            style={styles.datePicker}
          />
        )}
        {!datePicker3 && (
          <View >
            <Button title={(dateF !== undefined && dateF.toDateString()) || "Show Date Picker"} color="green" onPress={showDatePicker3} />
          </View>
          
        )}
      </View>
          </View>
        }
      </View>
      <View style={tailwind("items-center")}>
        <View style={styles.row}>
          <FormButton title="Retour" onPress={() => props.navigation.navigate("examBio1")} />
          <FormButton title="Enregistrer" onPress={handleSUbmit} />
        </View>
        <FormButton title="Pass" onPress={() => props.navigation.navigate("Evolution1")} />

      </View>
      </Animatable.View>
      </View>
      </ScrollView>
  );
};


const styles = StyleSheet.create({
  row: {
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


const mapStateToProps = (state) => ({
  patientList: state.medicalService.patientList,
  traitmentList: state.medicalService.traitmentList
});
const mapActionToProps = {
  getTraitment: actions.getTraitment,
  addTraitment: actions.addTraitment

};
export default connect(mapStateToProps, mapActionToProps)(Traitement1);
