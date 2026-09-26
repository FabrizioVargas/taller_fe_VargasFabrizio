import { Component } from '@angular/core';

interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  imagen: string;
  descripcion: string;
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  standalone: false // <-- Asegúrate de tener esto
})
export class ProductosComponent {
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Teclado Mecánico RGB Pro',
      categoria: 'Periféricos',
      precio: 89.99,
      imagen: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500',
      descripcion: 'Switches mecánicos táctiles con iluminación RGB personalizable.'
    },
    {
      id: 2,
      nombre: 'Mouse Gamer 16000 DPI',
      categoria: 'Periféricos',
      precio: 49.99,
      imagen: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500',
      descripcion: 'Sensor óptico de alta precisión y botones programables.'
    },
    {
      id: 3,
      nombre: 'Headset Surround 7.1',
      categoria: 'Audio',
      precio: 119.99,
      imagen: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500',
      descripcion: 'Cancelación de ruido, micrófono HD y almohadillas acolchadas.'
    },
    {
      id: 4,
      nombre: 'Silla Gamer Ergonómica',
      categoria: 'Sillas',
      precio: 249.99,
      imagen: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500',
      descripcion: 'Soporte lumbar, reposabrazos 4D y reclinación hasta 180°.'
    }
  ];
}