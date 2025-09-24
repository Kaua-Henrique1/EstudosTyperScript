"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let notas = [10, 20, 30];
let media = 0;
notas.forEach(n => {
    media += n;
});
console.log('Media da turma = ' + media / notas.length);
var Marca;
(function (Marca) {
    Marca[Marca["VW"] = 0] = "VW";
    Marca[Marca["Toyota"] = 1] = "Toyota";
    Marca[Marca["BMW"] = 2] = "BMW";
    Marca[Marca["Mercedes"] = 3] = "Mercedes";
    Marca[Marca["Ford"] = 4] = "Ford";
})(Marca || (Marca = {}));
var Curso;
(function (Curso) {
    Curso["TSI"] = "Tecnologia em Sistemas para Internet";
    Curso["INFO"] = "Tecnico Integrado em Informatica";
    Curso["MECA"] = "Tecnico Integrado em Informatica";
})(Curso || (Curso = {}));
// any: Qualquer tipo, pode ser por exemplo varias listas de diferentes tipos.
let carro = ['320i', 2023, 280000, Marca.VW];
let estudante = ['Kauã', 2006];
console.log(carro);
console.log(carro[0]);
