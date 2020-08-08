import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input() progreso;
  @Input() btnClass = 'btn btn-primary';

  @Output() valorCambiado: EventEmitter<number> = new EventEmitter();

  cambiarBarra(valor: number): number {
    if (this.progreso >= 100 && valor >= 0){
      this.valorCambiado.emit(100);
      return this.progreso = 100;
    }
    if (this.progreso <= 0 && valor < 0){
      this.valorCambiado.emit(0);
      return this.progreso = 0;
    }
    this.progreso = this.progreso + valor;
    this.valorCambiado.emit(this.progreso);
  }

  ngOnInit(): string {
    return this.btnClass = `btn ${this.btnClass}`;
  }

  onChange(nuevoValor: number) {
    if (nuevoValor >= 100) {
      this.progreso = 100;
    } else if (nuevoValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }
    this.valorCambiado.emit(this.progreso);
  }

}
