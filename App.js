import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainNavigation from './navigation/MainNavigation';
// import Carousel from 'react-native-reanimated-carousel';
export default function App() {
  // useEffect(() => {
  //   AsyncStorage.getItem('user').then(user => user && setState('MainScreen'))
  // }, [])

  return (
    <SafeAreaView style={{flex: 1}}>
      <MainNavigation />
    </SafeAreaView>
  );
}
