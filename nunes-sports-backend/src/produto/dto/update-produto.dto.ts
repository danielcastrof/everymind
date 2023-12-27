import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutoDto } from './create-produto.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProdutoDto extends PartialType(CreateProdutoDto) {
  @ApiProperty({example: 'Bola de basquete'})
  nome: string;

  @ApiProperty({example: '123456'})
  codigo: string;

  @ApiProperty({example: 'Bola de basquete oficial da NBA'})
  descricao: string;

  @ApiProperty({example: '100.00'})
  preco: number;
}
