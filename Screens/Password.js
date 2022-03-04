import { View, Text, TextInput,StyleSheet,TouchableHighlight } from 'react-native'
import React, { useState } from 'react'

export default function Password() {
  const [emailorphonenumber , setemailorphonenumber] = useState(null)
  const [Cpassword , setCpassword] = useState(null)

  Password =()=>{
    if(emailorphonenumber && Cpassword ){
      fetch('https://api.oopacks.com/api/test/forgotpassword',{
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emailorphonenumber: emailorphonenumber,
          password: Cpassword,
        })
      })
      .then((response) => response.json())
      .then((response) => {
        console.log('Response Password',response)
        // Alert.alert('Password Updated successfully')
      })
      .catch((error)=> {
        console.log('Login error',error)
      })
      
      console.log(Cpassword);
      console.log(emailorphonenumber)
    } else {
      console.log('Password error')
      
    }
    
  }
  
  return (
         
    <View style={styles.container}>
    <View style={{width:'100%',height:'20%',alignItems:'center',justifyContent:'center'}}>
      <Text style={{color:'#ffff',fontSize:30,alignItems:'center',justifyContent:'center'}}>Sign Up</Text>
    </View>
    <View style={styles.View1}>
      <TextInput 
      placeholder="Email or Mobile number"
      style={styles.input}
      onChangeText={(Email) => setemailorphonenumber(Email)}
      />
      <TextInput
      placeholder="Conform Password"
      style={styles.input}
      onChangeText={(Cpass) => setCpassword(Cpass)}
      secureTextEntry
      underlineColorAndroid='#fff'
      />
     
    </View>
      <TouchableHighlight onPress={()=>Password()} style={{width:'100%',height:'15%',backgroundColor:'#f2f2f2',alignItems:'center'}}>
        <View style={{backgroundColor:'#000',height:45,width:'80%',alignItems:'center',justifyContent:'center',borderRadius:5}}>
          <Text style={{color:'#fff',fontSize:15}}>Sign Up</Text>
        </View>
      </TouchableHighlight>
     
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
