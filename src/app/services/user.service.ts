import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterForm } from '../interfaces/register-form.interface';
import { environment } from '../../environments/environment';
import { tap, map, catchError } from 'rxjs/operators';
import { Loginform } from '../interfaces/login-form.interface';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
const base_url = environment.base_url;
declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public auth2: any;
  constructor(private http: HttpClient, private router: Router, private ngZone: NgZone) { 
    this.googleInit();
  }

  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${base_url}/login/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap((resp: any) => {
        window.localStorage.setItem('token', resp.token);
      }),
      map(resp => true),
      catchError( error => of (false) )
    );
  }

  crearUsuario(formData: RegisterForm) {
    return this.http.post(`${base_url}/users`, formData)
    .pipe(
      tap((resp: any) => {
        window.localStorage.setItem('token', resp.token);
      })
    );
  }

  login( loginData: Loginform) {
    return this.http.post(`${base_url}/login`, loginData)
    .pipe(
      tap((resp: any) => {
        window.localStorage.setItem('token', resp.token);
      })
    );
  }

  loginGoogle( token: string) {
    return this.http.post(`${base_url}/login/google`, { token })
    .pipe(
      tap((resp: any) => {
        window.localStorage.setItem('token', resp.token);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.auth2.signOut().then(() => {
      this.ngZone.run(() => {
        this.router.navigateByUrl('/login');
      });
    });
  }

  googleInit() {
    gapi.load('auth2', () => {
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      this.auth2 = gapi.auth2.init({
        client_id: '684499573838-uq41nraltimottbo2v3s4tlmiqvaklgr.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
      });
    });
  }
}
