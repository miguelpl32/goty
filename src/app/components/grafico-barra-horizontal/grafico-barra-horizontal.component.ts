import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent {

  @Input() results: any[] = [];

  // results: any[] = [
  //   {
  //     'name': 'Juego1',
  //     'value': 20
  //   },
  //   {
  //     'name': 'Juego2',
  //     'value': 25
  //   },
  //   {
  //     'name': 'Juego3',
  //     'value': 15
  //   },
  //   {
  //     'name': 'Juego4',
  //     'value': 30
  //   }
  // ];




  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  // intervalo;

  constructor() {

    // const newResults = [...this.results];
    // this.intervalo = setInterval(() => {
    //   for (let i in newResults) {
    //     newResults[i].value = Math.round(Math.random() * 500)
    //   }

    //   this.results = [...newResults];

    // }, 1500);
  }

  onSelect(event): void {
    console.log(event);
  }

  // ngOnDestroy(): void {
  //   clearInterval(this.intervalo);
  // }

}
