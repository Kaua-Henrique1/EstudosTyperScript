"use strict";
// Faça um programa que defina uma constante objeto no
// formato JSON contendo o seu nome, matrícula, curso e IRA
// (Índice de Rendimento Acadêmico). Usando o formato template
// string, imprima uma frase contendo essas informações.
// Exemplo: “Maria é aluna de Informática com matrícula
// 202092923222 e possui IRA 83.2”. 
Object.defineProperty(exports, "__esModule", { value: true });
const kaua = {
    "nome": "Kauã Henrique",
    "matricula": 20251148060019,
    "curso": "TSI",
    "ira": 89
};
console.log(kaua.nome + " é aluno de " + kaua.curso + " com a matrícula " + kaua.matricula + ", com ira de " + kaua.ira + ".");
