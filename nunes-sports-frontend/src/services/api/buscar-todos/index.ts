import {api} from '../index';

export const findId = async () => {
    const url = '/produto/';
     return api.get(url);
  }