import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import FoodDetailScreen from '../screens/FoodDetailScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUp from '../screens/SignUp';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OrderReviewScreen from '../screens/OrderReviewScreen';
import FavoriteRestaurant from '../screens/FavoriteRestaurant';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import PaymentSetting from '../screens/PaymentSetting';
import HeaderBack from '../components/HeaderBack';
// import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import CountryPicker from '../screens/CountryPicker';
import AddCreditCardScreen from '../screens/AddCreditCardScreen';
import EditProfileScreen from '../screens/EditProfile';
import MyProfile from '../screens/MyProfile';
import SearchBar from '../components/SearchBar';
import ChangePWScreen from '../screens/ChangePassword (1)';
//NOTES: File này là settings của navigation

const Tab = createBottomTabNavigator(); //NOTES: Khai báo tabbar
const Stack = createNativeStackNavigator(); //NOTES: Khai báo stack
const Tabbar = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          //NOTES: HIển thị icon ở tabbar
          let iconName;

          if (route.name === 'MainScreen') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Orders') {
            iconName = focused ? 'clipboard' : 'clipboard-outline';
          } else if (route.name === 'My List') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="MainScreen" component={MainScreen} />
      <Tab.Screen name="Orders" component={OrderReviewScreen} />
      <Tab.Screen name="My List" component={FavoriteRestaurant} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
export default function MainNavigation() {
  //NOTES: cái này là Navigation của app
  //gồm có tabbar và các màn hình ngoiaf tabbar
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MainTabbar" component={Tabbar} />

        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen
          name="AddCreditCardScreen"
          component={AddCreditCardScreen}
        />

        <Stack.Screen name="CountryPicker" component={CountryPicker} />
        <Stack.Screen name="PaymentSetting" component={PaymentSetting} />
        <Stack.Screen name="ChangePasswordScreen" component={ChangePWScreen} />
        <Stack.Screen name="HeaderBack" component={HeaderBack} />
        <Stack.Screen name="SearchBar" component={SearchBar} />
        <Stack.Screen
          name="FoodDetailScreen"
          component={FoodDetailScreen}
          //   options={({route}) => ({title: route.params.item.title})}
        />
        <Stack.Screen name="OrderReviewScreen" component={OrderReviewScreen} />
        <Stack.Screen
          name="MyProfile"
          component={MyProfile}
          //   options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
