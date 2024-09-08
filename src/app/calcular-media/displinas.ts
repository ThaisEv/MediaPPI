export class Disciplinas{
    nome: string;
    docente: string;
    ch: number;

    constructor(nm: string, dc: string, ch: number) {
        this.nome = nm;
        this.docente = dc;
        this.ch = ch;
    }
}