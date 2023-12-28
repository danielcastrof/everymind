import {api} from '../index';

export const buscaId = async (id: string) => {
    const url = '/produto/' + id;
     return api.get(url);
  }