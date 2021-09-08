import React from 'react';
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
import {registerUser} from '../../storage';

const image = CONST_APP.imageHome;

import CustomInput from '../../components/Input/CustomInput';

import {showMessage} from 'react-native-flash-message';

const signUpValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .matches(/(\w.+\s).+/, 'Ingrese al menos 2 nombres')
    .required('Este campo es requerido'),
  email: yup
    .string()
    .email('Por Favor ingrese un email valido')
    .required('Este campo es requerido'),
  password: yup
    .string()
    .matches(
      /\w*[a-z]\w*/,
      'La contraseña debe tener al menos una letra minuscula',
    )
    .matches(
      /\w*[A-Z]\w*/,
      'La contraseña debe tener al menos una letra mayuscula',
    )
    .matches(/\d/, 'La contraseña debe tener un numero')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'La contraseña debe tener un carácter especial',
    )
    .min(8, ({min}) => `La contraseña debe tener al menos ${min} caracteres`)
    .required('Este campo es requerido'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Las contraseñas no coinciden')
    .required('Se requiere confirmación de contraseña'),
});

function register(values: object) {
  const value = JSON.stringify(values);
  registerUser(value);
  showMessage({
    message: 'Operacion Exitosa',
    description: 'El usuario ha sido registrado con exito',
    type: 'success',
  });
}

const FormsSignUpScreen = () => {
  return (
    <>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.signupContainer}>
            <Text>Registro de Usuario</Text>

            <Formik
              validationSchema={signUpValidationSchema}
              initialValues={{
                fullName: '',
                email: '',
                password: '',
                confirmPassword: '',
              }}
              onSubmit={values => register(values)}>
              {({handleSubmit, isValid, values}) => (
                <>
                  <Field
                    component={CustomInput}
                    name="fullName"
                    placeholder="Nombre Completo"
                  />
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
                  <Field
                    component={CustomInput}
                    name="confirmPassword"
                    placeholder="Confirme Contraseña"
                    secureTextEntry
                  />

                  <Button
                    onPress={handleSubmit}
                    title="Aceptar"
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

export default FormsSignUpScreen;
