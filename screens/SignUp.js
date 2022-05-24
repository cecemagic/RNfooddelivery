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
// import Header from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderBack from '../components/HeaderBack';
export default function RegisterScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePwd, setRePwd] = useState('');
  const [errorContent, setErrorContent] = useState('');

  const pressBack = () => {
    navigation.navigate('Login');
  };

  const pressAddNewAccount = () => {
    if (username.length < 6 && password.length < 6) {
      setErrorContent('Username and password must be at least 6 characters');
    } else if (password !== rePwd) {
      setErrorContent('Re Password does not match');
    } else {
      setErrorContent('');
      const newAccount = {
        username,
        password,
        credits: [],
      };
      AsyncStorage.getItem('account').then(accounts => {
        const listAccount = JSON.parse(accounts);
        if (
          Array.isArray(listAccount) &&
          listAccount.some(account => account.username === username)
        ) {
          setErrorContent(`${username} already exists`);
          return;
        }
        if (accounts === null) {
          AsyncStorage.setItem('account', JSON.stringify([newAccount]));
        } else {
          listAccount.push(newAccount);
          AsyncStorage.setItem('account', JSON.stringify(listAccount));
        }
        Alert.alert('Success', 'Add new account success', [
          {
            text: 'Hoàn thành',
            onPress: pressBack,
          },
        ]);
      });
    }
  };
  return (
    <View style={styles.container}>
      <View style={{width: '100%'}}>
        <HeaderBack navigation={navigation} />
      </View>
      <View style={styles.body}>
        <Text style={styles.textSignIn}>Sign Up</Text>
        <InputCommon
          placeholder={'Username'}
          onChangeText={setUsername}
          customStyle={styles.styleMB20}
        />
        <InputCommon
          secureTextEntry={true}
          onChangeText={setPassword}
          placeholder={'Password'}
          customStyle={styles.styleMB20}
        />
        <InputCommon
          secureTextEntry={true}
          onChangeText={setRePwd}
          placeholder={'Re-enter Password'}
          customStyle={styles.styleMB30}
        />
        {Boolean(errorContent) && (
          <Text style={styles.textErr}>{errorContent}</Text>
        )}
        <ButtonCommon text={'Sign Up'} onPress={pressAddNewAccount} />
        <View style={styles.forgotWrapper}>
          <Text
            onPress={() => {
              Alert.alert('Forgot Password');
            }}
            style={{textAlign: 'right', color: '#34495E'}}>
            Forgot Password
          </Text>
        </View>
      </View>
      <Footer />
    </View>
  );
}
const styles = StyleSheet.create({
  textErr: {
    color: 'red',
    marginBottom: 30,
  },
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
  forgotWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
});
