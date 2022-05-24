/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  View,
  Text,
  StyleSheet,
  Alert,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
const screenWidth = Dimensions.get('screen').width;

import InputCommon from '../components/InputCommon';
import ButtonCommon from '../components/ButtonCommon';
import Footer from '../components/Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderBack from '../components/HeaderBack';

export default function LoginScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checkButtonLogin, setCheckButtonLogin] = useState(true);
  const [isErrorWrongUsernameOrPass, setIsErrorWrongUsernameOrPass] =
    useState(false);
  useEffect(() => {
    if (username.length > 5 && password.length > 5) {
      setCheckButtonLogin(false);
    } else {
      setCheckButtonLogin(true);
    }
    setIsErrorWrongUsernameOrPass(false);
  }, [username, password]);

  return (
    <View style={styles.container}>
      <View style={{width: '100%'}}>
        <HeaderBack navigation={navigation} />
      </View>
      <View style={styles.body}>
        <Text style={styles.textSignIn}>Sign In</Text>
        <InputCommon
          placeholder={'Username'}
          value={username}
          onChangeText={text => setUsername(text)}
          customStyle={styles.styleMB20}
        />
        <InputCommon
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder={'Password'}
          customStyle={
            isErrorWrongUsernameOrPass ? {marginBottom: 10} : styles.styleMB30
          }
        />
        {isErrorWrongUsernameOrPass && (
          <Text style={[styles.textErr, styles.styleMB30]}>
            Username or password is not correct
          </Text>
        )}
        <ButtonCommon
          text={'Sign In'}
          disabled={checkButtonLogin}
          onPress={() => {
            AsyncStorage.getItem('account').then(accounts => {
              const listAccount = JSON.parse(accounts);
              const check = listAccount.some(
                item => item.username == username && item.password == password,
              );
              // check login dung hay sai

              if (check) {
                AsyncStorage.setItem('user', username);
                navigation.navigate('MainTabbar');
                // changeScreen('MainScreen');
              } else {
                setIsErrorWrongUsernameOrPass(true);
              }
            });
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Text
            onPress={() => {
              navigation.navigate('SignUp');
            }}
            style={{textAlign: 'right'}}>
            Sign up
          </Text>
        </View>
      </View>
      <Footer />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  styleMB30: {
    marginBottom: 30,
  },
  styleMB20: {
    marginBottom: 20,
  },
  body: {
    width: screenWidth - 60,
  },
  textSignIn: {
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 30,
    color: 'black',
  },
  textErr: {
    fontSize: 14,
    color: 'red',
  },
});
