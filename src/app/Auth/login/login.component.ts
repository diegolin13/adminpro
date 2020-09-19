import { Component, OnInit, NgZone} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';
declare const gapi: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css'
  ]
})
export class LoginComponent implements OnInit{
  formSubmitted = false;
  auth2: any;
  public loginForm = this.fb.group({
    email: [ localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    rememberme: [false]
  });
  constructor(private router: Router, private fb: FormBuilder, private userService: UserService,
    private ngZone: NgZone) { }

  ngOnInit() {
    this.renderButton();
  }
  login() {
      this.formSubmitted = true;
      if (this.loginForm.invalid) {
        return;
      }
      this.userService.login(this.loginForm.value).subscribe((resp) => {
        if (this.loginForm.get('rememberme').value) {
          localStorage.setItem('email', this.loginForm.get('email').value);
        } else {
          localStorage.removeItem('email');
        }
        this.router.navigateByUrl('/');
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.error.msg}`
        });
      });
  }

  validarCampos(campos: string): boolean {
    if (this.loginForm.get(campos).invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

   renderButton() {
    gapi.signin2.render('my-signin2', {
      scope: 'profile email',
      width: 240,
      height: 50,
      longtitle: true,
      theme: 'dark',
    });
    this.startApp();
  }

   async startApp() {
      await this.userService.googleInit();
      this.auth2 = this.userService.auth2;
      this.attachSignin(document.getElementById('my-signin2'));
   
  }

  attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
        (googleUser) => {
          const id_token = googleUser.getAuthResponse().id_token;
          this.userService.loginGoogle(id_token).subscribe(resp => {
            this.ngZone.run(() => {
              this.router.navigateByUrl('/');
            });
          });
        }, (error) => {
          alert(JSON.stringify(error, undefined, 2));
        });
  }

}
