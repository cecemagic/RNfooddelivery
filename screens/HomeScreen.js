import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Footer from '../components/Footer'

export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'space-between', marginTop: 10 }}>
      <View><Image source={require('../assets/images/hamburgerLogin.png')} style={{alignSelf:'center', width:'70%', resizeMode:'contain'}} /></View>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={[styles.button, {backgroundColor: '#D35400',}]}><Text style={styles.SigninText}>Sign In</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('SignUp')} style={styles.button}><Text style={styles.SignupText}>Sign Up</Text></TouchableOpacity>
      </View>
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ECF0F1',
    width: 354,
    height: 50,
    borderRadius: 30,
    alignSelf: 'center',
    marginVertical: 10,
  },
  SigninText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 10,

  },
  SignupText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 10
  },

})