import { 
  View, 
  Text, 
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
import CaracCls from "../../Form/CaracCls";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import 'localstorage-polyfill';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';
import FormInput4 from '../../Form/FormInput4';

const Traitement1 = (props) => {
  const { colors } = useTheme();
  const [trait, setTrait] = useState(true)
 const [dateD, setDateD] = useState(new Date())
 const [dateF, setDateF] = useState(new Date())
 const [pactt, setPactt] = useState()
 const [dosage, setDosage] = useState()
 const [autre, setAutre] = useState()
 const [datePicker, setDatePicker] = useState(false);
 
 const [lop, setLop] = useState(false)
 const [chlo, setChlo] = useState(false)
 const [hydro, setHydro] = useState(false)
 const [azith, setAzith] = useState(false)
 const [rem, setRem] = useState(false)
 const [od, setOd] = useState(false)
 const [hfnc, setHfnc] = useState(false)
 const [cpap, setCpap] = useState(false)
 const [vni, setVni] = useState(false)
 const [vmi, setVmi] = useState(false)
 const [para, setPara] = useState(false)
 const [anti, setAnti] = useState(false)
 const [hdo, setHdo] = useState(false)
 const [ado, setAdo] = useState(false)
 const [insul, setinsul] = useState(false)
 const [nebC, setNebC] = useState(false)
 const [nebB, setNebB] = useState(false)
 const [amoxi, setAmoxi] = useState(false)
 const [cefo, setCefo] = useState(false)
 const [ceft, setCeft] = useState(false)
 const [autreA, setAutreA] = useState(false)
 var handleAutreChange= (data) => {
  setAutre(data)
 }
 var handlePacttChange = (data) => {
  var i;
  for (i = 0; i < data.length; i++) {
    if (data[i].selected) { setPactt(data[i].label) }

  }
}
  var handleDoseChange = (text) => {
    setDosage(text)
  }
 
 
  var handleTraitChange = (data) => {
  if (data[0].selected)
  setTrait(true)
  else setTrait(false)
 }
  var handleSubmitCarac = (item) => {
  var values = {
  type: item,
  trait:trait,
  dateD: dateD,
  dateF: dateF,
  pactt:pactt,
  dosage:dosage,
  autre:autre,
  }
  console.log(values)
  props.addTraitment(props.patientList["cin"], values)
 
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



          <Text style={tailwind('text-gray-700 py-4 text-center')}>
          Traitement ?
  </Text>
          <RadioGroup radioButtons={[
              {
                  label: 'Oui',
                  color: '#51d1c5',

              },
              {
                  label: 'Non',
                  color: '#51d1c5',
              },
          ]}
              flexDirection='row'
              style={tailwind('')}
              onPress={handleTraitChange}
          />
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
          {
              trait === true &&
              <View style={tailwind("px-8 py-2")}>
                  <TouchableOpacity onPress={() => setLop(!lop)}>
                      <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>Lopinavir/ritonavir</Text>
                  </TouchableOpacity>
                  {
                      lop == true && <View style={tailwind("items-center")}>
                          <FormInput placeholder="Dosage"   onChangeText={handleDoseChange} />
                          <CaracCls dateD={dateD} dateF={dateF} setDateD={setDateD} setDateF={setDateF} onSubmit={() => { handleSubmitCarac("Lopinavir_ritonavir"); setLop(!lop) }} />
                      </View>
                  }
                     <TouchableOpacity onPress={() => setChlo(!chlo)}>
                      <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>Chloroquine phosphate</Text>
                  </TouchableOpacity>
                  {
                      chlo == true && <View style={tailwind("items-center")}>
                          <FormInput placeholder="Dosage"   onChangeText={handleDoseChange} />
                          <CaracCls dateD={dateD} dateF={dateF} setDateD={setDateD} setDateF={setDateF} onSubmit={() => { handleSubmitCarac("Chloroquine_phosphate"); setChlo(!chlo) }} />
                      </View>
                  }
                    <TouchableOpacity onPress={() => setHydro(!hydro)}>
                      <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>Hydroxy-Chloroquine</Text>
                  </TouchableOpacity>
                  {
                      hydro == true && <View style={tailwind("items-center")}>
                          <FormInput placeholder="Dosage"   onChangeText={handleDoseChange} />
                          <CaracCls dateD={dateD} dateF={dateF} setDateD={setDateD} setDateF={setDateF} onSubmit={() => { handleSubmitCarac("Hydroxy_Chloroquine"); setHydro(!hydro) }} />
                      </View>
                  }
                    <TouchableOpacity onPress={() => setAzith(!azith)}>
                      <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>Azithromycine</Text>
                  </TouchableOpacity>
                  {
                      azith == true && <View style={tailwind("items-center")}>
                          <FormInput placeholder="Dosage"   onChangeText={handleDoseChange} />
                          <CaracCls dateD={dateD} dateF={dateF} setDateD={setDateD} setDateF={setDateF} onSubmit={() => { handleSubmitCarac("Azithromycine"); setAzith(!azith) }} />
                      </View>
                  }
                    <TouchableOpacity onPress={() => setRem(!rem)}>
                      <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>Remdesivir</Text>
                  </TouchableOpacity>
                  {
                      rem == true && <View style={tailwind("items-center")}>
                          <FormInput placeholder="Dosage"   onChangeText={handleDoseChange} />
                          <CaracCls dateD={dateD} dateF={dateF} setDateD={setDateD} setDateF={setDateF} onSubmit={() => { handleSubmitCarac("Remdesivir"); setRem(!rem) }} />
                      </View>
                  }
                    <TouchableOpacity onPress={() => setOd(!od)}>
                      <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>O2</Text>
                  </TouchableOpacity>
                  {
                      od == true && <View style={tailwind("items-center")}>
                          <FormInput placeholder="Dosage"   onChangeText={handleDoseChange} />
                          <CaracCls dateD={dateD} dateF={dateF} setDateD={setDateD} setDateF={setDateF} onSubmit={() => { handleSubmitCarac("O2"); setOd(!od) }} />
                      </View>
                  }
                     <TouchableOpacity onPress={() => setHfnc(!hfnc)}>
                      <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>HFNC</Text>
                  </TouchableOpacity>
                  {
                      hfnc == true && <View style={tailwind("items-center")}>
                          <FormInput placeholder="Dosage"   onChangeText={handleDoseChange} />
                          <CaracCls dateD={dateD} dateF={dateF} setDateD={setDateD} setDateF={setDateF} onSubmit={() => { handleSubmitCarac("HFNC"); setHfnc(!hfnc) }} />
                      </View>
                  }
                   <TouchableOpacity onPress={() => setCpap(!cpap)}>
                      <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>CPAP</Text>
                  </TouchableOpacity>
                  {
                      cpap == true && <View style={tailwind("items-center")}>
                          <FormInput placeholder="Dosage"   onChangeText={handleDoseChange} />
                          <CaracCls dateD={dateD} dateF={dateF} setDateD={setDateD} setDateF={setDateF} onSubmit={() => { handleSubmitCarac("CPAP"); setCpap(!cpap) }} />
                      </View>
                  }
                   <TouchableOpacity onPress={() => setVni(!vni)}>
                      <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>VNI</Text>
                  </TouchableOpacity>
                  {
                      vni == true && <View style={tailwind("items-center")}>
                          <FormInput placeholder="Dosage"   onChangeText={handleDoseChange} />
                          <CaracCls dateD={dateD} dateF={dateF} setDateD={setDateD} setDateF={setDateF} onSubmit={() => { handleSubmitCarac("VNI"); setVni(!vni) }} />
                      </View>
                  }

                  <TouchableOpacity onPress={() => setVmi(!vmi)}>
                      <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>VMI</Text>
                  </TouchableOpacity>
                  {
                      vmi == true && <View style={tailwind("items-center")}>
                          <FormInput placeholder="Dosage"   onChangeText={handleDoseChange} />
                          <CaracCls dateD={dateD} dateF={dateF} setDateD={setDateD} setDateF={setDateF} onSubmit={() => { handleSubmitCarac("VMI"); setVmi(!vmi) }} />
                      </View>
                  }
                  <TouchableOpacity onPress={() => setPara(!para)}>
                      <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>Paracetamol</Text>
                  </TouchableOpacity>
                  {
                      para == true && <View style={tailwind("items-center")}>
                          <FormInput placeholder="Dosage"   onChangeText={handleDoseChange} />
                          <CaracCls dateD={dateD} dateF={dateF} setDateD={setDateD} setDateF={setDateF} onSubmit={() => { handleSubmitCarac("Paracetamol"); setPara(!para) }} />
                      </View>
                  }
                  <TouchableOpacity onPress={() => setAnti(!anti)}>
                      <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>Anti coagulant</Text>
                  </TouchableOpacity>
                  {
                      anti == true && <View style={tailwind("items-center")}>
                          <FormInput placeholder="Dosage"   onChangeText={handleDoseChange} />
                          <CaracCls dateD={dateD} dateF={dateF} setDateD={setDateD} setDateF={setDateF} onSubmit={() => { handleSubmitCarac("Anti_coagulant"); setAnti(!anti) }} />
                      </View>
                  }
                  <TouchableOpacity onPress={() => setHdo(!hdo)}>
                      <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>H2O</Text>
                  </TouchableOpacity>
                  {
                      hdo == true && <View style={tailwind("items-center")}>
                          <FormInput placeholder="Dosage"   onChangeText={handleDoseChange} />
                          <CaracCls dateD={dateD} dateF={dateF} setDateD={setDateD} setDateF={setDateF} onSubmit={() => { handleSubmitCarac("H2O"); setHdo(!hdo) }} />
                      </View>
                  }
                   <TouchableOpacity onPress={() => setAdo(!ado)}>
                      <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>ADO</Text>
                  </TouchableOpacity>
                  {
                      ado == true && <View style={tailwind("items-center")}>
                          <FormInput placeholder="Dosage"   onChangeText={handleDoseChange} />
                          <CaracCls dateD={dateD} dateF={dateF} setDateD={setDateD} setDateF={setDateF} onSubmit={() => { handleSubmitCarac("ADO"); setAdo(!ado) }} />
                      </View>
                  }
                   <TouchableOpacity onPress={() => setinsul(!insul)}>
                      <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>Insulinotherapie</Text>
                  </TouchableOpacity>
                  {
                      insul == true && <View style={tailwind("items-center")}>
                          <FormInput placeholder="Dosage"   onChangeText={handleDoseChange} />
                          <CaracCls dateD={dateD} dateF={dateF} setDateD={setDateD} setDateF={setDateF} onSubmit={() => { handleSubmitCarac("Insulinotherapie"); setinsul(!insul) }} />
                      </View>
                  }
                  <TouchableOpacity onPress={() => setNebC(!nebC)}>
                      <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>Nebulisation corticoides</Text>
                  </TouchableOpacity>
                  {
                      nebC == true && <View style={tailwind("items-center")}>
                          <FormInput placeholder="Dosage"   onChangeText={handleDoseChange} />
                          <CaracCls dateD={dateD} dateF={dateF} setDateD={setDateD} setDateF={setDateF} onSubmit={() => { handleSubmitCarac("Nebulisation_corticoides"); setNebC(!nebC) }} />
                      </View>
                  }
                   <TouchableOpacity onPress={() => setNebB(!nebB)}>
                      <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>Nebulisation bronchodilatateurs</Text>
                  </TouchableOpacity>
                  {
                      nebB == true && <View style={tailwind("items-center")}>
                          <FormInput placeholder="Dosage"   onChangeText={handleDoseChange} />
                          <CaracCls dateD={dateD} dateF={dateF} setDateD={setDateD} setDateF={setDateF} onSubmit={() => { handleSubmitCarac("Nebulisation_bronchodilatateurs"); setNebB(!nebB) }} />
                      </View>
                  }
                   <TouchableOpacity onPress={() => setAmoxi(!amoxi)}>
                      <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>Amoxicilline/ Acide clavulanique</Text>
                  </TouchableOpacity>
                  {
                      amoxi == true && <View style={tailwind("items-center")}>
                          <FormInput placeholder="Dosage"   onChangeText={handleDoseChange} />
                          <CaracCls dateD={dateD} dateF={dateF} setDateD={setDateD} setDateF={setDateF} onSubmit={() => { handleSubmitCarac("Amoxicilline"); setAmoxi(!amoxi) }} />
                      </View>
                  }
                    <TouchableOpacity onPress={() => setCefo(!cefo)}>
                      <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>Cefotaxime</Text>
                  </TouchableOpacity>
                  {
                      cefo == true && <View style={tailwind("items-center")}>
                          <FormInput placeholder="Dosage"   onChangeText={handleDoseChange} />
                          <CaracCls dateD={dateD} dateF={dateF} setDateD={setDateD} setDateF={setDateF} onSubmit={() => { handleSubmitCarac("Cefotaxime"); setCefo(!cefo) }} />
                      </View>
                  }
                     <TouchableOpacity onPress={() => setCeft(!ceft)}>
                      <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>Ceftriaxone</Text>
                  </TouchableOpacity>
                  {
                      ceft == true && <View style={tailwind("items-center")}>
                          <FormInput placeholder="Dosage"   onChangeText={handleDoseChange} />
                          <CaracCls dateD={dateD} dateF={dateF} setDateD={setDateD} setDateF={setDateF} onSubmit={() => { handleSubmitCarac("Ceftriaxone"); setCeft(!ceft) }} />
                      </View>
                  }
                    <TouchableOpacity onPress={() => setAutreA(!autreA)}>
                      <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>Autre</Text>
                  </TouchableOpacity>
                  {
                      autreA == true && <View style={tailwind("items-center")}>
                          <FormInput placeholder="Dosage"   onChangeText={handleDoseChange} />
                          <FormInput placeholder="Autre"   onChangeText={handleAutreChange} />
                          <CaracCls dateD={dateD} dateF={dateF} setDateD={setDateD} setDateF={setDateF} onSubmit={() => { handleSubmitCarac("Autre"); setAutreA(!autreA) }} />
                      </View>
                  }
              </View>

          }
          <View style={tailwind("items-center pb-8")}>
              <View style={styles.row}>
                  <FormButton title="Retour" onPress={() => { props.navigation.navigate("examBio1") }} />
                  {trait === false && <FormButton title="Enregistrer" onPress={() => { handleSubmitCarac(""); props.navigation.navigate("Evolution1") }} />}
              </View>
              <FormButton title="Pass" onPress={() => { props.navigation.navigate("Evolution1") }} />

          </View>
          </Animatable.View>
    </View>
    </ScrollView>
  );
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

  const mapStateToProps = (state) => ({
    patientList: state.medicalService.patientList,
    traitmentList: state.medicalService.traitmentList
  });
  const mapActionToProps = {
    getTraitment: actions.getTraitment,
    addTraitment: actions.addTraitment
  
  };
export default connect(mapStateToProps, mapActionToProps)(Traitement1);
