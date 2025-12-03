"use strict";
exports.__esModule = true;
exports.registroNotas = exports.SituacaoEstudante = void 0;
var SituacaoEstudante;
(function (SituacaoEstudante) {
    SituacaoEstudante["CURSANDO"] = "Cursando";
    SituacaoEstudante["APROVADO"] = "Aprovado(a)";
    SituacaoEstudante["REPROVADO"] = "Reprovado(a)";
    SituacaoEstudante["PROVAFINAL"] = "Prova final";
    SituacaoEstudante["CANCELADO"] = "Cancelado";
    SituacaoEstudante["TRANCADO"] = "Trancado(a)";
})(SituacaoEstudante = exports.SituacaoEstudante || (exports.SituacaoEstudante = {}));
var registroNotas = /** @class */ (function () {
    function registroNotas(_nomeEstudante, _matriculaEstudante, _notaBim1, _notaBim2) {
        this._situacaoEstudante = SituacaoEstudante.CURSANDO;
        this._mediaParcial = undefined;
        this._mediaFinal = undefined;
        this.nomeEstudante = _nomeEstudante;
        this.matriculaEstudante = _matriculaEstudante;
        this.notaBim1 = _notaBim1;
        this.notaBim2 = _notaBim2;
    }
    Object.defineProperty(registroNotas.prototype, "notaBim1", {
        get: function () {
            return this._notaBim1;
        },
        set: function (value) {
            this._notaBim1 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(registroNotas.prototype, "notaBim2", {
        get: function () {
            return this._notaBim2;
        },
        set: function (value) {
            this._notaBim2 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(registroNotas.prototype, "mediaParcial", {
        get: function () {
            return this._mediaParcial;
        },
        set: function (value) {
            this._mediaParcial = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(registroNotas.prototype, "mediaFinal", {
        get: function () {
            return this._mediaFinal;
        },
        set: function (value) {
            this._mediaFinal = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(registroNotas.prototype, "situacaoEstudante", {
        get: function () {
            return this._situacaoEstudante;
        },
        set: function (value) {
            this._situacaoEstudante = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(registroNotas.prototype, "nomeEstudante", {
        get: function () {
            return this._nomeEstudante;
        },
        set: function (value) {
            this._nomeEstudante = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(registroNotas.prototype, "matriculaEstudante", {
        get: function () {
            return this._matriculaEstudante;
        },
        set: function (value) {
            this._matriculaEstudante = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(registroNotas.prototype, "notaAvaliacaoFinal", {
        get: function () {
            return this._notaAvaliacaoFinal;
        },
        set: function (value) {
            this._notaAvaliacaoFinal = value;
        },
        enumerable: false,
        configurable: true
    });
    registroNotas.prototype.calcularMedia = function () {
        if (this._notaBim1 != 0 && this._notaBim2 != 0) {
            this._mediaParcial = ((this._notaBim1 * 2) + (this._notaBim2 * 3)) / 5;
            if (this._mediaParcial >= 60) {
                this._situacaoEstudante = SituacaoEstudante.APROVADO;
            }
            else if (this._mediaParcial >= 10) {
                this._situacaoEstudante = SituacaoEstudante.PROVAFINAL;
            }
            else {
                this._situacaoEstudante = SituacaoEstudante.REPROVADO;
            }
            return { media_parcial: this._mediaParcial, situacao: this.situacaoEstudante };
        }
    };
    registroNotas.prototype.calcularMediaFinal = function (notaAvaliacaoFinal) {
        if (this._situacaoEstudante !== SituacaoEstudante.PROVAFINAL || this._mediaParcial === undefined) {
            return undefined;
        }
        this._mediaFinal = (notaAvaliacaoFinal + this._mediaParcial) / 2;
        if (this._mediaFinal >= 60) {
            this._situacaoEstudante = SituacaoEstudante.APROVADO;
        }
        else {
            this._situacaoEstudante = SituacaoEstudante.REPROVADO;
        }
        this._notaAvaliacaoFinal = notaAvaliacaoFinal;
        return { identificacao: "Aluno(a): ", media_final: this.mediaFinal, situacao: this.situacaoEstudante };
    };
    return registroNotas;
}());
exports.registroNotas = registroNotas;
