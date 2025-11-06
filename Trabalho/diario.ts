import { registroNotas } from "./resgistroNotas";

export enum turno {
    turnoMat = 'Matutino',
    turnoVes = 'Vespertino',
    turnoNot = 'Noturno'
} 
export class diario {
    private disciplina: string;
    private docente: string;
    private curso: string;
    private idTurma: string;
    private QuantidadeAulas: number;
    private turno: turno
    private registroNotas: registroNotas
}