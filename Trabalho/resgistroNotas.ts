export enum SituacaoEstudante {
    CURSANDO = "Cursando",
    APROVADO = "Aprovado(a)",
    REPROVADO = "Reprovado(a)",
    PROVAFINAL = "Prova final",
    CANCELADO = "Cancelado",
    TRANCADO = "Trancado(a)",
}

export class registroNotas { 
    private _nomeEstudante: string;
    private _matriculaEstudante: number;
    private _situacaoEstudante: SituacaoEstudante = SituacaoEstudante.CURSANDO;
    private _mediaPorBimestre1: number;
    private _mediaPorBimestre2: number;
    private _mediaParcial: undefined | number = undefined;
    private _mediaFinal: undefined | number = undefined;
    private _notaAvaliacaoFinal: undefined | number; 

    constructor(_nomeEstudante: string,
        _matriculaEstudante: number,
        _mediaPorBimestre1: number,
        _mediaPorBimestre2: number) {
            this.nomeEstudante = _nomeEstudante
            this.matriculaEstudante=_matriculaEstudante
            this.mediaPorBimestre1=_mediaPorBimestre1
            this.mediaPorBimestre2=_mediaPorBimestre2
    }
    
    public get mediaPorBimestre1(): number {
        return this._mediaPorBimestre1;
    }
    public set mediaPorBimestre1(value: number) {
        this._mediaPorBimestre1 = value;
    }
    public get mediaPorBimestre2(): number {
        return this._mediaPorBimestre2;
    }
    public set mediaPorBimestre2(value: number) {
        this._mediaPorBimestre2 = value;
    }
    public get mediaParcial(): undefined | number {
        return this._mediaParcial;
    }
    public set mediaParcial(value: undefined | number) {
        this._mediaParcial = value;
    }
    public get mediaFinal(): undefined | number {
        return this._mediaFinal;
    }
    public set mediaFinal(value: undefined | number) {
        this._mediaFinal = value;
    }
    public get situacaoEstudante(): SituacaoEstudante {
        return this._situacaoEstudante;
    }
    public set situacaoEstudante(value: SituacaoEstudante) {
        this._situacaoEstudante = value;
    }
    public get nomeEstudante(): string {
        return this._nomeEstudante;
    }
    public set nomeEstudante(value: string) {
        this._nomeEstudante = value;
    }
    
    public get matriculaEstudante(): number {
        return this._matriculaEstudante;
    }
    public set matriculaEstudante(value: number) {
        this._matriculaEstudante = value;
    }
    public get notaAvaliacaoFinal(): undefined | number {
        return this._notaAvaliacaoFinal;
    }
    public set notaAvaliacaoFinal(value: undefined | number) {
        this._notaAvaliacaoFinal = value;
    }
    
    public calcularMedia() {
        this._mediaParcial = (this._mediaPorBimestre1 * 2 + this._mediaPorBimestre2 * 3) / 5
        if (this._mediaParcial >= 60 ) {
            this._situacaoEstudante = SituacaoEstudante.APROVADO
            this._mediaFinal = this._mediaParcial
        } else if (this._mediaParcial >= 10) {
            this._situacaoEstudante = SituacaoEstudante.PROVAFINAL
        } else {
            this._situacaoEstudante = SituacaoEstudante.REPROVADO
            this._mediaFinal = this._mediaParcial
        }
    }

    public calcularAvaliacaoFinal(notaAvaliacaoFinal: number) {
        this._notaAvaliacaoFinal = notaAvaliacaoFinal
        
        if (this._mediaParcial !== undefined) {
            this._mediaFinal = (notaAvaliacaoFinal + this._mediaParcial) / 2;

            if (this._mediaFinal >= 60) {
                this._situacaoEstudante = SituacaoEstudante.APROVADO;
            } else {
                this._situacaoEstudante = SituacaoEstudante.REPROVADO;
            }   
            return this._mediaFinal;
        }
    }
}

let kaua = new registroNotas("Kauã H",20251148060019,4,5)
let lucas = new registroNotas("Lucas",20251148060000,7,8)
let marcos = new registroNotas("Marcos",20251180609,10,7)
let giovanna = new registroNotas("Giovanna",2040619,8,9)
let carlito = new registroNotas("Carlito",2486465420019,1,3)