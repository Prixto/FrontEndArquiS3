import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarLateralComponent } from '../navbar-lateral/navbar-lateral.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule, NavbarLateralComponent, FormsModule],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export class InventarioComponent {
  // lista ejemplo de productos con ID, Nombre, Precio, Cantidad, Descripción, ImagenURL
  busqueda: string = '';

  productos = [
    {
      id: 1,
      nombre: 'Zapatos casual para hombre',
      precio: 100.000,
      cantidad: 10,
      descripcion: 'Zapato casual para hombre, elaborado en sintético y carnaza y cosidos, plantilla confort suela espanso antideslizante. Estos zapatos fueron elaborados por manos Colombianas que dignifican el nombre del país​ 🇨🇴.​​ ​. Materiales y acabados de excelente calidad.  Ver términos y condiciones.',
      imagenURL: 'https://www.tumodacreativa.com/wp-content/uploads/2023/01/Zapato-casual-para-hombre-coloe-azul..webp',
    },
    {
      id: 2,
      nombre: 'Tenis clásicos para mujer blanco con negro - Queen',
      precio: 200.000,
      cantidad: 20,
      descripcion: 'Sé la envidia de tus amigos con estos tenis. Este icónico diseño en color blanco con negro es perfecto para cualquier ocasión, ya sea para un día casual o para un evento especial. Hechos con materiales de calidad, estos tenis te brindarán comodidad y Versatilidad. Con un estilo sofisticado y atemporal, estos tenis son una adición necesaria para tu guardarropa. No pierdas la oportunidad de tener un par de estos tenis icónicos.',
      imagenURL: 'https://www.freshka.com.co/cdn/shop/products/7AF21439-87F0-4A44-8F84-D0BCDD7169FD_1.jpg?v=1711511723',
    },
    {
      id: 3,
      nombre: 'Jeans de ajuste mom de talle alto con cremallera',
      precio: 300,
      cantidad: 30,
      descripcion:'Jean subido para lucir la figura',          
      imagenURL: 'https://img.ltwebstatic.com/images3_pi/2022/08/25/16614131829ba5cac94d8805563dff3975aa74c3c9_thumbnail_720x_wk_shein.jpg',
    },
    {
      id: 4,
      nombre: 'Camisa Holgada De Hombre',
      precio: 120.000,
      cantidad: 40,
      descripcion: 'Manfinity Homme Camisa Holgada De Hombre Con Botones De Color Sólido',
      imagenURL: 'https://img.ltwebstatic.com/images3_pi/2023/08/28/15/169318887068e8d858bf3676d7257df7cf871160f4_thumbnail_336x.jpg',
    },
    {
      id: 5,
      nombre: 'Saco de hombre',
      precio: 500,
      cantidad: 50,
      descripcion: 'Saco para hombre, color blanco con breige, de materail de lana.',
      imagenURL: 'https://img.ltwebstatic.com/images3_pi/2023/10/07/d8/169666928508f804bbb7c5d9c91caf6385140af79f_thumbnail_405x552.jpg',
    },
    {
      id: 6,
      nombre: 'Pantalones De Carga Para Hombre',
      precio: 600,
      cantidad: 60,
      descripcion: 'Manfinity EMRG Pantalones De Carga Para Hombre Con Cintura Con Cordón, Con Solapa Gráfica Y Bolsillo',
      imagenURL: 'https://img.ltwebstatic.com/images3_pi/2021/08/27/163005271711882ebe92cd4e130a6c1da38f6c41e4_thumbnail_720x.jpg',
    }
  ];

  ngOnInit(): void {
  }

  constructor() { }

  get productosFiltrados() {
    return this.busqueda ? this.filtrarProductos(this.busqueda) : this.productos;
  }

  filtrarProductos(busqueda: string) {
    return this.productos.filter(producto => producto.nombre.toLowerCase().includes(busqueda.toLowerCase()));
  }
  


}
