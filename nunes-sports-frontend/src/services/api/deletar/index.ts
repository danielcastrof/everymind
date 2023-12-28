import {api} from '../index';

export const deletar = async (id: string) => {
    const url = '/produtos/' + id;
     return api.delete(url);
  }