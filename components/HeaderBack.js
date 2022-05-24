import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ({navigation, text}) {
  return (
    <View style={styles.headerTab}>
        <TouchableOpacity
            onPress={() => navigation.goBack()}
        >
        <Ionicons name='chevron-back-outline' size={20} color='black' />
        </TouchableOpacity>
        <Text style={styles.headerText}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headerTab: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'white',
        height:40,
        padding:10,
    },
    headerText: {
        height:40,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        lineHeight: 27,
    }
})