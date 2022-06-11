import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public labels0: string[] = ['Venta1', 'Venta2', 'Otros'];
  public data0: ChartData<'doughnut'> = {
    labels: this.labels0,
    datasets: [
      { data: [ 20, 30, 50 ] }
    ]
  };

  public labels1: string[] = ['Pan', 'Refresco', 'Tacos'];
  public data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      { data: [ 20, 15, 40 ] }
    ]
  };

}
