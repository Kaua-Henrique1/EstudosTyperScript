"use strict";
exports.__esModule = true;
exports.diario = exports.turno = void 0;
var turno;
(function (turno) {
    turno["turnoMat"] = "Matutino";
    turno["turnoVes"] = "Vespertino";
    turno["turnoNot"] = "Noturno";
})(turno = exports.turno || (exports.turno = {}));
var diario = /** @class */ (function () {
    function diario(disciplina, docente, curso, idTurma, QuantidadeAulas, turno) {
        this._disciplina = disciplina;
        this._docente = docente;
        this._idTurma = idTurma;
        this._curso = curso;
        this._QuantidadeAulas = QuantidadeAulas;
        this._turno = turno;
        this._registroNotas = [];
    }
    Object.defineProperty(diario.prototype, "disciplina", {
        get: function () {
            return this._disciplina;
        },
        set: function (value) {
            this._disciplina = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(diario.prototype, "docente", {
        get: function () {
            return this._docente;
        },
        set: function (value) {
            this._docente = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(diario.prototype, "curso", {
        get: function () {
            return this._curso;
        },
        set: function (value) {
            this._curso = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(diario.prototype, "idTurma", {
        get: function () {
            return this._idTurma;
        },
        set: function (value) {
            this._idTurma = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(diario.prototype, "QuantidadeAulas", {
        get: function () {
            return this._QuantidadeAulas;
        },
        set: function (value) {
            this._QuantidadeAulas = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(diario.prototype, "turno", {
        get: function () {
            return this._turno;
        },
        set: function (value) {
            this._turno = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(diario.prototype, "registroNotas", {
        get: function () {
            return this._registroNotas;
        },
        set: function (value) {
            this._registroNotas = value;
        },
        enumerable: false,
        configurable: true
    });
    diario.prototype.adicionarEstudante = function (novoRegistro) {
        this._registroNotas.push(novoRegistro);
    };
    return diario;
}());
exports.diario = diario;
