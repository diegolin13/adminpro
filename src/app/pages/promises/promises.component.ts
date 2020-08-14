import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const promesa = new Promise((resolve, reject) => {
        if (false) {
          resolve('todo ok');
        } else {
          reject('error :C');
        }
    });

    promesa.then((mensaje) => {
      console.log('ok', mensaje);
    }).catch((err) => {
      console.log('hubo un error', err);
    })

    console.log('fin del init');
  }


}
