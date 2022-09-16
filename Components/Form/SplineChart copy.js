import { StatusBar } from 'expo-status-bar';
// import React in our code
import React from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

//import React Native chart Kit for different kind of Chart
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
const Dash1 = (props) => {
  const formatYmd = date => date().toISOString().slice(0, 10);
  var stat = {
    dataLine: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
        label: y,
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(225, 204,230, .3)",
        borderColor: "rgb(205, 130, 158)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(205, 130,1 58)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
      ]
        
      
    }
  };
const myArray= props.data;


if(myArray!=null)
  {var y=props.y;
    console.log("y");
      
    var sortedActivities = myArray.sort((a, b) => Date.parse(a.datePr) - Date.parse(b.datePr));
    var finalArray = myArray.map(function (obj) {
     
      return obj.datePr;
      });
      var finalArray1;
      if(y=="gb")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.gb;
      });}

      if(y=="lym")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.lym;
      });}
      if(y=="hb")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.hb;
      });}
      if(y=="ht")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.ht;
      });}
      if(y=="pla")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.pla;
      });}
      if(y=="nak")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.nak;
      });}
      if(y=="nak1")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.nak1;
      });}
      if(y=="nakur")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.nakur;
      });}
      if(y=="nakur1")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.nakur1;
      });}
      if(y=="ph")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.ph;
      });}
      if(y=="pao2")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.pao2;
      });}
      if(y=="paco2")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.paco2;
      });}
      if(y=="hco3")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.hco3;
      });}
      if(y=="sao2")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.sao2;
      });}
      if(y=="creat")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.creat;
      });}
      if(y=="claircreat")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.claircreat;
      });}
      if(y=="uree")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.uree;
      });}
      if(y=="biliru")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.biliru;
      });}
      if(y=="biliru1")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.biliru1;
      });}
      if(y=="alat")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.alat;
      });}
      if(y=="asat")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.asat;
      });}
      if(y=="tp")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.tp;
      });}
      if(y=="facteurv")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.facteurv;
      });}
      if(y=="fibrinogene")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.fibrinogene;
      });}
      if(y=="cpk_mb")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.cpk_mb;
      });}
      if(y=="troponine")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.troponine;
      });}
      if(y=="pro_bnp")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.pro_bnp;
      });}
      if(y=="albumi")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.albumi;
      });}
      if(y=="d_dimere")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.d_dimere;
      });}
      if(y=="ldh")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.ldh;
      });}
      if(y=="crp")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.crp;
      });}
      if(y=="procal")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.procal;
      });}
      if(y=="ferri")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.ferri;
      });}
      if(y=="paths")
      {console.log(y);
         finalArray1 = myArray.map(function (obj) {
      return obj.paths;
      });}



      var i=0;
      for (var value of finalArray) {
        var d = new Date(value);
        value=d.toLocaleDateString();
        
        finalArray[i]=value;
        i++;
      }
      console.log("date");
        console.log(finalArray);
        console.log("label");
        console.log(finalArray1);
  }
  return (
    <>
    <Text style={styles.header}>Bezier Line Chart</Text>
    <LineChart
      data={{
        labels: stat.dataLine.labels,
        datasets: [
          {
            data: stat.dataLine.datasets[0].data,
          },
        ],
      }}
      width={Dimensions.get('window').width - 16} // from react-native
      height={220}
      yAxisLabel={'Rs'}
      chartConfig={{
        backgroundColor: '#1cc910',
        backgroundGradientFrom: '#eff3ff',
        backgroundGradientTo: '#efefef',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 16,
        },
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  </>
  );
};

export default Dash1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
});
