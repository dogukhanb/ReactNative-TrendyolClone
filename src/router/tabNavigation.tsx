import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from '../screens/home';
import Cart from '../screens/cart';
import Favorite from '../screens/favorites';
import Profile from '../screens/profile';
import TrendyolGo from '../screens/trendyolGo';
import Favorites from '../screens/favorites';

const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'upcircleo' : 'upcircleo';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'upcircleo' : 'upcircleo';
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="TrendyolGo" component={TrendyolGo} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
