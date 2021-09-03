import {url} from './config';
import {Result} from '../interfaces/interfaces';

export function getSuperHeroes(param = 'Batman'): Promise<Result> {
  return fetch(`${url}search/${param}`)
    .then(res => res.json())
    .then(data => data)
    .catch(err => err);
}
