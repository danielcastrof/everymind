import {api} from '../index';

export const buscaId = async (id: string) => {
    const url = '/produto/nome/' + id;
     return api.get(url);
  }