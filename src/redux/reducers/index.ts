import {combineReducers} from 'redux';
import {herosReducer} from './heroReducer';

const reducers = combineReducers({
  heros: herosReducer,
});

export default reducers;
