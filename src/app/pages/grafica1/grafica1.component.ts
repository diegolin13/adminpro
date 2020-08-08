import { Component} from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {
  // Grafica 1
  public label1: string[] = ['Clothes', 'Music', 'Toys'];
  public data1 = [
    [300, 300, 300]
  ];

  // Grafica 2
  public label2: string[] = ['Skate', 'BMX', 'Surf'];
  public data2 = [
    [400, 100, 400]
  ];

  // Grafica 3
  public label3: string[] = ['Tourism', 'Tech', 'Energy'];
  public data3 = [
    [250, 250, 400]
  ];

}
