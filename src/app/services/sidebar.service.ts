import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[] = [
    {
      title: 'DashBoard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Main', url : '/'},
        {titulo: 'ProgressBar', url : 'progress'},
        {titulo: 'Gráficas', url : 'grafica1'},
        {titulo: 'Promesas', url: 'promises'},
        {titulo: 'Rxjs', url: 'rxjs'}
      ]
    }
  ];

  constructor() { }
}
