/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  View,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Star from '../assets/svg/star.svg';
import Clock from '../assets/svg/clock.svg';
import Marker from '../assets/svg/marker.svg';
import Header from '../components/Header';
import ButtonCommon from '../components/ButtonCommon';
const food1 = require('../assets/images/foodImages/food1.png');
const burger = require('../assets/images/foodImages/burger.png');
const pizza = require('../assets/images/foodImages/pizza.png');
const bbq = require('../assets/images/foodImages/bbq.png');
const fruit = require('../assets/images/foodImages/fruit.png');
const sushi = require('../assets/images/foodImages/sushi.png');
const noodle = require('../assets/images/foodImages/noodle.png');
const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth - 60;
function ItemRestaurant({dataItem}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginBottom: 10,
      }}>
      <Image source={dataItem.img} />
      <View style={{marginLeft: 20, flexDirection: 'column'}}>
        <Text style={{fontSize: 14, marginBottom: 10, fontWeight: '700'}}>
          {dataItem.name}
        </Text>
        <Text
          style={{
            color: '#34495E',
            marginBottom: 10,
            fontSize: 12,
            maxWidth: '80%',
          }}>
          <Marker /> {dataItem.address}
        </Text>
        <Text style={{color: '#34495E', marginBottom: 10, fontSize: 12}}>
          <Clock /> {dataItem.distance}
        </Text>
        <View style={{flexDirection: 'row'}}>
          {Array.from(Array(dataItem.star)).map((item, index) => (
            <Star key={index} />
          ))}
        </View>
      </View>
    </View>
  );
}

const foodMenu = [
  [
    {title: 'Burgers', img: burger},
    {title: 'Fruit', img: fruit},
  ],
  [
    {title: 'Pizza', img: pizza},
    {title: 'Sushi', img: sushi},
  ],
  [
    {title: 'BBQ', img: bbq},
    {title: 'Noodle', img: noodle},
  ],
  // [{ title: 'Hotpot', img:burger }, { title: 'Noodle', img:noodle }],
];

export default function MainScreen({navigation}) {
  const [username, setusername] = useState('TÚ');
  const ref = useRef();
  const refInput = useRef();

  const [listNearMe, setListNearMe] = useState([
    {
      id: 1,
      name: 'Dapur Ijah Restaurant',
      img: food1,
      address: '123, Đường số 1, Quận 1, TP. Hồ Chí Minh',
      distance: '3 min - 1.1 km',
      star: 5,
    },
    {
      id: 2,
      name: 'Biển Restaurant',
      img: food1,
      address: '123, Đường số 2, Quận 3, TP. Hồ Chí Minh',
      distance: '15 min -3 km',
      star: 4,
    },
    {
      id: 3,
      name: 'Biển Restaurant',
      img: food1,
      address: '123, Đường số 2, Quận 3, TP. Hồ Chí Minh',
      distance: '15 min -3 km',
      star: 4,
    },
    {
      id: 4,
      name: 'Biển Restaurant',
      img: food1,
      address: '123, Đường số 2, Quận 3, TP. Hồ Chí Minh',
      distance: '15 min -3 km',
      star: 4,
    },
    {
      id: 5,
      name: 'Biển Restaurant',
      img: food1,
      address: '123, Đường số 2, Quận 3, TP. Hồ Chí Minh',
      distance: '15 min -3 km',
      star: 4,
    },
    {
      id: 6,
      name: 'Biển Restaurant',
      img: food1,
      address: '123, Đường số 2, Quận 3, TP. Hồ Chí Minh',
      distance: '15 min -3 km',
      star: 4,
    },
  ]);
  // useEffect(() => {

  //   refInput.current.focus()

  //   AsyncStorage.getItem('user').then(user => setusername(user))
  // }, [])
  // const logout = () => {
  //   AsyncStorage.removeItem('user')
  //   navigation.navigate('LoginScreen');
  // }

  const renderItem = ({item, index}) => {
    return <ItemRestaurant dataItem={item} />;
  };

  const HeaderMain = () => {
    return (
      <>
        <Header onPress={() => navigation.navigate('SearchBar')}/>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              paddingVertical: 10,
              color: 'black',
            }}>
            Food Menu
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              alignSelf: 'center',
              marginRight: 10,
            }}>
            View all
          </Text>
        </View>

        <FlatList
          data={foodMenu}
          horizontal={true}
          style={{maxHeight: (itemWidth / 3) * 2 + 20, marginBottom: 20}}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            const purple = 'rgba(155, 89, 182, 0.3)';
            const lightBlue = 'rgba(52, 152, 219, 0.3)';
            return (
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: index != 0 ? 20 : 0,
                }}>
                {/* <FontAwesomeIcon name="bacteria" /> */}
                <TouchableOpacity
                  style={{
                    width: itemWidth / 3,
                    borderRadius: 20,
                    paddingTop: 10,
                    paddingLeft: 15,
                    backgroundColor: index % 2 == 0 ? lightBlue : purple,
                    height: itemWidth / 3,
                    marginBottom: 20,
                    position: 'relative',
                  }}
                  onPress={() => {
                    navigation.navigate('FoodDetailScreen', {
                      item: item[0],
                    });
                  }}>
                  <Text
                    style={{fontWeight: '700', fontSize: 14, color: '#FFFFFF'}}>
                    {item[0].title}
                  </Text>
                  <Image
                    source={item[0].img}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      width: itemWidth / 3 - 20,
                      height: itemWidth / 6,
                    }}
                  />
                </TouchableOpacity>



            <TouchableOpacity style={{
                    width: itemWidth / 3,
                    paddingTop: 10,
                    paddingLeft: 15,
                    borderRadius: 20,
                    backgroundColor: index % 2 == 0 ? purple : lightBlue,
                    height: itemWidth / 3,
                    position: 'relative',
                  }}
                  onPress={() => {
                    //NOTES: Chuyển màn hình kèm theo biến - Cái tên giống với name khai báo trong MainNavigation
                    navigation.navigate('FoodDetailScreen', {
                      item: item[1],
                    });
                    // setFood(item[1].title)
                  }}>
                  <Text
                    style={{fontWeight: '700', fontSize: 14, color: '#FFFFFF'}}>
                    {' '}
                    {item[1].title}
                  </Text>
                  <Image
                    source={item[1].img}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      width: itemWidth / 3 - 20,
                      height: itemWidth / 6,
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              paddingVertical: 10,
              color: 'black',
            }}>
            Near me
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              alignSelf: 'center',
              marginRight: 10,
            }}>
            View all
          </Text>
        </View>
      </>
    );
  };

  const scrollUp = () => {
    ref.current.scrollToIndex({
      index: 2.5,
      animated: true,
    });
  };

  return (
    <View style={{flex: 1, paddingHorizontal: 30, backgroundColor: 'white'}}>
      {/* <TextInput
        ref={refInput}
        value={username}
        onChangeText={(text) => {
          setusername(text)
        }}
      />  */}
      <FlatList
        ref={ref}
        ListHeaderComponent={HeaderMain}
        keyExtractor={item => item.id.toString()}
        data={listNearMe}
        renderItem={renderItem}
        ListFooterComponent={() => (
          <ButtonCommon
            text={'Logout'}
            onPress={() => {
              //NOTES: Chuyển màn hình - Cái tên giống với name khai báo trong MainNavigation
              navigation.navigate('Login');
            }}
          />
        )}
        ListEmptyComponent={() => {
          return <Text>List rỗng</Text>;
        }}
      />
    </View>
  );
}
