import {createStore} from 'redux';
import {Result} from '../interfaces/interfaces';
import reducers from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['heros'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return {store, persistor};
};

export interface RootState {
  heros: {
    heros: Result[];
    hero: Result;
    myTeam: Result[];
  };
}
