

import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';



const App: () => React$Node = () => {
  var[calculated, setCalculated] = useState("");
  const calculate = (val) =>
  {
    
    calculated = calculated + val;
    setCalculated(calculated);

  };

  const result = () =>
  {

    setCalculated((eval(calculated)));

  };
 
  const remove = () =>
  {
    toString(calculated);
    setCalculated(calculated.substring(0, (calculated.length-1)));

  };

  

  return (
    <View style={{height:560}}>

    <TextInput id="textArea" style={{height:100,  marginTop:100, backgroundColor:'red',  textAlign:"right", paddingTop:25, fontSize:50}}>{calculated}</TextInput>
      <View style={{height:360 }}>
      <View style={{flex:0.25, flexDirection:'row'}}>
    
      <TouchableOpacity onPress ={ () => calculate('7')} style={styles.button}><Text style={{fontSize:55}}>7</Text></TouchableOpacity>
      <TouchableOpacity onPress ={ () => calculate('8')} style={styles.button}><Text style={{fontSize:55}}>8</Text></TouchableOpacity>
      <TouchableOpacity onPress ={ () => calculate('9')} style={styles.button}><Text style={{fontSize:55}}>9</Text></TouchableOpacity>
      <TouchableOpacity onPress ={ () => remove()} style={{backgroundColor:'#555', flex:0.25, margin:5, alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:55, paddingBottom:25}}>←</Text></TouchableOpacity>
      </View>
  
      <View style={{flex:0.25, flexDirection:'row'}}>
      <TouchableOpacity onPress ={ () => calculate('4')} style={styles.button}><Text style={{fontSize:55}}>4</Text></TouchableOpacity>
      <TouchableOpacity onPress ={ () => calculate('5')} style={styles.button}><Text style={{fontSize:55}}>5</Text></TouchableOpacity>
      <TouchableOpacity onPress ={ () => calculate('6')} style={styles.button}><Text style={{fontSize:55}}>6</Text></TouchableOpacity>
      <TouchableOpacity onPress ={ () => calculate('*')} style={{backgroundColor:'#555', flex:0.25, margin:5, alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:55}}>*</Text></TouchableOpacity>
  
      </View>
  
  
  
      <View style={{flex:0.25, flexDirection:'row'}}>
      <TouchableOpacity onPress ={ () => calculate('1')} style={styles.button}><Text style={{fontSize:55}}>1</Text></TouchableOpacity>
      <TouchableOpacity onPress ={ () => calculate('2')} style={styles.button}><Text style={{fontSize:55}}>2</Text></TouchableOpacity>
      <TouchableOpacity onPress ={ () => calculate('3')} style={styles.button}><Text style={{fontSize:55}}>3</Text></TouchableOpacity>
      <TouchableOpacity onPress ={ () => calculate('-')} style={{backgroundColor:'#555', flex:0.25, margin:5, alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:55}}>-</Text></TouchableOpacity>
    
      </View>
      <View style={{flex:0.25, flexDirection:'row'}}>
      <TouchableOpacity onPress ={ () => calculate('0')} style={styles.button}><Text style={{fontSize:55}}>0</Text></TouchableOpacity>
      <TouchableOpacity onPress ={ () => calculate('.')} style={{backgroundColor:'#789', flex:0.25, margin:5, alignItems:'center', justifyContent:'flex-end'}}><Text style={{fontSize:55}}>.</Text></TouchableOpacity>
      <TouchableOpacity onPress ={ () => calculate('+')} style={{backgroundColor:'#555', flex:0.25, margin:5, alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:55}}>+</Text></TouchableOpacity>
      <TouchableOpacity onPress ={ () => result()} style={{backgroundColor:'#555', flex:0.25, margin:5, alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:55}}>=</Text></TouchableOpacity>
        
        </View> 
      
  
  
  
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
 button : {
    backgroundColor:'#789', 
    flex:0.25, 
    margin:5, 
    alignItems:'center', 
    justifyContent:'center'}

});


export default App;
