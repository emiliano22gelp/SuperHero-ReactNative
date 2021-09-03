import React, {useState, useEffect} from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import CardHeroe from '../../components/SuperHeroe/CardHeroe';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import {getSuperHeroes} from '../../api/Heroes';
import {Result} from '../../interfaces/interfaces';

export default function SearchHero(): JSX.Element {
  const [data, setData] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getSuperHeroes().then(res => {
      if (res && res.results) {
        setData(res.results);
        setLoading(false);
      }
    });
  }, []);

  const searchData = (value: string) => {
    setLoading(true);
    getSuperHeroes(value).then(res => {
      if (res && res.results) {
        setData(res.results);
        setLoading(false);
      } else {
        setError('No se encontraron resultados');
        setLoading(false);
      }
    });
  };

  if (loading) {
    return <ActivityIndicator size="large" style={styles.spinner} />;
  }
  return (
    <View style={styles.container}>
      {error === '' ? (
        <FlatList
          ListHeaderComponent={() => (
            <HeaderComponent searchData={searchData} />
          )}
          data={data}
          renderItem={CardHeroe}
          keyExtractor={item => item.id}
        />
      ) : (
        <View>
          <Text style={styles.container_text}>{error}</Text>
          <TouchableOpacity style={styles.button} onPress={() => setError('')}>
            <Text style={styles.text}>Volver a Intentar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7fffd4',
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_text: {fontSize: 25},
  button: {padding: 7, marginTop: 10},
  text: {color: '#0000cd'},
});
