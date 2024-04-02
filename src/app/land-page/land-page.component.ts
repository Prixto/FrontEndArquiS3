import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarSuperiorComponent } from '../navbar-superior/navbar-superior.component';

@Component({
  selector: 'app-land-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarSuperiorComponent,
    RouterLink
  ],
  templateUrl: './land-page.component.html',
  styleUrl: './land-page.component.css'
  
})
export class LandPageComponent {
  isActive = false;

  constructor() { }

  toggleMenu(): void {
    this.isActive = !this.isActive;
  }
}
