import { Component} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css'
  ]
})
export class ProgressComponent {
  progreso1 = 40;
  progreso2 = 20;
  get getProgress1(): string {
    return `${this.progreso1}%`;
  }
  get getProgress2(): string {
    return `${this.progreso2}%`;
  }
}
