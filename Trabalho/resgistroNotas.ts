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
    private _notaBim1: number;
    private _notaBim2: number;
    private _mediaParcial: undefined | number = undefined;
    private _mediaFinal: undefined | number = undefined;
    private _notaAvaliacaoFinal: undefined | number; 

    constructor(_nomeEstudante: string,
        _matriculaEstudante: number,
        _notaBim1: number,
        _notaBim2: number) {
            this.nomeEstudante = _nomeEstudante
            this.matriculaEstudante=_matriculaEstudante
            this.notaBim1=_notaBim1
            this.notaBim2=_notaBim2
    }
    
    public get notaBim1(): number {
        return this._notaBim1;
    }
    public set notaBim1(value: number) {
        this._notaBim1 = value;
    }
    public get notaBim2(): number {
        return this._notaBim2;
    }
    public set notaBim2(value: number) {
        this._notaBim2 = value;
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
    
    public calcularMedia()  {
        if (this._notaBim1 !=0 && this._notaBim2!=0){
            this._mediaParcial = ((this._notaBim1 * 2) + (this._notaBim2 * 3)) / 5

            if (this._mediaParcial >= 60 ) {
                this._situacaoEstudante = SituacaoEstudante.APROVADO
                
            } else if (this._mediaParcial >= 10) {
                this._situacaoEstudante = SituacaoEstudante.PROVAFINAL
            } else {
                this._situacaoEstudante = SituacaoEstudante.REPROVADO
               
            }
             
            return {media_parcial: this._mediaParcial, situacao: this.situacaoEstudante}

        }
        
       

    }

    public calcularMediaFinal(notaAvaliacaoFinal?: number | undefined) {
        this.calcularMedia()

        if (this._mediaParcial && notaAvaliacaoFinal > 0) {
            this._mediaFinal = (notaAvaliacaoFinal + this._mediaParcial) / 2;

            if (this._mediaFinal >= 60) {
                this._situacaoEstudante = SituacaoEstudante.APROVADO;
            } else {
                this._situacaoEstudante = SituacaoEstudante.REPROVADO;
            }  

            this._notaAvaliacaoFinal = notaAvaliacaoFinal

            return this._mediaFinal;
        } else {
            this._situacaoEstudante = SituacaoEstudante.REPROVADO
            this.mediaFinal = 0
            return this.mediaFinal
        }

       
    }
}

let kaua = new registroNotas("Kauã H",20251148060019,60,50)
let lucas = new registroNotas("Lucas",20251148060000,7,8)
let marcos = new registroNotas("Marcos",20251180609,10,7)
let giovanna = new registroNotas("Giovanna",2040619,8,9)
let carlito = new registroNotas("Carlito",2486465420019,1,3)

console.log(kaua.calcularMedia())
console.log(kaua.calcularMediaFinal())
