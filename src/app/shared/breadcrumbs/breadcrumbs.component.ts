import { Component, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {
  titulo: string;
  titulosub$: Subscription;

  constructor(private router: Router) { 

    this.titulosub$ = this.getParams().subscribe(({title}) => {
      this.titulo = title;
      document.title = `AdminPro - ${title}`;
    });
  }

  ngOnDestroy(): void {
    this.titulosub$.unsubscribe();
    
  }

  getParams() {
    return this.router.events
    .pipe(filter (event => event instanceof ActivationEnd),
    filter((event: ActivationEnd) => event.snapshot.firstChild === null),
    map((event: ActivationEnd) => event.snapshot.data));
  }

}
