import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css'
  ]
})
export class RegisterComponent{
  formSubmitted = false;
  public registerForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    password2: ['', Validators.required],
    terminos: [true, Validators.required]
  }, {
    validators: this.passwordsIguales('password', 'password2')
  });

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  crearUsuario() {
    this.formSubmitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    /**  Registrar usuario */
    this.userService.crearUsuario(this.registerForm.value).subscribe(resp => {
     this.router.navigateByUrl('/');
    }, (err) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${err.error.msg}`
      });
    });

  }
  validarCampos(campos: string): boolean {
    if (this.registerForm.get(campos).invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }
  contrasenasNoValidas(): boolean {
    const pass1 = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value;
    if ((pass1 !== pass2) && this.formSubmitted){
      return true;
    } else {
      return false;
    }
  }
  aceptaTerminos() {
    return !this.registerForm.get('terminos').value  && this.formSubmitted;
  }

  passwordsIguales(pass1: string, pass2: string){
    return (formGroup: FormGroup) => {
      const password1 = formGroup.get(pass1);
      const password2 = formGroup.get(pass2);
      if (password1.value === password2.value) {
        password2.setErrors(null);
      } else {
        password2.setErrors({noEsigual: true});
      }
    };
  }

}
