import {api} from '../index';

export interface Icadastro {
  id?: string;
  nome: string;
  codigo: string;
  descricao: string;
  preco: number;
}

export const cadastrar = async (dados: Icadastro) => {
    const url = '/produto';
     return api.post(url, dados);
  }