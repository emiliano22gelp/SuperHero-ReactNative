import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import {getData} from './src/storage';
import TabNavigator from './src/navigation/TabNavigator';
import TabNavigatorAutenticated from './src/navigation/TabNavigatorAutenticated';
//import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [isAutenticated, setIsAutenticated] = useState(null);
  useEffect(() => {
    // AsyncStorage.clear();
    getData()
      .then(res => setIsAutenticated(res))
      .catch(err => console.log(err));
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        {isAutenticated === 'undefined' ? (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Login">
            <Stack.Screen name="Login" component={TabNavigator} />
            <Stack.Screen name="Team" component={TabNavigatorAutenticated} />
          </Stack.Navigator>
        ) : (
          isAutenticated !== null && (
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName="Team">
              <Stack.Screen name="Login" component={TabNavigator} />
              <Stack.Screen name="Team" component={TabNavigatorAutenticated} />
            </Stack.Navigator>
          )
        )}
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};

export default App;
