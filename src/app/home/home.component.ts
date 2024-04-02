import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NavbarLateralComponent } from '../navbar-lateral/navbar-lateral.component';
import { Chart, registerables } from 'chart.js';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarLateralComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  nombre = " Luna";

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.crearGrafico();
      this.crearGrafico1();
    }
  }

  crearGrafico(): void {
    const canvas = document.getElementById('miGrafico') as HTMLCanvasElement | null;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const miGrafico = new Chart(ctx, {
          // Configuración del gráfico aquí
          type: 'line', // por ejemplo
          data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
            datasets: [
              {
                label: 'Ventas',
                data: [10, 20, 30, 40, 50, 60, 70],
                borderColor: 'blue',
                backgroundColor: 'lightblue',
              },
              {
                label: 'Ganancias',
                data: [5, 10, 15, 20, 25, 30, 35],
                borderColor: 'green',
                backgroundColor: 'lightgreen',
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },            
          }
        });
      } else {
        console.error('No se pudo obtener el contexto del canvas');
      }
    } else {
      console.error('No se pudo encontrar el elemento canvas');
    }
  }

  crearGrafico1(): void {
    const canvas = document.getElementById('miGrafico1') as HTMLCanvasElement | null;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const miGrafico = new Chart(ctx, {
          // Configuración del gráfico aquí
          type: 'line', // por ejemplo
          data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
            datasets: [
              {
                label: 'Ventas',
                data: [10, 20, 30, 40, 50, 60, 70],
                borderColor: 'blue',
                backgroundColor: 'lightblue',
              },
              {
                label: 'Ganancias',
                data: [5, 10, 15, 20, 25, 30, 35],
                borderColor: 'green',
                backgroundColor: 'lightgreen',
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },            
          }
        });
      } else {
        console.error('No se pudo obtener el contexto del canvas');
      }
    } else {
      console.error('No se pudo encontrar el elemento canvas');
    }
  }
  

}
