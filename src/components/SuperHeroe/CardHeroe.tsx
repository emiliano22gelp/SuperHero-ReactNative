import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Result} from '../../interfaces/interfaces';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {setHeroDetailsId} from '../../redux/actions/heroActions';

interface Props {
  hero: Result;
}

const CardHeroe = ({hero}: Props) => {
  const dispatch = useDispatch();
  const navigator = useNavigation() as any;

  function navigateToDetails() {
    dispatch(setHeroDetailsId(hero));
    navigator.navigate('Detail', {
      team: false,
    });
  }
  return (
    <View style={styles.itemContainer}>
      <Image source={{uri: hero.image.url}} style={styles.itemImage} />

      <View style={{flexDirection: 'column'}}>
        <Text style={styles.itemTitle}>{hero.name}</Text>
        <Text
          style={[
            styles.itemTitle,
            styles.text_prop,
          ]}>{`Inteligencia: ${hero.powerstats.intelligence}`}</Text>
        <Text
          style={[
            styles.itemTitle,
            styles.text_prop,
          ]}>{`Durabilidad: ${hero.powerstats.durability}`}</Text>
        <Text
          style={[
            styles.itemTitle,
            styles.text_prop,
          ]}>{`Velocidad: ${hero.powerstats.speed}`}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToDetails()}>
        <Text style={styles.button_text}>Detalle</Text>
      </TouchableOpacity>
    </View>
  );
};

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

export default CardHeroe;
