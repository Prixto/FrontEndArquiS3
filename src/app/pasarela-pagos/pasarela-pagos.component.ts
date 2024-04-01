import { Component } from '@angular/core';
import { NavbarLateralComponent } from '../navbar-lateral/navbar-lateral.component';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pasarela-pagos',
  standalone: true,
  imports: [NavbarLateralComponent, CommonModule, RouterLink],
  templateUrl: './pasarela-pagos.component.html',
  styleUrl: './pasarela-pagos.component.css'
})
export class PasarelaPagosComponent {

}
