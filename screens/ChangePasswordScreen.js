/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, FlatList } from 'react-native';
import ButtonCommon from '../components/ButtonCommon';
import InputCommon from '../components/InputCommon';
import HeaderBack from '../components/HeaderBack';

const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth - 60;


export default function ChangePassword({ navigation }) {
    const [listAccount, setListAccount] = React.useState(null);
    const [account, setAccount] = React.useState(null);
    const [user, setUser] = React.useState(null);
    const [newPassword, setNewPassword] = React.useState(null);
    const [checkPass, setCheckPass] = React.useState(false);
    const [checkOldPass, setCheckOldPass] = React.useState(false);
    // const [oldPassword, setOldPassword] = 

    React.useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            const acc = JSON.parse(user);
            setUser(acc);
        })
    }, [])

    React.useEffect(() => {
        AsyncStorage.getItem('account').then(accounts => {
            const data = JSON.parse(accounts);
            console.log('test', JSON.stringify(data));
            if (Array.isArray(data) && data.length > 0) {
                setListAccount(data);
            }
        })
        // AsyncStorage.getItem('account').then(accounts => console.log("LOG ACCOUNT", accounts));
    }, [])


    // React.useEffect(() => {
    //     AsyncStorage.getItem('user').then((user) => {
    //         const userInfor = JSON.parse(user);
    //         console.log('tess', userInfor);
    //         if (listAccount && Array.isArray(listAccount)) {
    //             const acc = listAccount.find((item, index) => item.username == userInfor.username);
    //             setAccount(acc);
    //         }
    //     })
    // }, [listAccount, navigation])

    const handleChangePass = (user, newPassword) => {
        // let newList = [...listAccount];
        // newList.forEach((item, index) => {
        //     if(item.username === user.username){
        //         item['password'] = newPassword
        //         return;
        //     }
        // });
        // setUser({
        //     ...user,
        //     password: newPassword
        // })
        // AsyncStorage.setItem('user', JSON.stringify(user));
        // // console.log("USer password" + JSON.stringify(user.password));
        // AsyncStorage.setItem('account', JSON.stringify(newList)).then(()=>navigation.goBack());

    }


    return (
        <View style={{ flex: 1, marginHorizontal: 20 }}>
            <View style={{ marginBottom: 30 }}>
               <HeaderBack navigation={navigation} text={'Change Password'} />
            </View>
            <FlatList
                data={[1]}
                renderItem={() =>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: 14, lineHeight: 16, color: '#000' }}>Enter Old Password</Text>
                        <View style={{ marginVertical: 20 }}>
                            <InputCommon
                                    // onChangeText={(value) => {
                                    //     console.log('old pass', JSON.stringify(user.password));
                                    //     if (value !== user.password) {

                                    //         setCheckOldPass(true);
                                    //     } else {
                                    //         setCheckOldPass(false);
                                    //     }
                                    // }}
                                placeholder={'Password'}
                            />
                            {checkOldPass && <Text style={styles.textError} >
                                Password incorrect
                            </Text>}
                        </View>
                        <Text style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: 14, lineHeight: 16, marginTop: 10, color: '#000' }}>Create New Password</Text>
                        <View style={{ marginVertical: 20 }}>
                            <InputCommon
                                onChangeText={setNewPassword}
                                placeholder={'Enter New Password'}
                            />
                        </View>
                        <View >
                            <InputCommon
                                onChangeText={(value) => {
                                    if (value !== newPassword) {
                                        setCheckPass(true)
                                    } else { setCheckPass(false) }
                                }}
                                placeholder={'Re-enter New Password'}
                            />
                        </View>
                        {checkPass && <Text style={styles.textError} >
                            Password and re-password is not match
                        </Text>}
                    </View>}
            />
            <View style={{ padding: 0, backgroundColor: 'transparent' }}>
                <ButtonCommon
                    text={'Send'}
                    active
                    onPress={(event) => {
                        !checkOldPass && !checkPass && handleChangePass(user, newPassword);
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    likeStyle: {
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 6,
    },
    textHeader: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 27,
        textAlign: 'center',

        color: '#000',
    },
    textStyle: {
        // textAlign: 'right',
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: '600',
        lineHeight: 16,
        color: '#34495E',
    },
    textError: {
        color: 'red',
        marginTop: 10,
    },
})