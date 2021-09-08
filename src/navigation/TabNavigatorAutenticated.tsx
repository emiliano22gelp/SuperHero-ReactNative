import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchHero from '../screen/Search/SearchHero';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

const TabNavigatorAutenticated = () => {
  return (
    <Tab.Navigator
      initialRouteName="Buscar"
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255, 0.6)',
          elevation: 0,
          borderWidth: 0,
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: 'bold',
        },
        tabBarInactiveTintColor: '#21201d',
        tabBarActiveTintColor: '#dd3e11',
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Buscar"
        component={SearchHero}
        options={{
          tabBarIcon: () => <Icon name="search-outline" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigatorAutenticated;
