import { Disciplinas } from "./displinas";

export class Boletim {
    disciplina: string;
    b1: number;
    b2: number;
    b3: number;
    b4: number;
    mp: number;
    naf: number;
    mf: number;
    situacao: string;

    constructor(di: string, b1: number, b2: number, b3: number, b4: number) {
        this.disciplina = di;
        this.b1 = b1;
        this.b2 = b2;
        this.b3 = b3;
        this.b4 = b4;
        this.situacao = 'Cursando(a)';
        this.mp = 0;
        this.mf = 0;
        this.naf = 0;
    } 
    calcularMediaParcial() {
        this.mp = 
        +((this.b1*2 + this.b2*2 + this.b3*3 + this.b4*3) / 10).toFixed(1);
        if(this.mp >= 60) {
          this.situacao = 'Aprovado(a)';
          this.mf = this.mp;
        } else if(this.mp >= 10) {
          this.situacao = 'Avaliação Final';
        } else if(this.mp < 10) {
          this.mf = this.mp;
          this.situacao = 'Reprovado(a)';
        }
    }
    calcularMediaFinal(na: number) {
      this.naf = na;
      this.mf = (this.mp + this.naf)/2;
      if(this.mf >= 60) {
        this.situacao = 'Aprovado(a)';
      } else if(this.mp < 60) {
        this.situacao = 'Reprovado(a)';
      }
    }
  }