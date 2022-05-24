import {Text, StyleSheet} from 'react-native';
import React from 'react';
function TextRed() {
  return <Text style={styles.text}>Text Red</Text>;
}

function TextGreen() {
  return <Text style={styles.textGreen}>Text Green</Text>;
}

export {TextGreen, TextRed};

export default TextRed;
const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 30,
  },
  textGreen: {
    color: 'green',
    fontSize: 25,
  },
});
