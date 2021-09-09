import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector, useDispatch} from 'react-redux';
import Appearance from '../../components/SuperHeroe/Appearance';
import Stats from '../../components/SuperHeroe/Stats';
import Info from '../../components/MoreInfo/Info';
import {RootState} from '../../redux/store';
import {addTeamMember} from '../../redux/actions/heroActions';
import Icon from 'react-native-vector-icons/Ionicons';
import {showMessage} from 'react-native-flash-message';

const windowHeigth = Dimensions.get('window').height;

const HeroDetails = () => {
  const hero = useSelector((state: RootState) => state.heros.hero);

  const dispatch = useDispatch();

  const showToast = () => {
    showMessage({
      message: 'Operacion Exitosa',
      description: 'El Superheroe se agregado al Equipo',
      type: 'success',
    });
  };

  return (
    <LinearGradient
      style={{flex: 1}}
      start={{x: 0.3, y: 0.3}}
      end={{x: 1, y: 1}}
      colors={['#dd3e11', '#533c36', '#21201d']}>
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: hero.image.url}}
              style={styles.image}
              resizeMode="stretch"
            />
          </View>
          <Text style={styles.title}>{hero.name}</Text>

          <View style={{marginHorizontal: 10}}>
            <View style={{marginVertical: 5}}>
              <Appearance appearance={hero.appearance} />
            </View>

            <View style={{marginVertical: 5}}>
              <Info title="Occupation" info={hero.work.occupation} />
            </View>

            <View style={{marginVertical: 5}}>
              <Stats heroStats={hero.powerstats} />
            </View>
          </View>
        </ScrollView>
        <View style={styles.addHero}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              dispatch(addTeamMember(hero)), showToast();
            }}>
            <Icon name="add-outline" size={40} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: windowHeigth * 0.45,
  },
  image: {
    width: '100%',
    height: '100%',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  infoContainer: {
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
    textDecorationLine: 'underline',
  },
  subtitle: {
    fontSize: 25,
    fontWeight: '400',
  },
  addHero: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#dd3e11',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
});

export default HeroDetails;
