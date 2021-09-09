import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Appearance as AppearanceIdentifier} from '../../interfaces/interfaces';
import Info from '../MoreInfo/Info';

interface Props {
  appearance: AppearanceIdentifier;
}

export default function Appearance({appearance}: Props) {
  return (
    <View>
      <View style={styles.container}>
        <Info title="Raza" info={appearance.race} />
        <Info title="Genero" info={appearance.gender} />
        <Info title="Altura" info={appearance.height[1]} />
        <Info title="Peso" info={appearance.weight[1]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
