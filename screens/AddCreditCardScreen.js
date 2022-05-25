/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, TextInput, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import HeaderBack from '../components/HeaderBack';
import ButtonCommon from '../components/ButtonCommon';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddCreditCardScreen({navigation}) {
  const [bankName, setBankName] = useState('Bank Name');
  const [holderName, setHolderName] = useState('Holder Name');
  const [cardNumber, setCardNumber] = useState('Card Number');
  const [expireDate, setExpireDate] = useState('Expire Date');
  const [cvv, setCVV] = useState('CVV');

  const [text, onChangeText] = React.useState('');
  useEffect(() => {
    AsyncStorage.getItem('account').then(accounts => {
      const listAccount = JSON.parse(accounts);
      console.log(listAccount);
    });
    // lay account tu async
    // them cac 1 object vao thuoc tinh credit
    // lay list account
    // dung splice xoa cac
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
      }}>
      <View>
        <HeaderBack navigation={navigation} text={'Add Credit Card'} />
      </View>

      <View style={{flex: 1}}>
        <View style={{backgroundColor: 'white', position: 'relative'}}>
          <Image
            source={require('../assets/images/creditcardBackground.png')}
            style={{
              resizeMode: 'contain',
              width: '90%',
              marginHorizontal: '5%',
              height: 196,
            }}
          />
          <View style={{position: 'absolute', top: 20, right: 42}}>
            <Text style={styles.cardText}>{bankName}</Text>
          </View>
          <View style={{position: 'absolute', top: 20, left: 42}}>
            <Text style={[styles.cardText]}>{holderName}</Text>
          </View>
          <View style={{position: 'absolute', left: 42, bottom: 50}}>
            <Text style={[styles.cardText]}>{cardNumber}</Text>
          </View>
          <View style={{position: 'absolute', left: 42, bottom: 22}}>
            <Text style={[styles.cardText]}>{expireDate}</Text>
          </View>
          {/* <View style={{position: 'absolute', left: 42, bottom: 70}}>
            <Text style={[styles.cardText]}>{cvv}</Text>
          </View> */}
        </View>
        <FlatList
          data={[1]}
          renderItem={() => (
            <View style={{backgroundColor: 'white'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  Bank Name
                </Text>
                <TextInput
                  placeholder={'your bank name'}
                  onChangeText={text => setBankName(text)}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  Holder Name
                </Text>
                <TextInput
                  placeholder={'your name'}
                  onChangeText={text => setHolderName(text)}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  Card Number
                </Text>
                <TextInput
                  placeholder={'card number'}
                  onChangeText={text => setCardNumber(text)}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  Expire Date
                </Text>
                <TextInput
                  placeholder={'card expire date'}
                  onChangeText={text => setExpireDate(text)}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>CVV</Text>
                <TextInput
                  placeholder={'CVV number'}
                  onChangeText={text => setCVV(text)}
                />
              </View>
            </View>
          )}
        />
      </View>
      <View>
        <ButtonCommon text={'Add'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pic: {
    width: 100,
    height: 100,
  },
  cardText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
