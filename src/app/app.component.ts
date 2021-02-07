import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  canvas: any;
  ctx: any;
  constructor() {}
  ngOnInit(): void {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    const myChart = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
        labels: [
          'Gold',
          'Silver'
        ],
        datasets: [
          {
            label: 'Total cases.',
            data: [
              2,
              10
            ],
            backgroundColor: ['gold', '#ccc'],
            borderWidth: 2,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        responsive: false,
        display: true,
      },
    });
  }
}
