import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderBack from './HeaderBack';

export default function SearchBar({navigation}) {
  return (
    <View>
      <HeaderBack navigation={navigation} />
      <Text>SearchBar</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
