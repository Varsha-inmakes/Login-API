
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Register from './Register';
import Login from './Login';


const Stack = createStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Register' component={Register}/>
        </Stack.Navigator>
    )
}
export default function Navigation() {
  return (
  <NavigationContainer>
      <MyStack/>
  </NavigationContainer>
  )
}