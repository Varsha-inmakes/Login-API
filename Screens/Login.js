import { View, Text, TextInput, Button, StyleSheet,TouchableHighlight, Alert } from 'react-native'
import React, { useState } from 'react'

export default function Login({navigation}) {
  const[emailorphonenumber, setemailorphonenumber] = useState(null);
  const [password, setpassword] = useState(null);


  Login =()=>{
    if(emailorphonenumber && password){
      fetch('https://api.oopacks.com/api/test/login',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emailorphonenumber: emailorphonenumber,
          password: password
        })
      })
      .then((response) => response.json())
      .then((response) => {
        console.log('Response Login',response)
        Alert.alert('Login successfully')
      })
      .catch((error)=> {
        console.log('Login error',error)
      })
    
    } else {
      console.log('Login error')
      Alert.alert('username or password incorrect')
    }
    
  }

  return (
    <View style={styles.container}>
    <View style={{width:'100%',height:'20%',alignItems:'center',justifyContent:'center'}}>
      <Text style={{color:'#ffff',fontSize:30,alignItems:'center',justifyContent:'center'}}>OOPACKS</Text>
    </View>
    <View style={styles.View1}>
    <Text style={{color:'#000',fontSize:25,alignItems:'center',marginBottom:55}}>Login</Text>
      <TextInput 
      placeholder="Email or Mobile Number"
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
     
    </View>
      <TouchableHighlight onPress={()=>Login()} style={{width:'100%',height:'15%',backgroundColor:'#f2f2f2',alignItems:'center'}}>
        <View style={{backgroundColor:'#000',height:45,width:'80%',alignItems:'center',justifyContent:'center',borderRadius:5}}>
          <Text style={{color:'#fff',fontSize:15}}>Login</Text>
        </View>
      </TouchableHighlight>
      <View style={{width:'100%',height:'5%',backgroundColor:'#f2f2f2',justifyContent:'center',alignItems:'center'}}>
        <Text onPress ={()=>navigation.navigate('Register')} style={{color:'#000'}}>You have a account? Signup</Text>
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
