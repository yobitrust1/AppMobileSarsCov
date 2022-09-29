import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Dimensions 
} from 'react-native';
import WavyHeader from './WavyHeader';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Informations",title1: "générales",title2: "InfosGenerales", image:"https://img.icons8.com/nolan/64/services.png"},
        {id:2, title: "Habitudes",title1: "de vie",title2:"HabitudesDeVie", image:"https://img.icons8.com/nolan/64/external-link.png"} ,
        {id:3, title: "Antécédents",title1: "médicaux",title2:"AntecendentsMedicaux", image:"https://img.icons8.com/nolan/50/share-2.png"} ,
        {id:4, title: "Expositions",title1: "a risque",title2:"Exposition", image:"https://img.icons8.com/nolan/64/synchronize.png"} ,
        {id:5, title: "Diagnostics",title1: "",title2:"DiagnosticDetails", image:"https://img.icons8.com/nolan/64/settings--v1.png"} ,
        {id:6, title: "Retour",title1: "",title2:"SearchPatient", image:"https://img.icons8.com/nolan/64/undo.png"} ,
      ]
    };
  }

  clickEventListener(item) {
    this.props.navigation.navigate(item.title2)
  }


  render() {
    return (<View style={styles.container}><ScrollView>
      <WavyHeader customStyles={styles.svgCurve} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Home</Text>
      </View>
      <View style={styles.container1}>
        
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              
              <View>
                <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
                  <Image style={styles.cardImage} source={{uri:item.image}}/>
                </TouchableOpacity>

                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.title}>{item.title1}</Text>
                  </View>
                </View>
              </View>
            )
          }}/>
      </View></ScrollView></View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
    color: '#333',
    textAlign: 'center',
    marginTop: 35
  },
  container1:{
    flex:1,
    marginTop:40,
    backgroundColor:'#fff',
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#fff",
  },
  listContainer:{
    alignItems:'center'
  },
  /******** card **************/
  card:{
    shadowColor: '#474747',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 20,
    marginHorizontal: 40,
    backgroundColor:"#e2e2e2",
    //flexBasis: '42%',
    width:120,
    height:120,
    borderRadius:60,
    alignItems:'center',
    justifyContent:'center'
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 50,
    width: 50,
    alignSelf:'center'
  },
  title:{
    fontSize:20,
    color:"#696969"
  },
});    
