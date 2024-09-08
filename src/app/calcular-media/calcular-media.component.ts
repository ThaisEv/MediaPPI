import { Component } from '@angular/core';
import { Disciplinas } from './displinas';
import { Boletim } from './boletim';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrl: './calcular-media.component.css'
})
export class CalcularMediaComponent {
  Boletins: Boletim[];

  constructor() {
    this.Boletins = [new Boletim('PPI', 0, 0, 0, 0), 
                     new Boletim('Química', 0, 0, 0, 0), 
                     new Boletim('Biologia', 0, 0, 0, 0),
                     new Boletim('Língua Portuguesa', 0, 0, 0, 0),
                     new Boletim('História', 0, 0, 0, 0),
                     new Boletim('PDS', 0, 0, 0, 0)
                    ];
  }

  adicionarBoletim(di: string, b1: number, b2: number, b3: number, b4: number) {
    for(let x = 0; x < this.Boletins.length; x++) {
      if(this.Boletins[x].disciplina == di) {
        this.Boletins[x].b1 = b1;
        this.Boletins[x].b2 = b2;
        this.Boletins[x].b3 = b3;
        this.Boletins[x].b4 = b4;
        this.Boletins[x].calcularMediaParcial();
        break
      }
    }
  }
  adicionarNotaFinal(di: string, na: number) {
    for(let x = 0; x < this.Boletins.length; x++) {
      if(this.Boletins[x].disciplina == di) {
        this.Boletins[x].calcularMediaFinal(na);
        break
      }
    }
  }
}
