import {View, ScrollView, Text} from 'react-native';
import React from 'react';

export default function FlexBox() {
  return (
    <ScrollView>
      <Text>Flex</Text>
      <View style={{width: 100, height: 100}}>
        <View style={{flex: 50, backgroundColor: 'red'}} />
        <View style={{flex: 40, backgroundColor: 'darkorange'}} />
        <View style={{flex: 10, backgroundColor: 'green'}} />
      </View>
      <View
        style={{
          width: 300,
          height: 300,
          backgroundColor: 'grey',
          marginTop: 20,
          flexWrap: 'wrap',
          flexDirection: 'row', // hướng của flexbox
          justifyContent: 'center', // căn theo hướng chính
          alignItems: 'stretch', // căn theo ngược hướng chính
        }}>
        <View
          style={{
            width: 70,
            height: 70,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'red',
          }}>
          <View style={{width: 30, height: 30, backgroundColor: 'yellow'}} />
        </View>
        <View style={{width: 70, height: 70, backgroundColor: 'green'}} />
        <View style={{width: 70, height: 70, backgroundColor: 'yellow'}} />
        <View style={{width: 70, height: 70, backgroundColor: 'darkorange'}} />
        <View
          style={{
            width: 70,
            height: 70,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'red',
          }}>
          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: 'yellow',
              transform: [{translateX: -15}, {translateY: -15}],
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}
