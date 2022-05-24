import { View, Text } from 'react-native'
import React from 'react'

export default function FoodDetailScreen({ route, navigation }) {
  const { item } = route.params;  
  //NOTES: Nhận dữ liệu từ navigation
  return (
    <View>
      <Text
        onPress={() => navigation.goBack()}
      >{item.title}</Text>
    </View>
  )
}