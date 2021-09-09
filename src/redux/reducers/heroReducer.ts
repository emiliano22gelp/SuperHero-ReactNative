import {Result} from '../../interfaces/interfaces';
import {ActionTypes} from '../contants';

interface defaultStateInterface {
  heros: Result[];
  hero: Result | {};
  myTeam: Result[];
}

interface action {
  type: string;
  payload: any;
}

const defaultState: defaultStateInterface = {
  heros: [],
  hero: {},
  myTeam: [],
};

export function herosReducer(
  state: defaultStateInterface = defaultState,
  {type, payload}: action,
) {
  switch (type) {
    case ActionTypes.SET_HEROS:
      return {
        ...state,
        heros: payload,
      };
    case ActionTypes.SET_HERO_DETAILS_ID:
      return {
        ...state,
        hero: payload,
      };
    case ActionTypes.ADD_TEAM_MEMBER:
      let newArray = state.myTeam;
      newArray.push(payload);
      return {
        ...state,
        myTeam: newArray,
      };
    case ActionTypes.DELETE_TEAM_MEMBER:
      let nuevoArray = state.myTeam;
      let count = 0;
      nuevoArray.forEach(element => {
        if (element.id === payload.id) {
          nuevoArray.splice(count, 1);
        }
        count = count + 1;
      });
      return {
        ...state,
        myTeam: nuevoArray,
      };
    default:
      return state;
  }
}
