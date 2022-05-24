/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
    View,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Image,
  } from 'react-native';
  import React, {useEffect} from 'react';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  const windowHeight = Dimensions.get('window').height;
  
  export default function ChangePWScreen({navigation}) {
    const [oldPw, setOldPw] = React.useState('');
    const [newPwd, setNewPw] = React.useState('');
    const [renewPwd, setRenewPw] = React.useState('');
    const [errorContent, setErrorContent] = React.useState('');
  
    const pressChangePassword = () => {
      if (oldPw === '' || newPwd === '' || renewPwd === '') {
        setErrorContent('Fill to input');
      } else {
        if (newPwd !== renewPwd) {
          setErrorContent('Re Password does not match');
        } else {
          setErrorContent('');
          AsyncStorage.getItem('account').then(accounts => {
            const listAccount = JSON.parse(accounts);
            console.log('LIST ACC' + JSON.stringify(listAccount));
            let currentAccount = listAccount.find(
              account => account.password === oldPw,
            );
  
            if (!currentAccount) {
              setErrorContent('Password is incorrect');
              return;
            } else {
              if (newPwd !== renewPwd) {
                setErrorContent('Re-new password does not match');
              } else {
                let newAccount = currentAccount;
                newAccount.password = newPwd;
                let index = listAccount.indexOf(currentAccount);
  
                if (index !== -1) {
                  listAccount[index] = newAccount;
                }
  
                AsyncStorage.setItem('account', JSON.stringify(listAccount));
              }
            }
            navigation.navigate('Login');
          });
        }
      }
    };
  
    return (
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: '#E5E5E5',
          height: windowHeight,
          justifyContent: 'space-between',
        }}>
        <View style={{}}>
          <View
            style={{
              flexDirection: 'row',
              margin: 20,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
              }}
              onPress={() => navigation.goBack()}>
              {/* <Image
                style={{width: 20, height: 20}}
                source={require('../../assets/images/back.png')}
              /> */}
            </TouchableOpacity>
            <Text style={{fontSize: 18, fontWeight: '700', color: 'black'}}>
              Review Food
            </Text>
            <View />
          </View>
  
          <View
            style={{
              flexDirection: 'column',
              marginHorizontal: 20,
              marginTop: 50,
            }}>
            <Text>Enter Old Password</Text>
            <TextInput
              placeholder="Password"
              onChangeText={setOldPw}
              style={{
                backgroundColor: '#ECF0F1',
  borderRadius: 30,
                paddingLeft: 30,
                marginVertical: 20,
              }}
            />
            <Text>Create New Password</Text>
            <TextInput
              placeholder="Enter New Password"
              onChangeText={setNewPw}
              style={{
                backgroundColor: '#ECF0F1',
                borderRadius: 30,
                paddingLeft: 30,
                marginVertical: 20,
              }}
            />
  
            <TextInput
              placeholder="Re-enter New Password"
              onChangeText={setRenewPw}
              style={{
                backgroundColor: '#ECF0F1',
                borderRadius: 30,
                paddingLeft: 30,
              }}
            />
            {Boolean(errorContent) && (
              <Text style={{color: 'red', marginBottom: 30}}>{errorContent}</Text>
            )}
          </View>
        </View>
  
        <View style={{marginBottom: 40}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#D35400',
              marginHorizontal: 20,
              borderRadius: 30,
            }}
            onPress={pressChangePassword}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '700',
                fontSize: 18,
                color: 'white',
                paddingVertical: 12,
              }}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }