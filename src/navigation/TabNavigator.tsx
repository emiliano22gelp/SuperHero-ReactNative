import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeApp from '../screen/Home/HomeApp';
import FormsAutenticathionScreen from '../screen/FormSignIn/Forms';
import FormsSignUpScreen from '../screen/FormSignUp/Forms';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
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
        name="Inicio"
        component={HomeApp}
        options={{
          tabBarIcon: () => <Icon name="home-outline" />,
        }}
      />
      <Tab.Screen
        name="Iniciar Sesion"
        component={FormsAutenticathionScreen}
        options={{
          tabBarIcon: () => <Icon name="person-outline" />,
        }}
      />
      <Tab.Screen
        name="Registrar"
        component={FormsSignUpScreen}
        options={{
          tabBarIcon: () => <Icon name="person-add-outline" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
