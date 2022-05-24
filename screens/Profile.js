/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Profile({navigation}) {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{marginLeft: 140, paddingTop: 50, paddingBottom: 20}}>
        <View>
          <Image
            source={require('../assets/images/profilePic.png')}
            style={styles.pic}
          />
        </View>
        <Text>iToh</Text>
        <Text>+1 98237489246</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('MyProfile')}
          style={styles.button}>
          <Text style={{color: 'black'}}>My Profile</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ChangePasswordScreen')}
          style={styles.button}>
          <Text style={{color: 'black'}}>Change Password</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('PaymentSetting')}
          style={styles.button}>
          <Text style={{color: 'black'}}>Payment Settings</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('CountryPicker')}
          style={styles.button}>
          <Text style={{color: 'black'}}>My Voucher</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={{color: 'black'}}>Notification</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={{color: 'black'}}>About Us</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={{color: 'black'}}>Contact Us</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.signOut}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text
            style={{
              alignSelf: 'center',
              padding: 15,
              fontWeight: 'bold',
              color: 'black',
              fontSize: 15,
            }}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  pic: {
    width: 100,
    height: 100,
  },
  button: {
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 5,
    padding: 10,
    justifyContent: 'space-between',
  },
  signOut: {
    backgroundColor: '#ECF0F1',
    borderRadius: 30,
    width: 354,
    height: 50,
    alignSelf: 'center',
    marginTop: 20,
  },
});
