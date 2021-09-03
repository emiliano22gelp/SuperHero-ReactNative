import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Result} from '../../interfaces/interfaces';

export default function CardHeroe({item}: {item: Result}): JSX.Element {
  return (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.image.url}} style={styles.itemImage} />

      <View style={{flexDirection: 'column'}}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text
          style={[
            styles.itemTitle,
            styles.text_prop,
          ]}>{`Inteligencia: ${item.powerstats.intelligence}`}</Text>
        <Text
          style={[
            styles.itemTitle,
            styles.text_prop,
          ]}>{`Durabilidad: ${item.powerstats.durability}`}</Text>
        <Text
          style={[
            styles.itemTitle,
            styles.text_prop,
          ]}>{`Velocidad: ${item.powerstats.speed}`}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text_prop: {fontSize: 13},
  itemContainer: {
    //Estilos para el itemContainer
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    marginBottom: 1,
    backgroundColor: '#fff',
  },
  itemTitle: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    marginLeft: 10,
    color: 'gray',
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  button: {
    height: 50,
    width: 50,
  },
  button_text: {color: 'green'},
});
