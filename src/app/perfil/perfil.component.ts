import { Component } from '@angular/core';
import { NavbarLateralComponent } from '../navbar-lateral/navbar-lateral.component';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [NavbarLateralComponent, CommonModule, RouterLink],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
    numeroidentificacion = "123456789";
    nombre = " Luna";
    apellido = "Mendez";
    correo = "prueba@gmail.com";
    tiposervicio = "Gold";

}
