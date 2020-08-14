import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  intervalSubs: Subscription;

  constructor() {

    // this.returnObservable().pipe(
    //   retry(2)
    // ).subscribe( valor  => console.log('subs', valor),
    // error => console.warn('error', error),
    // () => console.log('Se completo el intervalo'));

    this.intervalSubs = this.returnInterval().subscribe(valor => console.log(valor));
  }

  returnInterval(): Observable<number> {
    const intervalo$ = interval(1000).
    pipe(
        // take(4),
        map(
          valor => valor + 1
        ),
        filter(valor => (valor % 2) === 0 ? false : true)
    );
    return intervalo$;
  }


  returnObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>((observer) => {
      const inter = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(inter);
          observer.complete();
        }
        if (i === 2) {          
          observer.error('hay un error, ya valio');
        }
      }, 1000);
    });
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

}
