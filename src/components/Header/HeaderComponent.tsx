import React, {useState, FC} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {HeaderPropsTypes} from '../../interfaces/interfaces';

const HeaderComponent: FC<HeaderPropsTypes> = ({searchData}) => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ingrese el nombre del Superheroe"
        style={styles.title}
        value={value}
        onChangeText={text => setValue(text)}
      />
      <TouchableOpacity onPress={() => searchData(value)} style={styles.button}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    elevation: 5,
  },
  title: {
    width: '70%',
    backgroundColor: '#e6e6e6',
  },
  button: {backgroundColor: '#BB86FC', padding: 7, marginTop: 10},
  buttonText: {fontSize: 20, color: '#fff'},
});

export default HeaderComponent;
