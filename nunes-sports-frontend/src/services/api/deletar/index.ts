import {api} from '../index';

export const deletar = async (id: string) => {
    const url = '/produto/' + id;
     return api.delete(url);
  }