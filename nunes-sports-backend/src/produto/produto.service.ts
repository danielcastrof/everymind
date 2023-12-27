import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProdutoService {
  constructor(private readonly prisma: PrismaService){}
  
  async create(createProdutoDto: CreateProdutoDto) {
    const produto = {
      ...createProdutoDto, codigo: createProdutoDto.codigo.toUpperCase()
    }

    const createdProduto = await this.prisma.produto.create({data: {
        "nome" : produto.nome, 
        "codigo": produto.codigo,
        "descricao": produto.descricao,
        "preco": produto.preco,
      }
    });
    
    return {
      ...createdProduto,
    }
  }

  async findAll() {
    const finds = await this.prisma.produto.findMany({
      orderBy: { 
        nome: 'asc',
      }
    });
    return finds;
  }

  async findOne(id: string) {
    try {
      const finds = await this.prisma.produto.findUnique({
        where: { id }
      });
      if(finds)
      return finds;

      else
      return `Não foi encontrado nenhum produto com o id: ${id}`;
    } catch (error) {
      throw new Error(`Erro ao buscar produto: ${error.message}`);
    }
  }

  async findByCode(codigo: string) {
    try {
      const finds = await this.prisma.produto.findUnique({
        where: {codigo: codigo.toUpperCase()}
      });
      if(finds)
      return finds;

      else
      return `Não foi encontrado nenhum produto com o código: ${codigo}`;
    } catch (error) {
      throw new Error(`Erro ao buscar produto: ${error.message}`);
    }
  }

  async update(id: string, updateProdutoDto: UpdateProdutoDto) {
    const produto = await this.prisma.produto.findUnique({
      where: {id}
    })

    if (!produto) {
      return `Produto com o ID ${id} não encontrado`;
    }
    
    const updateProduto = await this.prisma.produto.update({
      where: {id: produto.id},
      data: {
        "nome" : updateProdutoDto.nome, 
        "codigo": updateProdutoDto.codigo,
        "descricao": updateProdutoDto.descricao,
        "preco": updateProdutoDto.preco,
      }
    })
    return updateProduto;
  }

  async remove(id: string) {
    try {
      const produto = await this.prisma.produto.findUnique({
        where: {id}
      });
  
      if (!produto) {
        return `Produto com o ID ${id} não encontrado`;
      }
  
      await this.prisma.produto.delete({
        where: {
          id: produto.id
        }
      });
  
      return `O item ${produto.nome} foi removido com sucesso!`;
    } catch (error) {
      throw new Error(`Erro ao remover o produto: ${error.message}`);
    }
  }
}
