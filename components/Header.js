/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header({onPress}) {
  return (
    <>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: '#eee',
          borderRadius: 20,
          fontWeight: '700',
          marginTop: 10,
          width: '100%',
          height: 40,
          // marginTop: 20,
        }}
        onPress={onPress}>


        <View style={{marginLeft: 10, alignSelf: 'center'}}>
          <Ionicons name="search-sharp" size={24} />
        </View>
        <Text
          style={{
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
            marginTop: 10,
          }}>
          Search
        </Text>
      </TouchableOpacity>
      <View>
        <View style={{height: 30, flexDirection: 'row', paddingTop: 10}}>
          <Ionicons name="location-sharp" size={20} color="black" />
          <Text style={{paddingLeft: 10, color: 'black'}}>
            9 West 46 Th Street, New York City
          </Text>
        </View>
      </View>
      <ScrollView horizontal={true} style={styles.headerTab}>
        <View>
          <View style={styles.headerBox}>
            <Ionicons name="cafe-outline" size={40} />
          </View>
          <Text style={styles.headerText}>Drink</Text>
        </View>

        <View>
          <View style={styles.headerBox}>
            <Ionicons name="fast-food-outline" size={40} />
          </View>
          <Text style={styles.headerText}>Food</Text>
        </View>

        <View>
          <View style={styles.headerBox}>
            <Ionicons name="ice-cream-outline" size={40} />
          </View>
          <Text style={styles.headerText}>Desert</Text>
        </View>

        <View>
          <View style={styles.headerBox}>
            <Ionicons name="pizza-outline" size={40} />
          </View>
          <Text style={styles.headerText}>Pizza</Text>
        </View>

        <View>
          <View style={styles.headerBox}>
            <Ionicons name="skull-outline" size={40} />
          </View>
          <Text style={styles.headerText}>Poison</Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  headerTab: {
    flexDirection: 'row',
    padding: 10,
    // justifyContent:'space-between'
  },
  headerBox: {
    width: 70,
    height: 70,
    backgroundColor: '#ECF0F1',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
  },
  headerText: {
    alignSelf: 'center',
    color: 'black',
    marginRight: 30,
  },
});
