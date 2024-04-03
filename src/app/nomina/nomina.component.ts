import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarLateralComponent } from '../navbar-lateral/navbar-lateral.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nomina',
  standalone: true,
  imports: [CommonModule, NavbarLateralComponent, FormsModule],
  templateUrl: './nomina.component.html',
  styleUrl: './nomina.component.css'
})
export class NominaComponent {
  busqueda: string = '';

  // lista de empleados de la nómina con ID, Nombre, Apellido, Cargo, Salario, Fecha de Ingreso, ImagenURL, auxilio de transporte, horas extras, total devengado, salud, pensión, caja de compensación, total deducciones, neto a pagar
  nomina = [
    {
      id: 1,
      nombre: 'Tom',
      apellido: 'Cruise',
      cargo: 'Gerente',
      salario: 1000000,
      fechaIngreso: '2021-01-01',
      imagenURL: 'https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg',
      auxilioTransporte: 106454,
      horasExtras: 0,
      totalDevengado: 1000000,
      salud: 40000,
      pension: 40000,
      cajaCompensacion: 0,
      totalDeducciones: 80000,
      netoPagar: 920000
    },
    {
      id: 2,
      nombre: 'Selena',
      apellido: 'Gómez',
      cargo: 'Secretaria',
      salario: 800000,
      fechaIngreso: '2021-02-01',
      imagenURL: 'https://i.pinimg.com/originals/14/87/06/14870690c27adc50628dd18f87ca668d.jpg',
      auxilioTransporte: 106454,
      horasExtras: 0,
      totalDevengado: 800000,
      salud: 32000,
      pension: 32000,
      cajaCompensacion: 0,
      totalDeducciones: 64000,
      netoPagar: 736000
    },
    {
      id: 3,
      nombre: 'Zack',
      apellido: 'Efron',
      cargo: 'Contador',
      salario: 1200000,
      fechaIngreso: '2021-03-01',
      imagenURL: 'https://media.glamour.es/photos/616fab4068628c1bb6e5b800/master/w_1600%2Cc_limit/573604.jpg',
      auxilioTransporte: 106454,
      horasExtras: 0,
      totalDevengado: 1200000,
      salud: 48000,
      pension: 48000,
      cajaCompensacion: 0,
      totalDeducciones: 96000,
      netoPagar: 1104000
    },
    {
      id: 4,
      nombre: 'Ana',
      apellido: 'de Armas',
      cargo: 'Vendedora',
      salario: 900000,
      fechaIngreso: '2021-04-01',
      imagenURL: 'https://hips.hearstapps.com/hmg-prod/images/ana-de-armas-1507732281.jpg?crop=1xw:1xh;center,top&resize=980:*',
      auxilioTransporte: 106454,
      horasExtras: 0,
      totalDevengado: 900000,
      salud: 36000,
      pension: 36000,
      cajaCompensacion: 0,
      totalDeducciones: 72000,
      netoPagar: 828000
    },
    {
      id: 5,
      nombre: 'Leonardo',
      apellido: 'DiCaprio',
      cargo: 'Analista de Sistemas',
      salario: 800000,
      fechaIngreso: '2021-05-01',
      imagenURL: 'https://media.vogue.es/photos/5e1296dc0ac57d00086051ca/2:3/w_2560%2Cc_limit/GettyImages-1197740045.jpg',
      auxilioTransporte: 106454,
      horasExtras: 0,
      totalDevengado: 800000,
      salud: 32000,
      pension: 32000,
      cajaCompensacion: 0,
      totalDeducciones: 64000,
      netoPagar: 736000
    },
    {
      id: 6,
      nombre: 'Jennifer',
      apellido: 'Lawrence',
      cargo: 'Recepcionista',
      salario: 800000,
      fechaIngreso: '2021-06-01',
      imagenURL: 'https://w0.peakpx.com/wallpaper/129/832/HD-wallpaper-jennifer-lawrence-actress-beautiful-blue-celebrity-gorgeous-hollywood-portrait-usa-thumbnail.jpg',
      auxilioTransporte: 106454,
      horasExtras: 0,
      totalDevengado: 800000,
      salud: 32000,
      pension: 32000,
      cajaCompensacion: 0,
      totalDeducciones: 64000,
      netoPagar: 736000
    }
    
  ];

  constructor() { }

  get empleadosFiltrados() {
    return this.filtrarEmpleados(this.busqueda);
  }

  filtrarEmpleados(busqueda: string) {
    return this.nomina.filter(empleado => {
      return empleado.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        empleado.cargo.toLowerCase().includes(busqueda.toLowerCase()) ||
        empleado.salario.toString().includes(busqueda.toLowerCase()) ||
        empleado.fechaIngreso.toLowerCase().includes(busqueda.toLowerCase());
    });
  }


}
