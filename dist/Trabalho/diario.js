export var turno;
(function (turno) {
    turno["turnoMat"] = "Matutino";
    turno["turnoVes"] = "Vespertino";
    turno["turnoNot"] = "Noturno";
})(turno || (turno = {}));
export class diario {
    _disciplina;
    _docente;
    _curso;
    _idTurma;
    _QuantidadeAulas;
    _turno;
    _registroNotas;
    constructor(disciplina, docente, curso, idTurma, QuantidadeAulas, turno) {
        this._disciplina = disciplina;
        this._docente = docente;
        this._idTurma = idTurma;
        this._curso = curso;
        this._QuantidadeAulas = QuantidadeAulas;
        this._turno = turno;
        this._registroNotas = [];
    }
    get disciplina() {
        return this._disciplina;
    }
    set disciplina(value) {
        this._disciplina = value;
    }
    get docente() {
        return this._docente;
    }
    set docente(value) {
        this._docente = value;
    }
    get curso() {
        return this._curso;
    }
    set curso(value) {
        this._curso = value;
    }
    get idTurma() {
        return this._idTurma;
    }
    set idTurma(value) {
        this._idTurma = value;
    }
    get QuantidadeAulas() {
        return this._QuantidadeAulas;
    }
    set QuantidadeAulas(value) {
        this._QuantidadeAulas = value;
    }
    get turno() {
        return this._turno;
    }
    set turno(value) {
        this._turno = value;
    }
    get registroNotas() {
        return this._registroNotas;
    }
    set registroNotas(value) {
        this._registroNotas = value;
    }
    adicionarEstudante(novoRegistro) {
        this._registroNotas.push(novoRegistro);
    }
}
