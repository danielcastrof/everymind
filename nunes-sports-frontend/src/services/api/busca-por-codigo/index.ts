import {api} from '../index';

export const buscaCodigo = async (codigo: string) => {
    const url = '/produto/code/' + codigo;
     return api.get(url);
  }