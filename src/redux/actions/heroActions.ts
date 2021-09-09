import {ActionTypes} from '../contants';
import {Result} from '../../interfaces/interfaces';

export function setHeros(heros: Result[]) {
  return {
    type: ActionTypes.SET_HEROS,
    payload: heros,
  };
}

export function setHeroDetailsId(hero: Result) {
  return {
    type: ActionTypes.SET_HERO_DETAILS_ID,
    payload: hero,
  };
}

export function addTeamMember(hero: Result) {
  return {
    type: ActionTypes.ADD_TEAM_MEMBER,
    payload: hero,
  };
}

export function deleteTeamMember(hero: Result) {
  return {
    type: ActionTypes.DELETE_TEAM_MEMBER,
    payload: hero,
  };
}
