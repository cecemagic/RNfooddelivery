import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import React from 'react';

export default function ButtonCommon({disabled,text,onPress}) {
  return (
    <TouchableOpacity 
    disabled={disabled}
    onPress={onPress}
    style={[styles.container,styles.center, disabled && {opacity:0.5} ]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    backgroundColor: '#D35400',
    height: 50,
    
  },
  center:{
    justifyContent:'center',
    alignItems:'center'
  },
  text: {
    color: '#FFFFFF',
    fontSize:18,
    fontWeight:'700',
  },
});
