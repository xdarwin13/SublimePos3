import { Component } from '@angular/core';

@Component({
  selector: 'app-inventario',
  standalone: false,
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export class InventarioComponent {
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
