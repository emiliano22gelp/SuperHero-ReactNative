import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchHero from '../screen/Search/SearchHero';
import HomeApp from '../screen/Home/HomeApp';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#000',
        activeBackgroundColor: '#feb72b',
        inactiveTintColor: '#FFF',
        inactiveBackgroundColor: '#527318',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeApp}
        options={{
          title: 'Inicio',
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={SearchHero}
        options={{
          title: 'Buscar Superheroes',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
