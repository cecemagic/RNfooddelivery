import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
import ButtonCommon from '../components/ButtonCommon';
import HeaderBack from '../components/HeaderBack';
// import HeaderBack from '../../components/HeaderBack';
// import {countries} from '../data/data';
//import {windowWidth} from '../screens/MainScreen';

export const fullDate = date => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const fullDate = `${day < 10 ? '0' + day : day}/${
    month < 10 ? '0' + month : month
  }/${year}`;
  return fullDate;
};

export default function MyProfile({navigation}) {
  const [listAccount, setListAccount] = useState(null);
  const [account, setAccount] = useState(null);

  React.useEffect(() => {
    AsyncStorage.getItem('account').then(accounts => {
      const data = JSON.parse(accounts);
      console.log('test', data);
      if (Array.isArray(data) && data.length > 0) {
        setListAccount(data);
      }
    });
  }, [account]);

  React.useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      const userInfor = JSON.parse(user);
      console.log('tess', userInfor);
      if (listAccount && Array.isArray(listAccount)) {
        const acc = listAccount.find(
          (item, index) => item.username == userInfor.username,
        );
        setAccount(acc);
      }
    });
  }, [listAccount, navigation]);

  console.log('test 3', account);

  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 30}}>
      <View style={{}}>
        <HeaderBack navigation={navigation} text={'My Profile'} />
      </View>

      <View style={{flex: 1}}>
        <View style={{alignItems: 'center'}}>
          <Image source={require('../assets/images/profilePic.png')} />
        </View>
        <View style={{marginTop: 40}}>
          <View style={styles.line}>
            <TextInput style={styles.lableStyle}>First Name</TextInput>
            <Text style={[styles.textStyle]}>
              {account?.profile?.firstName}
            </Text>
          </View>
          <View style={styles.line}>
            <TextInput style={styles.lableStyle}>Last Name</TextInput>
            <Text style={[styles.textStyle]}>{account?.profile?.lastName}</Text>
          </View>
          <View style={styles.line}>
            <TextInput style={styles.lableStyle}>Birthday</TextInput>
            <Text style={[styles.textStyle]}>
              {fullDate(new Date(account?.profile?.date))}
            </Text>
          </View>
          <View style={styles.line}>
            <TextInput style={styles.lableStyle}>Gender</TextInput>
            <Text style={[styles.textStyle]}>{account?.profile?.gender}</Text>
          </View>
          <View style={styles.line}>
            <TextInput style={styles.lableStyle}>Phone number</TextInput>
            <Text style={[styles.textStyle]}>
              {account?.profile?.phoneNumber}
            </Text>
          </View>
          <View style={styles.line}>
            <TextInput style={styles.lableStyle}>Email</TextInput>
            <Text style={[styles.textStyle]}>{account?.profile?.email}</Text>
          </View>
          <View style={styles.line}>
            <TextInput style={styles.lableStyle}>Location</TextInput>
            <Text style={[styles.textStyle]}>{account?.profile?.location}</Text>
          </View>
        </View>
      </View>
      <View>
        <ButtonCommon
          active
          text={'Edit Profile'}
          // onPress={() => navigation.navigate('EditProfile', {account: account})}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingBottom: 10,
  },
  lableStyle: {
    // width: windowWidth / 4,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16,
    color: '#888',
  },
  textStyle: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16,
    color: '#111',
    backgroundColor: '#fff',
  },
});
