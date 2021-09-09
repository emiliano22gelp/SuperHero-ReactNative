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
      (heroStats.combat !== 'null' ? parseInt(heroStats.combat) : 0) +
      (heroStats.durability !== 'null' ? parseInt(heroStats.durability) : 0) +
      (heroStats.intelligence !== 'null'
        ? parseInt(heroStats.intelligence)
        : 0) +
      (heroStats.power !== 'null' ? parseInt(heroStats.power) : 0) +
      (heroStats.speed !== 'null' ? parseInt(heroStats.speed) : 0) +
      (heroStats.strength !== 'null' ? parseInt(heroStats.strength) : 0);
    const promedio = total / 6;
    return promedio.toFixed();
  }

  return (
    <View style={styles.firstContainer}>
      <View style={styles.secondContainer}>
        <View>
          <Info
            title="Combat"
            info={heroStats.combat !== 'null' ? heroStats.combat : '0'}
            row
          />
          <Info
            title="Durability"
            info={heroStats.durability !== 'null' ? heroStats.durability : '0'}
            row
          />
          <Info
            title="Intelligence"
            info={
              heroStats.intelligence !== 'null' ? heroStats.intelligence : '0'
            }
            row
          />
          <Info
            title="Power"
            info={heroStats.power !== 'null' ? heroStats.power : '0'}
            row
          />
          <Info
            title="Speed"
            info={heroStats.speed !== 'null' ? heroStats.speed : '0'}
            row
          />
          <Info
            title="Strength"
            info={heroStats.strength !== 'null' ? heroStats.strength : '0'}
            row
          />
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
