import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight ,KeyboardAvoidingView, Alert} from 'react-native'
import React, { useState } from 'react'


export default function Registers ({navigation}) {
  const[emailorphonenumber, setemailorphonenumber] = useState(null);
  const [password, setpassword] = useState(null);
  const [firstName, setfirstName] = useState(null);
  const [lastName, setlastName] = useState(null);


  Registers =()=>{
    if(emailorphonenumber && password && firstName && lastName){
      fetch('https://api.oopacks.com/api/test/register',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emailorphonenumber: emailorphonenumber,
          password: password,
          firstName: firstName,
          lastName: lastName
        })
      })
      .then((response) => response.json())
      .then((response) => {
        console.log('Response Register',response)
        Alert.alert('data inserted successfully')
      })
      .catch((error)=> {
        console.log('Login error',error)
      })
      console.log(firstName);
      console.log(lastName);
      console.log(password);
      console.log(emailorphonenumber)
    } else {
      console.log('Register error')
      Alert.alert('Register error')
    }
    
  }

  validation =() =>{
    
  }

  return (
        
    <View style={styles.container}>
    <View style={{width:'100%',height:'20%',alignItems:'center',justifyContent:'center'}}>
      <Text style={{color:'#ffff',fontSize:30,alignItems:'center',justifyContent:'center'}}>Sign Up</Text>
    </View>
    <View style={styles.View1}>
      <TextInput 
      placeholder="Email Id"
      style={styles.input}
      onChangeText={(email) => setemailorphonenumber(email)}
      />
      <TextInput
      placeholder="Password"
      style={styles.input}
      onChangeText={(Tpassword) => setpassword(Tpassword)}
      secureTextEntry
      underlineColorAndroid='#fff'
      />
      <TextInput 
      placeholder="First Name"
      style={styles.input}
      onChangeText={(fname) => setfirstName(fname)}
      />
      <TextInput 
      placeholder="Last Name"
      style={styles.input}
      onChangeText={(lname) => setlastName(lname)}
      />
    </View>
      <TouchableHighlight onPress={()=>Registers()} style={{width:'100%',height:'15%',backgroundColor:'#f2f2f2',alignItems:'center'}}>
        <View style={{backgroundColor:'#000',height:45,width:'80%',alignItems:'center',justifyContent:'center',borderRadius:5}}>
          <Text style={{color:'#fff',fontSize:15}}>Sign Up</Text>
        </View>
      </TouchableHighlight>
      <View style={{width:'100%',height:'5%',backgroundColor:'#f2f2f2',justifyContent:'center',alignItems:'center'}} >
        <Text onPress={()=>navigation.navigate('Login')} style={{color:'#000'}}>You have a account? Login</Text>
      </View>
    </View> 
  )
}
const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#000'
    },
  
    View1:{
      width:'100%',
      height:'50%',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#f2f2f2',
      borderTopLeftRadius:100
    },
    View2:{
      width:'100%',
      height:'30%',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#f2f2f2'
    },
    input: {
      height: 45,
      margin: 15,
      borderWidth: 1,
      padding: 10,
      borderColor:'#fff',
      backgroundColor:'#fff',
      borderRadius:5,
      width:'80%'
    },
    text1:{
      color:'#ffff',
      fontSize:30,
      alignItems:'center',
      justifyContent:'center'
    }
  }
)
