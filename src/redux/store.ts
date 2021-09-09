import {createStore} from 'redux';
import {Result} from '../interfaces/interfaces';
import reducers from './reducers';

const store = createStore(reducers, {});

export default store;

export interface RootState {
  heros: {
    heros: Result[];
    hero: Result;
    myTeam: Result[];
  };
}
