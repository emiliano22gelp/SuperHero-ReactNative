import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (values: string) => {
  const jsonValue = JSON.stringify(values);
  await AsyncStorage.setItem('@user', jsonValue);
};

export const getData = async () => {
  const value = await AsyncStorage.getItem('@user');
  if (value !== null) {
    return JSON.parse(value);
  } else {
    return 'undefined';
  }
};

export const getSystemUser = async () => {
  const value = await AsyncStorage.getItem('@system_user');
  if (value !== null) {
    return JSON.parse(value);
  } else {
    return 'undefined';
  }
};

function aplicar(res: object, values: string) {
  var new_value = Object.values(res);
  new_value.push(JSON.parse(values));
  AsyncStorage.setItem('@system_user', JSON.stringify(new_value));
}

export const registerUser = async (values: string) => {
  getSystemUser()
    .then(res => aplicar(res, values))
    .catch(err => console.log(err));
};

function autenticar(res: object, values: string) {
  let exito = false;
  var users = Object.values(res);
  const user_Act = JSON.parse(values);
  users.forEach(element => {
    if (
      element.email === user_Act.email &&
      element.password === user_Act.password
    ) {
      exito = true;
      AsyncStorage.setItem('@user', values);
    }
  });
  return exito;
}

export const loginUser = async (values: string) => {
  return getSystemUser()
    .then(res => autenticar(res, values))
    .catch(err => console.log(err));
};

export const logoutUser = () => {
  AsyncStorage.removeItem('@user');
};
