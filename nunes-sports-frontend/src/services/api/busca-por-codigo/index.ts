import {api} from '../index';

export const buscaCodigo = async (codigo: string) => {
    const url = '/produtos/code/' + codigo;
     return api.get(url);
  }