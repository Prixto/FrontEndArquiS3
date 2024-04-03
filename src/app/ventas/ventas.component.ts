import { Component } from '@angular/core';
import { NavbarLateralComponent } from '../navbar-lateral/navbar-lateral.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [CommonModule, NavbarLateralComponent],
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.css',
})
export class VentasComponent {}
