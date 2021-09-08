import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
  ImageBackground,
} from 'react-native';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import {CONST_APP} from '../../utils/const';
import {loginUser} from '../../storage';
import {showMessage} from 'react-native-flash-message';
import {useNavigation} from '@react-navigation/native';

const image = CONST_APP.imageHome;

import CustomInput from '../../components/Input/CustomInput';

const signUpValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Por Favor ingrese un email valido')
    .required('Este campo es requerido'),
  password: yup.string().required('Este campo es requerido'),
});

const FormsAutenticathionScreen = () => {
  const navigation = useNavigation();
  const verifyLogin = (result: boolean | void) => {
    if (result === false) {
      showMessage({
        message: 'Atencion',
        description: 'El email y/o contraseña son incorrectos',
        type: 'danger',
      });
    } else {
      navigation.reset({
        index: 0,
        routes: [{name: 'Team'}],
      });
    }
  };

  function login(values: object) {
    const value = JSON.stringify(values);
    loginUser(value)
      .then(result => verifyLogin(result))
      .catch(err => console.log(err));
  }

  return (
    <>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.signupContainer}>
            <Text>Iniciar Sesion</Text>

            <Formik
              validationSchema={signUpValidationSchema}
              initialValues={{
                email: '',
                password: '',
              }}
              onSubmit={values => login(values)}>
              {({handleSubmit, isValid, values}) => (
                <>
                  <Field
                    component={CustomInput}
                    name="email"
                    placeholder="Correo Electronico"
                    keyboardType="email-address"
                  />
                  <Field
                    component={CustomInput}
                    name="password"
                    placeholder="Contraseña"
                    secureTextEntry
                  />
                  <Button
                    onPress={handleSubmit}
                    title="Acceder"
                    disabled={!isValid || values.email === ''}
                  />
                </>
              )}
            </Formik>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  signupContainer: {
    width: '80%',
    alignItems: 'center',
    // backgroundColor: 'white',
    padding: 10,
    elevation: 10,
    backgroundColor: '#e6e6e6',
  },
});

export default FormsAutenticathionScreen;
