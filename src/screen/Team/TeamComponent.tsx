import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import CardTeamHero from '../../components/SuperHeroe/CardTeamHero';
import {RootState} from '../../redux/store';
import useStats from '../../hooks/useStats';

const TeamComponent = () => {
  const myTeam = useSelector((state: RootState) => state.heros.myTeam);
  const {combat, durability, intelligence, power, speed, strength} = useStats();

  const powerstats = [
    {nombre: 'Combate', stat: combat},
    {nombre: 'Durabilidad', stat: durability},
    {nombre: 'Inteligencia', stat: intelligence},
    {nombre: 'Poder', stat: power},
    {nombre: 'Velocidad', stat: speed},
    {nombre: 'Fuerza', stat: strength},
  ];

  return (
    <LinearGradient
      style={{flex: 1}}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#00b4db', '#0083b0', '#dd3e11']}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={styles.text}>Equipo</Text>
        {myTeam.length < 6 ? (
          <Text
            style={styles.text}>{`(${myTeam.length} miembros en total)`}</Text>
        ) : (
          <Text
            style={
              styles.text
            }>{`Completo con (${myTeam.length} miembros)`}</Text>
        )}
        <View style={styles.acumulativos}>
          {powerstats
            .sort(function (a, b) {
              return parseInt(b.stat) - parseInt(a.stat);
            })
            .map(elem => (
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: 'white',
                }}>{`${elem.nombre}: ${elem.stat}`}</Text>
            ))}
        </View>
        <FlatList
          style={{marginTop: 5}}
          data={myTeam}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CardTeamHero hero={item} />}
          numColumns={2}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 25,
    fontWeight: 'bold',
  },
  acumulativos: {
    marginTop: 5,
  },
});

export default TeamComponent;
