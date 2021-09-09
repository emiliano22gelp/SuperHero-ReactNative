import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Result} from '../../../interfaces/interfaces';
import {useDispatch} from 'react-redux';
import {setHeroDetailsId} from '../../../redux/actions/heroActions';

interface Props {
  hero: Result;
}

const CardTeamHero = ({hero}: Props) => {
  const dispatch = useDispatch();
  const navigator = useNavigation() as any;

  function navigateToDetails() {
    dispatch(setHeroDetailsId(hero));
    navigator.navigate('Detail', {
      team: true,
    });
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => navigateToDetails()}>
      <View style={styles.card}>
        <Image source={{uri: hero.image.url}} style={styles.image} />
      </View>
      <Text style={styles.name}>{hero.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 170,
    height: 100,
    margin: 10,
    marginVertical: 18,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  name: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: -20,
    fontWeight: '600',
    color: 'white',
  },
});

export default CardTeamHero;
