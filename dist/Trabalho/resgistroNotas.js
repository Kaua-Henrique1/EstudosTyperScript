export var SituacaoEstudante;
(function (SituacaoEstudante) {
    SituacaoEstudante["CURSANDO"] = "Cursando";
    SituacaoEstudante["APROVADO"] = "Aprovado(a)";
    SituacaoEstudante["REPROVADO"] = "Reprovado(a)";
    SituacaoEstudante["PROVAFINAL"] = "Prova final";
    SituacaoEstudante["CANCELADO"] = "Cancelado";
    SituacaoEstudante["TRANCADO"] = "Trancado(a)";
})(SituacaoEstudante || (SituacaoEstudante = {}));
export class registroNotas {
    _nomeEstudante;
    _matriculaEstudante;
    _situacaoEstudante = SituacaoEstudante.CURSANDO;
    _notaBim1;
    _notaBim2;
    _mediaParcial = undefined;
    _mediaFinal = undefined;
    _notaAvaliacaoFinal;
    constructor(_nomeEstudante, _matriculaEstudante, _notaBim1, _notaBim2) {
        this.nomeEstudante = _nomeEstudante;
        this.matriculaEstudante = _matriculaEstudante;
        this.notaBim1 = _notaBim1;
        this.notaBim2 = _notaBim2;
    }
    get notaBim1() {
        return this._notaBim1;
    }
    set notaBim1(value) {
        this._notaBim1 = value;
    }
    get notaBim2() {
        return this._notaBim2;
    }
    set notaBim2(value) {
        this._notaBim2 = value;
    }
    get mediaParcial() {
        return this._mediaParcial;
    }
    set mediaParcial(value) {
        this._mediaParcial = value;
    }
    get mediaFinal() {
        return this._mediaFinal;
    }
    set mediaFinal(value) {
        this._mediaFinal = value;
    }
    get situacaoEstudante() {
        return this._situacaoEstudante;
    }
    set situacaoEstudante(value) {
        this._situacaoEstudante = value;
    }
    get nomeEstudante() {
        return this._nomeEstudante;
    }
    set nomeEstudante(value) {
        this._nomeEstudante = value;
    }
    get matriculaEstudante() {
        return this._matriculaEstudante;
    }
    set matriculaEstudante(value) {
        this._matriculaEstudante = value;
    }
    get notaAvaliacaoFinal() {
        return this._notaAvaliacaoFinal;
    }
    set notaAvaliacaoFinal(value) {
        this._notaAvaliacaoFinal = value;
    }
    calcularMedia() {
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
    }
    calcularMediaFinal(notaAvaliacaoFinal) {
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
    }
}
