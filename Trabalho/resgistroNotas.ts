export enum situacaoEstudante {
    CURSANDO = "Cursando",
    APROVADO = "Aprovado(a)",
    REPROVADO = "Reprovado(a)",
    PROVAFINAL = "Prova final",
    CANCELADO = "Cancelado",
    TRANCADO = "Trancado(a)",
}

export class registroNotas { 
    private nomeEstudante: string;
    private matriculaEstudante: number;
    private mediaPorBimestre1: number;
    private mediaPorBimestre2: number;
    private mediaParcial: undefined | number;
    private situacaoEstudante: situacaoEstudante;
    private mediaFinal: undefined | number;
    private notaAvaliacaoFinal: undefined | number; 

    public calcularMedia() {
        this.mediaParcial = (this.mediaPorBimestre1 * 2 + this.mediaPorBimestre2 * 3) / 5
        if (this.mediaParcial >= 60 ) {
            situacaoEstudante.APROVADO
            this.mediaFinal = this.mediaParcial
        } else if (this.mediaParcial >= 10) {
            situacaoEstudante.PROVAFINAL
            this.calcularAvaliacaoFinal(8)
        } else {
            situacaoEstudante.REPROVADO
        }
    }

    public calcularAvaliacaoFinal(notaAvaliacaoFinal: number) {
        this.notaAvaliacaoFinal = notaAvaliacaoFinal
        this.mediaFinal = (notaAvaliacaoFinal + this.mediaParcial) / 2
        return this.mediaFinal
    }
}