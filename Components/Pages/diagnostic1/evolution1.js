import { 
  View, 
  Text, 
  ScrollView, 
  TextInput,
  Platform,
  StyleSheet ,
  StatusBar,
  TouchableOpacity,
  Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
//import 'localstorage-polyfill';
import RadioGroup from 'react-native-radio-buttons-group';
import DateTimePickerModal from "react-native-modal-datetime-picker";
//import DatePicker from 'react-native-datepicker'
import FormInput from '../../Form/FormInput';
import FormInput2 from '../../Form/FormInput2';
import DatePicker from 'react-native-datepicker'
import {LinearGradient} from 'expo-linear-gradient';





const Evolution1 = (props) => {
  const { colors } = useTheme();
  //dateTime picker
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    //date.setTime(date.getTime()-date.getTimezoneOffset()*60*1000)
    setTime(date)
    hideDatePicker();
  };

  const [category, setCategory] = useState()
  const [type, setType] = useState()
  const [time, setTime] = useState()
  const [value, setValue] = useState()
  const [validation, setValidation] = useState()

  const [dateD, setDateD] = useState()
  const [dateF, setDateF] = useState()
  const [saps2, setSaps2] = useState()
  const [apache2, setApache2] = useState()
  const [sofa, setSofa] = useState()
  const [dateS, setDateS] = useState()
  const [typeS, setTypeS] = useState()
  const [dateH, setDateH] = useState()
  const [hopital, setHopital] = useState()
  const [service, setService] = useState()
  const [ville, setVille] = useState()
  const [lieu, setLieu] = useState()

  const [hospi, setHospi] = useState()


  var handleHospiChange = (data) => {
    if (data[0].selected) setHospi(true)
    if (data[1].selected) setHospi(false)
  }

  var handleTypeSChange = (data) => {
    var i;
    for (i = 0; i < data.length; i++) {
      if (data[i].selected) { setTypeS(data[i].label) }

    }

  }

  var handleValueCb = (data) => {
    if (data[0].selected)
      setValue(1.0)
    if (data[1].selected)
      setValue(0.0)
  }

  var handleEvolutionType = (data) => {
    if (data[0].selected) {
      setType("IHH")
      setTypeS("")

    }
    if (data[1].selected) {
      setType("Ho")
      setTypeS("Transfert inter-hopital")
    }

  }






  var handleTypeChange = (data) => {
    var i;
    for (i = 0; i < data.length; i++) {
      if (data[i].selected) { setType(data[i].label) }

    }


  }

  var handleSubmit = () => {
    if (type === "Température" && (value > 43 || value < 30)) {
      setValidation("La temperature doit etre comprise entre 30et 43 °C !")
      return
    }

    if (type === "SaO2" && (value > 100 || value < 0)) {
      setValidation("Le pourcentage de SaO2  doit etre compris entre 0 % et 100 % !");
      return
    }


    if (type === "FR" && (value > 250 || value < 0)) {
      setValidation("La valuer du FR doit etre comprise entre 0 et 250 C/min !");
      return
    }

    if (type === "FC" && (value > 150 || value < 0)) {
      setValidation("La valuer du FC doit etre comprise entre 0 et 150 C/min !");
      return
    }
    if (type === "Score de glasgow" && (value > 15 || value < 0)) {
      setValidation("Le score de Glasgow doit etre entre 0 et 15 !");
      return
    }
    if (category === "USI") {
      if (dateD === undefined) { setValidation("La date du transfert au USI est obligatoire !"); return; }
      if (saps2 === undefined) { setValidation("SAPS2 est obligatoire"); return; }
      if (saps2 > 194) { setValidation("SAPS2 doit etre compris entre 0 et 194 "); return; }
      if (apache2 === undefined) { setValidation("APACHE2 est obligatoire !"); return }
      if (apache2 > 74) { setValidation("APACHE 2 doit etre compris entre 0 et 74"); return }
      if (sofa > 24) { setValidation("SOFA doit etre compris entre 0 et 24"); return }

    }

    if (category === "AssResp") {
      if (dateD === undefined) { setValidation("La date de début est obligatoire!"); return; }

    }
    if(category ==="Evolution"){
      if(dateS === undefined) {setValidation("La date de sortie est obligatoire");return}
    }



    var values = {
      time: time,
      type: type,
      category: category,
      value: value,
      dateD: dateD,
      dateF: dateF,
      apache2: apache2,
      saps2: saps2,
      sofa: sofa,
      dateS: dateS,
      typeS: typeS,
      dateH: dateH,
      hopital: hopital,
      service: service,
      ville: ville,
      lieu: lieu

    }
    console.log(values)
    setCategory()
    setTime()
    setValue()
    setDateF()
    setDateD()
    setSofa()
    setApache2()
    setSaps2()
    props.addEvolution(props.patientList["cin"], values)

  }

  return (
<ScrollView  >
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Evolution</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >



      <View style={tailwind("px-8 py-8 ")}>
        <TouchableOpacity onPress={() => { setCategory("evaluValues"); setType("Température"); setValidation() }} >
          <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>
            Evolution quotidienne
           </Text>
        </TouchableOpacity>
        {
          category === "evaluValues" && <View style={tailwind("items-center")}>
            <RadioGroup radioButtons={[

              {
                label: "Température",
                color: '#51d1c5',
              },
              {
                label: "SaO2",
                color: '#51d1c5',
              },
              {
                label: "Besoin en O2",
                color: '#51d1c5',
              },
              {
                label: "TA",
                color: '#51d1c5',
              },
              {
                label: "FR",
                color: '#51d1c5',
              },
              {
                label: "Signes de lutte",
                color: '#51d1c5',
              },
              {
                label: "FC",
                color: '#51d1c5',
              },
              {
                label: "Froideur",
                color: '#51d1c5',
              },
              {
                label: "Marbrures",
                color: '#51d1c5',
              },
              {
                label: "Angoisse/Agitation",
                color: '#51d1c5',
              },
              {
                label: "Score de glasgow",
                color: '#51d1c5',
              },


            ]}
              //flexDirection='row'
              style={tailwind('')}
              onPress={handleTypeChange}
            />
            <Text style={tailwind("text-red-500 font-bold pt-4 text-center")}>{validation}</Text>
            {(type === "Température" || type === "SaO2" || type === "Besoin en O2" || type === "TA" || type === "FR" || type === "FC" || type === "Score de glasgow") &&
              <FormInput placeholder={type} type="decimal-pad" onChangeText={setValue} />
            }
            {
              (type === "Signes de lutte" || type === "Froideur" || type === "Marbrures" || type === "Angoisse/Agitation") &&
              <View style={styles.row}>
                <Text style={tailwind("py-1 pr-4")}>{type + "?"}</Text>
                <RadioGroup radioButtons={[

                  {
                    label: "Oui",
                    color: '#51d1c5',
                  },
                  {
                    label: "Non",
                    color: '#51d1c5',
                  },


                ]}
                  flexDirection='row'
                  style={tailwind('')}
                  onPress={handleValueCb}
                />
              </View>
            }
            <FormButton title={time !== undefined && time.toString().substr(0, 21) || "Choisir la date & l'horaire"} onPress={showDatePicker} />
            <DateTimePickerModal

              isVisible={isDatePickerVisible}
              mode="datetime"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              testID="dateTimePicker"

            />



            <FormButton title="Enregistrer" onPress={handleSubmit} />
          </View>

        }
        <TouchableOpacity onPress={() => { setCategory("USI"); setValidation(); setType("IRA grave (3)"); }}>
          <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>
            Transfert en USI
           </Text>
        </TouchableOpacity>
        {
          category === "USI" && <View >
            <Text style={tailwind("text-red-500 font-bold p-4 text-center")}>{validation}</Text>



            <Text style={tailwind("text-center text-gray-700 p-2 text-center")}>Choisir la méthode de transfert ?</Text>
            <RadioGroup radioButtons={[

              {
                label: "IRA grave (3)",
                color: '#51d1c5',
              },
              {
                label: "Sepsis/Choc septique",
                color: '#51d1c5',
              },

            ]}
              //flexDirection='row'
              style={tailwind('')}
              onPress={handleTypeChange}
            />

            <View style={tailwind("items-center")}>
              <DatePicker
                style={tailwind("rounded-md text-red-500 border-solid w-3/5 border border-teal-500 m-2 ")}
                mode="date"
                placeholder={(dateD != undefined && dateD) || "Date début"}
                format="YYYY-MM-DD"
                minDate="1920-05-01"
                maxDate={new Date()}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    left: 0,
                    top: 0,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 0,
                    borderWidth: 0
                  }

                }}
                onDateChange={(date) => { setDateD(date) }}
              />

              <DatePicker
                style={tailwind("rounded-md text-red-500 border-solid w-3/5 border border-teal-500 m-2")}
                mode="date"
                placeholder={(dateF != undefined && dateF) || "Date fin"}
                format="YYYY-MM-DD"
                minDate="1920-05-01"
                maxDate={new Date()}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    left: 0,
                    top: 0,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 0,
                    borderWidth: 0
                  }

                }}
                onDateChange={(date) => { setDateF(date) }}
              />

              <FormInput placeholder={"SAPS 2"} onChangeText={setSaps2} type="decimal-pad" maxLength={Number("8")} />
              <FormInput placeholder={"APACHE 2"} onChangeText={setApache2} type="decimal-pad" maxLength={Number("8")} />
              <FormInput placeholder={"SOFA"} onChangeText={setSofa} type="decimal-pad" maxLength={Number("8")} />
              <FormButton title="Enregistrer" onPress={handleSubmit} />
            </View>


          </View>

        }
        <TouchableOpacity onPress={() => { setCategory("AssResp"); setValidation() }}>
          <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>
            Assistance respiratoire
           </Text>
        </TouchableOpacity>
        {
          category === "AssResp" && <View >
            <Text style={tailwind("text-red-500 font-bold p-4 text-center")}>{validation}</Text>



            <Text style={tailwind("text-center text-gray-700 p-2 text-center")}>Choisir la méthode de transfert ?</Text>
            <RadioGroup radioButtons={[

              {
                label: "HFNC / CPAP min 12h",
                color: '#51d1c5',
              },
              {
                label: "VNI min 12h",
                color: '#51d1c5',
              },
              {
                label: "VMI",
                color: '#51d1c5',
              },
              {
                label: "DV",
                color: '#51d1c5',
              },
              {
                label: "Protective ventilation",
                color: '#51d1c5',
              },
              {
                label: "Ventilation free days",
                color: '#51d1c5',
              },
              {
                label: "Device free days",
                color: '#51d1c5',
              },

            ]}
              //flexDirection='row'
              style={tailwind('')}
              onPress={handleTypeChange}
            />

            <View style={tailwind("items-center")}>
              <DatePicker
                style={tailwind("rounded-md text-red-500 border-solid w-3/5 border border-teal-500 m-2 ")}
                mode="date"
                placeholder={(dateD != undefined && dateD) || "Date début"}
                format="YYYY-MM-DD"
                minDate="1920-05-01"
                maxDate={new Date()}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    left: 0,
                    top: 0,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 0,
                    borderWidth: 0
                  }

                }}
                onDateChange={(date) => { setDateD(date) }}
              />

              <DatePicker
                style={tailwind("rounded-md text-red-500 border-solid w-3/5 border border-teal-500 m-2")}
                mode="date"
                placeholder={(dateF != undefined && dateF) || "Date fin"}
                format="YYYY-MM-DD"
                minDate="1920-05-01"
                maxDate={new Date()}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    left: 0,
                    top: 0,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 0,
                    borderWidth: 0
                  }

                }}
                onDateChange={(date) => { setDateF(date) }}
              />


              <FormButton title="Enregistrer" onPress={handleSubmit} />
            </View>


          </View>

        }
        <TouchableOpacity onPress={() => { setCategory("Evolution"); setValidation(); setType("IHH"); setHospi(true) }}>
          <Text style={tailwind('text-teal-500 font-bold text-base py-3 border border-solid border-teal-500 rounded-lg px-3 mt-4 mb-4')}>
            Evolution de l'isolement/hospitalisation
           </Text>
        </TouchableOpacity>
        {
          category === "Evolution" && <View >
                 <Text style={tailwind("text-red-500 font-bold p-4 text-center")}>{validation}</Text>

            <RadioGroup radioButtons={[

              {
                label: "Evolution de l'isolement hors hopital",
                color: '#51d1c5',
              },
              {
                label: "Evolution de l'hospitalisation",
                color: '#51d1c5',
              },

            ]}
              //flexDirection='row'
              style={tailwind('')}
              onPress={handleEvolutionType}
            />

            {
              type === "IHH" && <View style={tailwind("")}>
                <View style={tailwind("items-center")}>
                  <DatePicker
                    style={tailwind("rounded-md text-red-500 border-solid w-3/5 border border-teal-500 m-2")}
                    mode="date"
                    placeholder={(dateS != undefined && dateS) || "Date de sortie?"}
                    format="YYYY-MM-DD"
                    minDate="1920-05-01"
                    maxDate={new Date()}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        left: 0,
                        top: 0,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 0,
                        borderWidth: 0
                      }

                    }}
                    onDateChange={(date) => { setDateS(date) }}
                  />

                </View>


                <View style={styles.row}>
                  <Text style={tailwind("text-gray-700 py-2 ")}>Hospitalisé ?</Text>
                  <RadioGroup radioButtons={[

                    {
                      label: "Oui",
                      color: '#51d1c5',
                    },
                    {
                      label: "Non",
                      color: '#51d1c5',
                    },

                  ]}
                    flexDirection='row'
                    style={tailwind('')}
                    onPress={handleHospiChange}
                  />
                </View>
                {
                  hospi === true && <View style={tailwind("items-center")}>
                    <DatePicker
                      style={tailwind("rounded-md text-red-500 border-solid w-3/5 border border-teal-500 m-2")}
                      mode="date"
                      placeholder={(dateH != undefined && dateH) || "Date d'hospitalisation?"}
                      format="YYYY-MM-DD"
                      minDate="1920-05-01"
                      maxDate={new Date()}
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      customStyles={{
                        dateIcon: {
                          left: 0,
                          top: 0,
                          marginLeft: 0
                        },
                        dateInput: {
                          marginLeft: 0,
                          borderWidth: 0
                        }

                      }}
                      onDateChange={(date) => { setDateH(date) }}
                    />
                    <FormInput placeholder="Hopital" onChangeText={setHopital} />
                    <FormInput placeholder="Service" onChangeText={setService} />
                    <FormInput placeholder="Ville" onChangeText={setVille} />
                  </View>
                }
                {
                  hospi === false && <View >

                    <RadioGroup radioButtons={[

                      {
                        label: "Evolution de l'isolement hors hopital",
                        color: '#51d1c5',
                      },
                      {
                        label: "Evolution de l'hospitalisation",
                        color: '#51d1c5',
                      },
                      {
                        label: "Deccés",
                        color: '#51d1c5',
                      },


                    ]}
                      //flexDirection='row'
                      style={tailwind('')}
                      onPress={handleTypeSChange}
                    />



                  </View>
                }
                <View style={tailwind("items-center")}>
                  <FormButton title="Enregistrer" onPress={handleSubmit} />
                </View>

              </View>
            }

            {
              type === "Ho" && <View style={tailwind("items-center")}>
                <DatePicker
                  style={tailwind("rounded-md text-red-500 border-solid w-3/5 border border-teal-500 m-2")}
                  mode="date"
                  placeholder={(dateS != undefined && dateS) || "Date de sortie?"}
                  format="YYYY-MM-DD"
                  minDate="1920-05-01"
                  maxDate={new Date()}
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      left: 0,
                      top: 0,
                      marginLeft: 0
                    },
                    dateInput: {
                      marginLeft: 0,
                      borderWidth: 0
                    }

                  }}
                  onDateChange={(date) => { setDateS(date) }}
                />
                <RadioGroup radioButtons={[

                  {
                    label: "Transfert inter-hopital",
                    color: '#51d1c5',
                  },
                  {
                    label: "Transfert inter-service",
                    color: '#51d1c5',
                  },
                  {
                    label: "Retour à domicile en quarantine",
                    color: '#51d1c5',
                  },
                  {
                    label: "Transfert à domicile sans quarantine",
                    color: '#51d1c5',
                  },
                  {
                    label: "Deccés",
                    color: '#51d1c5',
                  },


                ]}
                  //flexDirection='row'
                  style={tailwind('')}
                  onPress={handleTypeSChange}
                />
                {
                  (typeS === "Transfert inter-hopital" || typeS === "Transfert inter-service") && <FormInput placeholder="Lieu" onChangeText={setLieu} />
                }

                <View style={tailwind("items-center")}>
                  <FormButton title="Enregistrer" onPress={handleSubmit} />
                </View>
              </View>
            }

          </View>

        }

      </View>


      <View style={tailwind("items-center py-8")}>

        <FormButton title="Retour" onPress={() => { props.navigation.navigate("Traitement1") }} />
        <FormButton title="Pass" onPress={() => { props.navigation.navigate("EvaluationFinale1") }} />



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
  evolutionList: state.medicalService.evolutionList
});
const mapActionToProps = {

  addEvolution: actions.addEvolution,
  getEvolution: actions.getEvolution,
};
export default connect(mapStateToProps, mapActionToProps)(Evolution1);
