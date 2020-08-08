import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Colors } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
  @Input() title = 'Sin titulo';
  @Input() labels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() data: MultiDataSet = [[350, 450, 100]];
  // public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // public doughnutChartData: MultiDataSet = [
  //   [350, 450, 100],
  // ];
  public doughnutChartType: ChartType = 'doughnut';
  public colors: Colors[] = [
    {backgroundColor: ['#6857E6', '#009FEE', '#FFB414']}
  ];

}
