import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AnalisisComponent } from '../analisis/analisis.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar-lateral',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar-lateral.component.html',
  styleUrl: './navbar-lateral.component.css'
})


export class NavbarLateralComponent {
  public isMenuVisible = false;

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

}

