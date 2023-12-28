import {api} from '../index';

export interface Iatualizar {
  id?: string;
  nome?: string;
  codigo?: string;
  descricao?: string;
  preco?: number;
}

export const atualizar = async (dados: Iatualizar) => {
    const url = '/produto/' + dados.id;
     return api.patch(url, dados);
  }