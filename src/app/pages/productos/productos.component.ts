import { Component } from '@angular/core';

interface Producto {
  id: number;
  codigo: string;
  descripcion: string;
  precioCompra: number;
  precioVenta: number;
  existencia: number;
  stock: number;
  categoria: string;
}

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
 searchPlaceholder: string = 'Buscar un producto por su descripción';
  
  columns = [
    { name: '#', field: 'id' },
    { name: 'Código de barras', field: 'codigo' },
    { name: 'Descripción', field: 'descripcion' },
    { name: 'P. compra', field: 'precio_compra' },
    { name: 'P. venta', field: 'precio_venta' },
    { name: 'Utilidad', field: 'utilidad' },
    { name: 'Existencia', field: 'existencia' },
    { name: 'Stock', field: 'stock' },
    { name: 'Opciones', field: 'opciones' }
  ];
  
  products: any[] = [];

  onSearch(query: string): void {
    console.log('Searching for:', query);
    // Here you would implement the search logic
  }

  exportProducts(): void {
    console.log('Exporting products');
    // Here you would implement the export logic
  }

  importProducts(): void {
    console.log('Importing products');
    // Here you would implement the import logic
  }
}
