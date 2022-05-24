/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import CheckBox from 'react-native-check-box';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
// import {ButtonCommon, HeaderBack} from '../components';
import {windowWidth} from '../screens/HomeScreen';
import {countries} from '../data/data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fullDate} from './MyProfile';
import HeaderBack from '../components/HeaderBack';
import ButtonCommon from '../components/ButtonCommon';
export default function EditProfileScreen({route, navigation}) {
  const {account} = route.params;
  const [listAccount, setListAccount] = useState(null);
  const [profile, setProfile] = useState(null);

  const [firstName, setFirstName] = useState(account?.profile?.firstName);
  const [lastName, setLastName] = useState(account?.profile?.lastName);
  const [email, setEmail] = useState(account?.profile?.email);
  const [phoneNumber, setPhoneNumber] = useState(account?.profile?.phoneNumber);

  const [date, setDate] = useState(new Date(account?.profile?.date));
  // Picker Date
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState(account?.profile?.gender);
  // Picker Country
  const [openCountry, setOpenCountry] = useState(false);
  const [valueCountry, setValueCountry] = useState(
    account?.profile?.codeContry,
  );
  const [itemsCountry, setItemsCountry] = useState([]);

  const refInput = useRef();
  const [input, setInput] = useState('');

  React.useEffect(() => {
    AsyncStorage.getItem('account').then(accounts => {
      const data = JSON.parse(accounts);
      if (Array.isArray(data) && data.length > 0) {
        setListAccount(data);
      }
    });
  }, []);

  const location = itemsCountry.find(item => item.value == valueCountry);
  console.log('location', location);

  const handleProfile = () => {
    AsyncStorage.getItem('user').then(user => {
      const userInfor = JSON.parse(user);

      if (listAccount && Array.isArray(listAccount)) {
        let newList = [...listAccount];
        newList.forEach((item, index) => {
          if (item.username == userInfor.username) {
            item.profile = {
              firstName: firstName,
              lastName: lastName,
              brithday: fullDate(date),
              date: date,
              gender: gender,
              phoneNumber: phoneNumber,
              email: email,
              location: location.label,
              codeContry: location.value,
            };
          }
        });
        setListAccount(newList);
      }
      console.log(listAccount);
      AsyncStorage.setItem('account', JSON.stringify(listAccount)).then(() => {
        navigation.goBack();
      });
    });
  };

  useEffect(() => {
    if (open) {
      refInput?.current?.focus();
    } else {
      refInput?.current?.blur();
    }
  }, [open]);

  useEffect(() => {
    if (input) {
      setItemsCountry(
        countries.reduce((array, item) => {
          if (item.name.toLowerCase().includes(input.toLowerCase())) {
            array.push({
              label: item.name,
              value: item.code,
            });
          }
          return array;
        }, []),
      );
    } else {
      setItemsCountry(
        countries.map(item => ({
          label: item.name,
          value: item.code,
        })),
      );
    }
  }, [input]);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View>
        <HeaderBack />
        {/* <HeaderSub text={'Edit Profile'} navigation={navigation} /> */}
      </View>
      <View style={{flex: 1}}>
        <View style={{alignItems: 'center', marginBottom: 20}}>
          <View
            style={{
              width: 150,
              height: 150,
              borderRadius: 150,
              overflow: 'hidden',
              position: 'relative',
            }}>
            <Image source={require('../assets/images/profilePic.png')} />
          </View>
          {/* <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 40,
              backgroundColor: '#ddd',
              position: 'absolute',
              bottom: 0,
              left: windowWidth / 2 + 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{resizeMode: 'contain', width: '80%'}}
              source={require('../assets/images/camera.png')}
            />
          </TouchableOpacity> */}
        </View>
        <FlatList
          data={[1]}
          renderItem={() => (
            <View
              style={{
                flexDirection: 'column',
                marginTop: 30,
                marginHorizontal: 30,
              }}>
              <View style={styles.information}>
                <Text style={styles.label}>First Name</Text>
                <TextInput
                  value={firstName}
                  onChangeText={setFirstName}
                  style={styles.inputStyle}
                  placeholder="Your first name"
                />
              </View>
              <View style={styles.information}>
                <Text style={styles.label}>Last Name</Text>
                <TextInput
                  value={lastName}
                  onChangeText={setLastName}
                  style={styles.inputStyle}
                  placeholder="Your last name"
                />
              </View>
              <View style={[styles.information, {paddingVertical: 10}]}>
                <Text style={styles.label}>Birthday</Text>
                <TouchableOpacity onPress={() => setOpen(true)}>
                  <Text>{fullDate(date)}</Text>
                </TouchableOpacity>
                <DatePicker
                  modal
                  mode="date"
                  open={open}
                  date={date}
                  onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </View>
              <View style={[styles.information]}>
                <Text style={[styles.label]}>Gender</Text>
                <View style={[styles.spaceBetween, {paddingBottom: 5}]}>
                  <Text
                    style={{paddingRight: 8, color: '#333', fontWeight: '500'}}>
                    Male
                  </Text>
                  <CheckBox
                    style={{flex: 1, padding: 0, margin: 0}}
                    onClick={() => {
                      setGender('Male');
                    }}
                    isChecked={gender == 'Male'}
                  />
                  <Text
                    style={{paddingRight: 8, color: '#333', fontWeight: '500'}}>
                    Female
                  </Text>
                  <CheckBox
                    style={{flex: 1, padding: 0, margin: 0}}
                    onClick={() => {
                      setGender('Female');
                    }}
                    isChecked={gender == 'Female'}
                  />
                </View>
              </View>
              <View style={styles.information}>
                <Text style={styles.label}>Phone number</Text>
                <TextInput
                  keyboardType="numeric"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  style={styles.inputStyle}
                  placeholder="Your phone number"
                />
              </View>
              <View style={styles.information}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  style={styles.inputStyle}
                  placeholder="Example@gmail.com"
                />
              </View>
              <View style={styles.information}>
                <Text style={styles.label}>Location</Text>
                <View style={{flexDirection: 'row', width: windowWidth / 2}}>
                  <DropDownPicker
                    placeholder={'Country'}
                    open={openCountry}
                    value={valueCountry}
                    items={itemsCountry}
                    searchable
                    setOpen={setOpenCountry}
                    setValue={setValueCountry}
                    setItems={setItemsCountry}
                  />
                </View>
              </View>
            </View>
          )}
        />
      </View>
      <View>
        <ButtonCommon onPress={handleProfile} active text={'Save'} />
        {/* <ButtonCommon  /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  spaceBetween: {
    width: (windowWidth / 3) * 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  inputStyle: {
    padding: 0,
    margin: 0,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#808080',
    width: windowWidth / 3,
  },
  information: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#808080',
    marginBottom: 5,
    paddingTop: 10,
  },
});
