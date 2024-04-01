import { Component } from '@angular/core';
import { NavbarLateralComponent } from '../navbar-lateral/navbar-lateral.component';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-precios',
  standalone: true,
  imports: [NavbarLateralComponent, CommonModule],
  templateUrl: './precios.component.html',
  styleUrl: './precios.component.css'
})
export class PreciosComponent {

  pagarMensualidad() {

  }

}
