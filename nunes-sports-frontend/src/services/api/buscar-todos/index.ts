import {api} from '../index';

export const findId = async () => {
    const url = '/produtos/';
     return api.get(url);
  }