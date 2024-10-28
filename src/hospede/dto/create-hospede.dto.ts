import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { EmailIsUnique } from '../validator/email-is-unique.validator';
import { CPFIsUnique } from '../validator/cpf-is-unique.validator';
import { RGIsUnique } from '../validator/rg-is-unique.validator';

export class CreateHospedeDTO {

    @IsString()
    @IsNotEmpty({message:'Nome deve ser preenchido'})
    nome: string;

    @IsEmail()
    @IsNotEmpty()
    @EmailIsUnique({message:'Ja existe um usuario com este e-mail'})
    email: string;

    @IsNotEmpty()
    @RGIsUnique({message:'Ja existe um usuario com este RG'})
    rg: string;

    @IsNotEmpty()
    @CPFIsUnique({message:'Ja existe um usuario com este CPF'})
    cpf: string;

    @IsNotEmpty({message:'Endereço deve ser preenchido'})
    rua: string;

    @IsNotEmpty({message:'Número deve ser preenchido'})
    numero: number;

    @IsOptional()
    complemento: string;

    @IsNotEmpty({message:'Bairro deve ser preenchido'})
    bairro: string;

    @IsNotEmpty({message:'Cidade deve ser preenchido'})
    cidade: string;

    @IsNotEmpty({message:'Estado deve ser preenchido'})
    estado: string;

    @IsNotEmpty({message:'País deve ser preenchido'})
    pais: string;
}
