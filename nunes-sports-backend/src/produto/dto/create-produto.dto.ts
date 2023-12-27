import { ApiProperty } from "@nestjs/swagger";
import { Produto } from "../entities/produto.entity";

export class CreateProdutoDto extends Produto{
  @ApiProperty({example: 'Bola de basquete'})
  nome: string;

  @ApiProperty({example: '123456'})
  codigo: string;

  @ApiProperty({example: 'Bola de basquete oficial da NBA'})
  descricao: string;

  @ApiProperty({example: '100.00'})
  preco: number;
  
}
