import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-navbar-superior',
  standalone: true,
  imports: [
    CommonModule, RouterLink,
  ],
  templateUrl: './navbar-superior.component.html',
  styleUrl: './navbar-superior.component.css'
})
export class NavbarSuperiorComponent {
  isActive = false;

  constructor() { }

  toggleMenu(): void {
    this.isActive = !this.isActive;
  }

}
