import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
const screenWidth = Dimensions.get('screen').width;
export default function Footer() {
  return (
    <View>
      <View style={styles.container}>
        <View
          style={{ flex: 1, height: 1, backgroundColor: 'black' }}
        >
        </View>
        <Text style={styles.text}>Or connect with</Text>
      </View>
      <View style={styles.image}>
        <Image source={require('../assets/images/footer.png')} />
        <View style={styles.icon}>
          <Image style={{ marginRight: 20 }} source={require('../assets/images/facebook.png')} />
          <Image source={require('../assets/images/google-plus.png')} />
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: screenWidth,
  },
  text: {
    paddingLeft: 12,
    paddingRight: 30,
    fontFamily: 'Regular',
    fontWeight: "400",
    fontSize: 14
  },
  image: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-between'
  },
  icon: {
    flexDirection: 'row',
    paddingRight: 30,
  },

})