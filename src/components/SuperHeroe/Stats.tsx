import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Powerstats} from '../../interfaces/interfaces';
import Info from '../MoreInfo/Info';

interface Props {
  heroStats: Powerstats;
}

const Stats = ({heroStats}: Props) => {
  function calculateAverage(): string {
    const total =
      parseInt(heroStats.combat) +
      parseInt(heroStats.durability) +
      parseInt(heroStats.intelligence) +
      parseInt(heroStats.power) +
      parseInt(heroStats.speed) +
      parseInt(heroStats.strength);
    const promedio = total / 6;
    return promedio.toFixed();
  }

  return (
    <View style={styles.firstContainer}>
      <View style={styles.secondContainer}>
        <View>
          <Info title="Combat" info={heroStats.combat} row />
          <Info title="Durability" info={heroStats.durability} row />
          <Info title="Intelligence" info={heroStats.intelligence} row />
          <Info title="Power" info={heroStats.power} row />
          <Info title="Speed" info={heroStats.speed} row />
          <Info title="Strength" info={heroStats.strength} row />
        </View>
      </View>

      {/* Average */}
      <View style={styles.averageContainer}>
        <Info title="Promedio" info={calculateAverage()} row />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  averageContainer: {
    marginTop: 25,
    padding: 8,
  },
  firstContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default Stats;
