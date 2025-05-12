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
  productos: Producto[] = [];
  searchQuery: string = '';
  categorias: string[] = ['General', 'Electrónica', 'Ropa', 'Alimentos', 'Hogar'];
  selectedCategoria: string = '';

  columns = [
    { name: '#', field: 'id' },
    { name: 'Código', field: 'codigo' },
    { name: 'Descripción', field: 'descripcion' },
    { name: 'Precio Compra', field: 'precioCompra' },
    { name: 'Precio Venta', field: 'precioVenta' },
    { name: 'Existencia', field: 'existencia' },
    { name: 'Stock Mínimo', field: 'stock' },
    { name: 'Categoría', field: 'categoria' },
    { name: 'Acciones', field: 'acciones' }
  ];

  onSearch(): void {
    console.log('Buscando productos con:', this.searchQuery);
    // Implementar lógica de búsqueda
  }

  onFilterByCategory(): void {
    console.log('Filtrando por categoría:', this.selectedCategoria);
    // Implementar filtro por categoría
  }

  onAddProduct(): void {
    console.log('Añadiendo nuevo producto');
    // Implementar lógica para añadir producto
  }

  onEditProduct(producto: Producto): void {
    console.log('Editando producto:', producto);
    // Implementar lógica para editar producto
  }

  onDeleteProduct(producto: Producto): void {
    console.log('Eliminando producto:', producto);
    // Implementar lógica para eliminar producto
  }

  exportProducts(): void {
    console.log('Exportando productos');
    // Implementar exportación de productos
  }

  importProducts(): void {
    console.log('Importando productos');
    // Implementar importación de productos
  }

  printBarcodes(): void {
    console.log('Imprimiendo códigos de barras');
    // Implementar impresión de códigos de barras
  }
}
