import React, {useState, useEffect} from 'react';
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
import {addTeamMember, deleteTeamMember} from '../../redux/actions/heroActions';
import {showMessage} from 'react-native-flash-message';
import {useNavigation} from '@react-navigation/native';

const windowHeigth = Dimensions.get('window').height;

const HeroDetails = ({route}) => {
  const hero = useSelector((state: RootState) => state.heros.hero);
  const myTeam = useSelector((state: RootState) => state.heros.myTeam);
  const [complete, setComplete] = useState<boolean>(false);
  const [member, setMember] = useState<boolean>(false);
  const [carga, setCarga] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigator = useNavigation() as any;

  useEffect(() => {
    myTeam.forEach(element => {
      if (element.id === hero.id) {
        setMember(true);
      }
    });
    if (myTeam.length === 6) {
      setComplete(true);
    }
    setCarga(true);
  }, []);

  const showToast = (action: string) => {
    showMessage({
      message: 'Operacion Exitosa',
      description:
        action === 'add'
          ? 'El Superheroe se agregado al Equipo'
          : 'El Superheroe ha sido eliminado del Equipo',
      type: 'success',
    });
    navigator.reset({
      index: 0,
      routes: [{name: 'Team'}],
    });
  };

  return (
    <LinearGradient
      style={{flex: 1}}
      start={{x: 0.3, y: 0.3}}
      end={{x: 1, y: 1}}
      colors={['#220024', '#090979', '#00d4ff']}>
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
            <View>
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
          {route.params.team === false &&
            carga === true &&
            complete === false &&
            member === false && (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  dispatch(addTeamMember(hero)), showToast('add');
                }}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Agregar</Text>
              </TouchableOpacity>
            )}
          {route.params.team === true && (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                dispatch(deleteTeamMember(hero)), showToast('delete');
              }}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>Eliminar</Text>
            </TouchableOpacity>
          )}
          {route.params.team === false &&
            carga === true &&
            complete === true &&
            member === false && (
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                Equipo Lleno
              </Text>
            )}
          {route.params.team === false &&
            carga === true &&
            complete === false &&
            member === true && (
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                Ya esta agregado
              </Text>
            )}
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
    // textDecorationLine: 'underline',
  },
  subtitle: {
    fontSize: 25,
    fontWeight: '400',
  },
  addHero: {
    width: 60,
    height: 60,
    // backgroundColor: '#dd3e11',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
});

export default HeroDetails;
