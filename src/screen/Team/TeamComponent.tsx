import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import CardTeamHero from '../../components/SuperHeroe/CardTeamHero';
import {RootState} from '../../redux/store';
import useStats from '../../hooks/useStats';

const TeamComponent = () => {
  const [myTeam] = useState(
    useSelector((state: RootState) => state.heros.myTeam),
  );

  const {combat, durability, intelligence, power, speed, strength} = useStats();

  return (
    <LinearGradient
      style={{flex: 1}}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#00b4db', '#0083b0', '#dd3e11']}>
      <View style={{flex: 1, alignItems: 'center'}}>
        {console.log(myTeam)}
        <Text style={styles.text}>Equipo</Text>
        <Text
          style={styles.text}>{`(${myTeam.length} miembros en total)`}</Text>
        <FlatList
          style={{marginTop: 20}}
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
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default TeamComponent;
