import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface MenuItem {
  label: string;
  route: string;
  icon: string;
  expanded?: boolean;
  children?: MenuItem[];
}
@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  
  constructor(public router: Router) {}
  
  storeName = 'Tienda';
  
  menuItems: MenuItem[] = [
    { label: 'Ayuda', route: '/ayuda', icon: 'help-circle' },
    { label: 'Usar en la nube', route: '/nube', icon: 'cloud' },
    { label: 'Inicio', route: '/inicio', icon: 'home' },
    { label: 'Escritorio', route: '/escritorio', icon: 'grid' },
    { label: 'Productos', route: '/productos', icon: 'box' },
    { label: 'Vender', route: '/vender', icon: 'shopping-cart' },
    { label: 'Clientes', route: '/clientes', icon: 'users' },
    { label: 'Caja', route: '/caja', icon: 'dollar-sign' },
    { 
      label: 'Reportes', 
      route: '/reportes', 
      icon: 'file-text',
      expanded: false,
      children: [
        { label: 'Ventas al contado', route: '/reporte/ventas/contado', icon: 'file' },
        { label: 'Apartados', route: '/reporte/apartados', icon: 'file' },
        { label: 'Caja', route: '/reporte/caja', icon: 'file' },
        { label: 'Productos con baja existencia', route: '/reporte/productos/baja', icon: 'file' },
        { label: 'Inventario', route: '/reporte/inventario', icon: 'file' }
      ]
    },
    { label: 'Gráficas y estadísticas', route: '/graficas', icon: 'bar-chart-2' },
    { label: 'Usuarios', route: '/usuarios', icon: 'user' },
    { 
      label: 'Más', 
      route: '/mas', 
      icon: 'more-horizontal',
      expanded: false,
      children: [
        { label: 'Hacer inventario', route: '/hacer-inventario', icon: 'clipboard' },
        { label: 'Imprimir códigos de barras', route: '/imprimir-codigos', icon: 'printer' },
        { label: 'Ajustes', route: '/ajustes', icon: 'settings' },
        { label: 'Ayuda', route: '/ayuda', icon: 'help-circle' },
        { label: 'Salir', route: '/logout', icon: 'log-out' }
      ]
    }
  ];


  toggleSubmenu(item: MenuItem): void {
    item.expanded = !item.expanded;
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
