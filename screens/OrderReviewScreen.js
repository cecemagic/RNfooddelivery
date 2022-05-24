import { View, Text } from 'react-native'
import React from 'react'

export default function OrderReviewScreen({route, navigation}) {
    // const { name } = route.params;
    return (
        <View>
          <Text
            onPress={() => navigation.goBack()}
          >OrderReviewScreen</Text>
        </View>
      )
}