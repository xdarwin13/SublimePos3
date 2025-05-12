import { Component } from '@angular/core';

interface Cliente {
  id: number;
  nombre: string;
  telefono: string;
  email: string;
  direccion: string;
}

@Component({
  selector: 'app-clientes',
  standalone: false,
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  clientes: Cliente[] = [
    {
      id: 1,
      nombre: 'Mostrador',
      telefono: '0000000000',
      email: '',
      direccion: ''
    }
  ];

  onCallClient(cliente: Cliente): void {
    console.log('Calling client:', cliente);
    // Implement call functionality
  }

  onInfoClient(cliente: Cliente): void {
    console.log('Viewing client info:', cliente);
    // Implement info view functionality
  }

  onEditClient(cliente: Cliente): void {
    console.log('Editing client:', cliente);
    // Implement edit functionality
  }

  onDeleteClient(cliente: Cliente): void {
    console.log('Deleting client:', cliente);
    // Implement delete functionality
  }
}
