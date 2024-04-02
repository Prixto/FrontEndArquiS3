import { Component } from '@angular/core';
// importar common module
// importar forms module
// importar reactive forms module
// importar router module

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from "sweetalert2";
import { NavbarSuperiorComponent } from '../navbar-superior/navbar-superior.component';

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


  constructor(private router: Router) { }

  togglePanel(isSignUp: boolean): void {
    this.rightPanelActive = isSignUp;
  }

  register(): void {
    console.log('Datos de registro:', this.registerData);
  }

  login(): void {
    console.log('Datos de inicio de sesión:', this.loginData);
    // Lógica de inicio de sesión
    // si el correo es prueba@gmail y la contraseña es 1234 a home
    // si no mostrar un mensaje de error
    if (this.loginData.email === 'prueba@gmail.com' && this.loginData.password === '1234') {
      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión exitoso',
        text: 'Bienvenido a la aplicación'
      }).then(() => {
        // redirigir a home
        this.router.navigate(['/home']);
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Inicio de sesión fallido',
        text: 'Verifica tus credenciales'
      });
    }

  }
}
