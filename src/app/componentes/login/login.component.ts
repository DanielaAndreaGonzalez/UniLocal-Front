import { Component } from '@angular/core';
import { LoginDTO } from '../../dto/LoginDTO';
import { FormGroup, ReactiveFormsModule,FormControl, Validators  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  login: LoginDTO= {
     email: '',
     password:''
  };

  constructor(private loginService: LoginService) {}

  iniciarSesion() {
    if (this.loginForm.valid) {
      this.login.email = this.loginForm.get('email')?.value;
      this.login.password = this.loginForm.get('password')?.value;
      console.log('Login Data: ', this.login);

      this.loginService.login(this.login).subscribe(
           response => {
             console.log('Respuesta del servidor', response);
             // Aquí manejarías la respuesta del servidor, como redirigir al usuario o mostrar un mensaje
           },
           error => {
             console.error('Error en el login', error);
             // Aquí manejarías los errores, como mostrar un mensaje al usuario
           }
         );
    }else {
      // Opcionalmente, manejar el caso cuando el formulario no es válido.
      // Por ejemplo, mostrar mensajes de error en la interfaz de usuario.
      console.error('El formulario no es válido');
    }
  }

}
