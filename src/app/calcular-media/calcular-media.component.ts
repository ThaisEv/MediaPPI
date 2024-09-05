import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrl: './calcular-media.component.css'
})
export class CalcularMediaComponent {
  mediaParcial: number | undefined;
  situacao: string;

  constructor() {
    this.mediaParcial = undefined;
    this.situacao = 'Cursando(a)';
  }

  calcularMediaParcial(b1: number, b2: number, b3: number, b4: number) {
    this.mediaParcial = 
    +((b1*2 + b2*2 + b3*3 + b4*3) / 10).toFixed(1);
    if(this.mediaParcial >= 60) {
      this.situacao = 'Aprovado(a)';
    } else if(this.mediaParcial >= 10) {
      this.situacao = 'Avaliação Final';
    } else if(this.mediaParcial < 10) {
      this.situacao = 'Reprovado(a)';
    }
  }
}
