import { Component } from '@angular/core';
import { NavbarLateralComponent } from '../navbar-lateral/navbar-lateral.component';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pasarela-pagos',
  standalone: true,
  imports: [NavbarLateralComponent, CommonModule, RouterLink],
  templateUrl: './pasarela-pagos.component.html',
  styleUrl: './pasarela-pagos.component.css'
})
export class PasarelaPagosComponent {


  comprar(event: Event) {
    event.preventDefault(); // Prevenir la acción por defecto del formulario
    Swal.fire({
      icon: 'success',
      title: 'Compra exitosa',
      text: 'Gracias por su compra',
      timer: undefined
    });
  }
  
  

}
