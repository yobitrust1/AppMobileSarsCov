import { StatusBar } from 'expo-status-bar';
import React , { useState, useEffect }  from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions,ScrollView, TouchableOpacity} from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import ButtonGradient from '../Form/ButtonGradient';
import 'localstorage-polyfill';
import { connect } from "react-redux";
import tailwind from 'tailwind-rn';
import * as actions from "../../Actions/medicalService";
const { width, height } = Dimensions.get('window')

const Login = (props) => {
  useEffect(() => {


  }, [props.loggedUser])

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const handleUsernameChange = (text) => {
    setUsername(text)

  }

  const handlePasswordChange = (text) => {
    setPassword(text)

  }

  const handleSubmit = (e) => {
    const values = {
      username: username,
      password: password
    }
    console.log(values)
    e.preventDefault();
    props.login(values);
    console.log("loggedUser")

  }




  function SvgTop() {
    return (
      <Svg
      width={500}
      height={324}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M297.871 315.826c73.405 13.896 165.338-13.964 202.129-29.63V230H1.326v63.5c69.15-42.913 204.789 4.957 296.545 22.326z"
        fill="url(#prefix__paint0_linear_103:6)"
        fillOpacity={0.5}
      />
      <Path
        d="M237.716 308.627C110.226 338.066 30.987 318.618 0 304.77V0h500v304.77c-43.161-12.266-134.794-25.581-262.284 3.857z"
        fill="url(#prefix__paint1_linear_103:6)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_103:6"
          x1={492.715}
          y1={231.205}
          x2={480.057}
          y2={364.215}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#009c5e" />
          <Stop offset={1} stopColor="#00d4ff" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear_103:6"
          x1={7.304}
          y1={4.155}
          x2={144.016}
          y2={422.041}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#009c5e" />
          <Stop offset={1} stopColor="#00d4ff" />
        </LinearGradient>
      </Defs>
    </Svg>
    )
  }
  return (<ScrollView  >
    <View style={styles.mainContainer}>
      {(props.loggedUser !== null) && typeof (props.loggedUser) !== 'string' && (props.navigation.navigate("Home"))}
      <View style={styles.containerSVG}>
        <SvgTop/>
      </View>
      <View style={styles.container}>
        <Text style={styles.titulo}>Plate-forme Sars-Cov2 et autre maladie infectieuse</Text>
        <Text style={styles.subTitle}>Connectez-vous ?? votre compte</Text>
        <TextInput 
          placeholder="jhon@email.com"
          style={styles.textInput}
          onChangeText={handleUsernameChange}
        />
        <TextInput 
          placeholder="password"
          style={styles.textInput}
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
          isPassword='true'
        />
        <Text style={styles.forgotPassword}></Text>
        <Text style={tailwind('text-red-500')}>
          {typeof (props.loggedUser) === 'string' && props.loggedUser}

        </Text>
        <ButtonGradient onPress={handleSubmit}/>
        <Text style={styles.forgotPassword}></Text>
        <StatusBar style="auto" />
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSVG: {
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#34434D',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    color: 'gray',
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  forgotPassword: {
    fontSize: 14,
    color: 'gray',
    marginTop: 20
  },
  button: {

  },
  
});
const mapStateToProps = (state) => ({
  loggedUser: state.medicalService.loggedUser,
});
const mapActionToProps = {
  login: actions.login,
};
export default connect(mapStateToProps, mapActionToProps)(Login);