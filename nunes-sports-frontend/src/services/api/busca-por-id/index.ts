import {api} from '../index';

export const buscaId = async (id: string) => {
    const url = '/produtos/' + id;
     return api.get(url);
  }