import { Component } from '@angular/core';

@Component({
  selector: 'app-caja',
  standalone: false,
  templateUrl: './caja.component.html',
  styleUrl: './caja.component.css'
})
export class CajaComponent {
  ingresos = {
    total: 1000.00,
    transactions: [
      { monto: 200, descripcion: 'Venta de producto', fecha: '2025-05-11', usuario: 'Juan' },
      { monto: 300, descripcion: 'Servicio técnico', fecha: '2025-05-12', usuario: 'Ana' }
    ]
  };

  egresos = {
    total: 500.00,
    transactions: [
      { monto: 100, descripcion: 'Compra de insumos', fecha: '2025-05-10', usuario: 'Pedro' },
      { monto: 400, descripcion: 'Pago de alquiler', fecha: '2025-05-11', usuario: 'María' }
    ]
  };

  registerIncome(): void {
    console.log('Registering income');
    // Implement income registration
  }

  registerExpense(): void {
    console.log('Registering expense');
    // Implement expense registration
  }

  filterTransactions(): void {
    console.log('Filtering transactions');
    // Implement filter functionality
  }
}
