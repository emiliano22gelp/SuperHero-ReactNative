import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchHero from '../screen/Search/SearchHero';
import TeamComponent from '../screen/Team/TeamComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import SignOutComponent from '../components/SignOut';
const Tab = createBottomTabNavigator();

const TabNavigatorAutenticated = () => {
  return (
    <Tab.Navigator
      initialRouteName="Equipo"
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
      <Tab.Screen
        name="Equipo"
        component={TeamComponent}
        options={{
          tabBarIcon: () => <Icon name="search-outline" />,
        }}
      />
      <Tab.Screen
        name="Cerrar Sesion"
        component={SignOutComponent}
        options={{
          tabBarIcon: () => <Icon name="search-outline" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigatorAutenticated;
