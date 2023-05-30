import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-heart-stats',
  templateUrl: './heart-stats.component.html',
  styleUrls: ['./heart-stats.component.css']
})
export class HeartStatsComponent {
  @ViewChild('lineChart', { static: true }) private chartRef!: ElementRef;

  constructor() {}

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    const data = {
      labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
      datasets: [
        {
          label: 'Number of Forest Fires',
          data: [250, 280, 320, 380, 410, 390, 400, 440, 470, 500],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }
      ]
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };

    const forestFireChart = new Chart(this.chartRef.nativeElement, {
      type: 'bar',
      data: data,
      options: options
    });
  }
}