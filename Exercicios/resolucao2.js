"use strict";
// Calcule quanto um estudante precisa tirar
//  na avaliação final para ser aprovado em
//   uma disciplina do IFRN dada a sua média parcial.
Object.defineProperty(exports, "__esModule", { value: true });
let mediaParcial = 30;
let provaFinal = 60;
let mediaFinal = (mediaParcial + provaFinal) / 2;
console.log("Media Final para aprovado: " + mediaFinal);
