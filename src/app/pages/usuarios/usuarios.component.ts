import { Component } from '@angular/core';

interface Usuario {
  id: number;
  nombre: string;
  permisos: string[];
}

@Component({
  selector: 'app-usuarios',
  standalone: false,
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  usuarios: Usuario[] = [
    {
      id: 1,
      nombre: 'parzibyte',
      permisos: ['admin']
    }
  ];

  enableUser(usuario: Usuario): void {
    console.log('Enabling user:', usuario);
    // Implement enable functionality
  }

  deleteUser(usuario: Usuario): void {
    console.log('Deleting user:', usuario);
    // Implement delete functionality
  }
}
