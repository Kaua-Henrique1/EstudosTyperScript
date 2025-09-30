// Dada uma data no formato dd/mm/aaaa (menor ou igual a data de
// hoje), imprima quantos dias se passaram
// do início do ano (01/01/2025)  até esta data. 
// Exemplo: Para o dia '11/04/2025' o resultado é 100.

let inicio = new Date('2025-1-1')
let hoje = new Date()


const diaMS = 86400000
const diasHoje = hoje.getTime()/diaMS
const diasInicio = inicio.getTime()/diaMS


console.log(diasHoje - diasInicio)