// heart-stats.component.ts
import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-heart-stats',
  templateUrl: './heart-stats.component.html',
  styleUrls: ['./heart-stats.component.css']
})
export class HeartStatsComponent  {
  @ViewChild('lineChart', { static: true }) private chartRef!: ElementRef;

  constructor() {}

  ngOnInit() {
    this.createChart();
  }

  
   createChart() {
    const data = {
      labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
      datasets: [{
        label: 'Cas d\'acromégalie diagnostiqués',
        data: [120, 150, 180, 200, 220, 210, 230],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };

    const acromegalyChart = new Chart('acromegalyChart', {
      type: 'bar',
      data: data,
      options: options
    });
  }
}