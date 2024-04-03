import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
// importar common module
// importar forms module
// importar reactive forms module
// importar router module

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import Swal from "sweetalert2";
import {NavbarSuperiorComponent} from '../navbar-superior/navbar-superior.component';
import {LoginService} from "./login.service";
import {User} from "./user";
import {LoginRequest} from "./login-request";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavbarSuperiorComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  rightPanelActive: boolean = false;

  loginData = {
    email: '',
    password: ''
  };

  registerData = {
    firstName: '',
    lastName: '',
    documentNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  user: User = new User()
  loginRequest: LoginRequest = new LoginRequest()

  constructor(private router: Router, private loginService: LoginService) {
  }

  togglePanel(isSignUp: boolean): void {
    this.rightPanelActive = isSignUp;
  }

  register(): void {
    this.loginService.registerUser(this.user).subscribe(response => {
      console.log('User created:', response);
    }, error => {
      console.error('Error creating user:', error);
    });
  }

  async login(): Promise<void> {
    console.log('Datos de inicio de sesión:', this.loginRequest);
    // Asumiendo que loginUser ahora devuelve una Promise, utilizamos async/await para esperar el resultado
      const loginResult = await this.loginService.loginUser(this.loginRequest).toPromise(); // Si es un Observable, convertirlo a Promise
      console.log(loginResult); // Mejor manejo de logging aquí si es necesario
      if(loginResult){
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          text: 'Bienvenido a la aplicación'
        }).then(() => {
          // Redirigir a home
          this.router.navigate(['/home']);
        });
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Inicio de sesión fallido',
          text: 'Verifica tus credenciales'
        });
      }
  }
}
