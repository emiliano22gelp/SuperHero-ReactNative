import React from 'react';
import {Alert, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {logoutUser} from '../../storage';

const SignOutComponent = () => {
  const navigator = useNavigation() as any;

  function logout() {
    logoutUser();
    navigator.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  }
  const alerta = Alert.alert(
    'Confirmacion',
    '¿Esta seguro que desea cerrar la sesion?',
    [
      {
        text: 'Cancelar',
        onPress: () =>
          navigator.reset({
            index: 0,
            routes: [{name: 'Team'}],
          }),
        style: 'cancel',
      },
      {text: 'Aceptar', onPress: () => logout()},
    ],
  );

  return <View>{alerta}</View>;
};

export default SignOutComponent;
