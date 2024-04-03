import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NavbarLateralComponent } from '../navbar-lateral/navbar-lateral.component';
import { Chart, registerables } from 'chart.js';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-gestioncontable',
  standalone: true,
  imports: [CommonModule, NavbarLateralComponent],
  templateUrl: './gestioncontable.component.html',
  styleUrl: './gestioncontable.component.css',
})
export class GestioncontableComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.crearGrafico();
    }
  }

  crearGrafico(): void {
    const canvas = document.getElementById('miGrafico') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const flujoCaja = new Chart(ctx, {
          type: 'line', // Tipo de gráfico
          data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'], // Los meses del año como ejes X
            datasets: [
              {
                label: 'Flujo de Caja',
                data: [5000, 3000, 4000, 5000, 7000, 8000], // Datos del flujo de caja
                backgroundColor: 'rgba(255, 99, 132, 0.2)', // Color de fondo
                borderColor: 'rgba(255, 99, 132, 1)', // Color del borde
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true, // Comienza el eje Y desde 0
              },
            },
          },
        });
      } else {
        console.error('No se pudo obtener el contexto del canvas');
      }
    }
  }
}
