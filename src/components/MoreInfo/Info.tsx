import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  title: string;
  info: string | null | number;
  row?: boolean;
}

const Info = ({title, info = 'unknow', row = false}: Props) => {
  return (
    <View style={row ? styles.container : null}>
      <Text style={{...styles.subtitle, fontWeight: 'bold'}}>
        {title}
        {row ? ': ' : null}
      </Text>
      <Text style={styles.subtitle}>{info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
    marginTop: 10,
  },
  container: {
    flexDirection: 'row',
  },
  text: {
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Info;
