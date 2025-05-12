import { Component } from '@angular/core';

@Component({
  selector: 'app-vender',
  standalone: false,
  templateUrl: './vender.component.html',
  styleUrl: './vender.component.css'
})
export class VenderComponent {
  totalVenta: number = 0.00;
  searchPlaceholder: string = 'Escanear código o escribir el número y presionar Enter';
  
  columns = [
    { name: '#', field: 'id' },
    { name: 'Código de barras', field: 'codigo' },
    { name: 'Descripción', field: 'descripcion' },
    { name: 'Cantidad', field: 'cantidad' },
    { name: 'Precio', field: 'precio' },
    { name: 'Total', field: 'total' },
    { name: 'Opciones', field: 'opciones' }
  ];
  
  products: any[] = [];

  onSearch(query: string): void {
    console.log('Searching for:', query);
    // Here you would implement the search logic
  }
}
