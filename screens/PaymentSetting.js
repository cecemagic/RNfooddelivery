import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import HeaderBack from '../components/HeaderBack'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Paypal from '../assets/images/paypal.png'

export default function PaymentSetting({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>

      <HeaderBack navigation={navigation} text={'Payment Setting'} />

      <View style={styles.paymentMethod}>

        <View style={styles.paymentBox}>
          <View style={styles.logoBackground}>
            <Image source={require('../assets/images/paypal.png')} />
          </View>
          <Text style={styles.logoText}>Paypal</Text>
        </View>

        <TouchableOpacity>
          <Ionicons
            name='chevron-forward-outline'
            size={20}
            color='black'
            justifyContent='flex-end'

          />
        </TouchableOpacity>

      </View>

      <View style={styles.paymentMethod}>

        <View style={styles.paymentBox}>
          <View style={styles.logoBackground}>
            <Image source={require('../assets/images/creditcardLogo.png')} />
          </View>
          <Text style={styles.logoText}>Credit Card</Text>
        </View>

        <TouchableOpacity>
          <Ionicons
            name='chevron-forward-outline'
            size={20}
            color='black'
            justifyContent='flex-end'

          />
        </TouchableOpacity>

      </View>

      <View style={styles.paymentMethod}>

        <View style={styles.paymentBox}>
          <View style={{padding: 5}}>
            <Image source={require('../assets/images/creditcardVector.png')} />
          </View>
          <Text style={styles.logoText}>Add new payment method</Text>
        </View>

        <TouchableOpacity
         onPress={()=>navigation.navigate('AddCreditCardScreen')}
        >
        <View style={styles.logoBackground}>
            <Ionicons
              name='add'
              size={20}
              color='black'
              justifyContent='flex-end'
            />
          </View>
        </TouchableOpacity>

      </View>

    </View>
  )

}

const styles = StyleSheet.create({
  paymentMethod: {
    flexDirection: 'row',
    marginVertical: 5,
    height: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    paddingHorizontal: 10
  },
  paymentBox: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
  logoBackground: {
    width: 30,
    height: 30,
    backgroundColor: '#ECF0F1',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  logoText: {
    color: 'black',
    fontSize: 15,
  }
})