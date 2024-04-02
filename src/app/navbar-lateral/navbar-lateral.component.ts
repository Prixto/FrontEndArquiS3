import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AnalisisComponent } from '../analisis/analisis.component';
import { RouterLink } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

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

  currentRoute: string | undefined;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.urlAfterRedirects;
    });
  }

}

