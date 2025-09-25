"use strict";
// Dada uma data no formato dd/mm/aaaa (menor ou igual a data de
// hoje), imprima quantos dias se passaram
// do início do ano (01/01/2025)  até esta data. 
// Exemplo: Para o dia '11/04/2025' o resultado é 100.
Object.defineProperty(exports, "__esModule", { value: true });
let dataInicioAno = new Date('2025-1-1');
let dataHoje = new Date('2025-9-25');
let cosnt = [31, 28, 31, 30, 31, 30, 31, 31, 25];
console.log(dataHoje);
console.log(dataInicioAno);
