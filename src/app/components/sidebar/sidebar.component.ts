import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() collapsed = false;
  @Input() isMobile = false;
  @Output() closeSidebar = new EventEmitter<void>();
  
  storeName = 'Tienda';
  
  menuItems: MenuItem[] = [
    { label: 'Inicio', route: '/inicio', icon: 'home' },
    { label: 'Escritorio', route: '/escritorio', icon: 'dashboard' },
    { label: 'Productos', route: '/productos', icon: 'inventory' },
    { label: 'Vender', route: '/vender', icon: 'shopping_cart' },
    { label: 'Clientes', route: '/clientes', icon: 'people' },
    { label: 'Caja', route: '/caja', icon: 'point_of_sale' },
    { 
      label: 'Reportes', 
      route: '/reportes', 
      icon: 'description',
      expanded: false,
      children: [
        { label: 'Ventas al contado', route: '/reporte/ventas/contado', icon: 'receipt' },
        { label: 'Apartados', route: '/reporte/apartados', icon: 'bookmark' },
        { label: 'Caja', route: '/reporte/caja', icon: 'payments' },
        { label: 'Productos con baja existencia', route: '/reporte/productos/baja', icon: 'inventory_2' },
        { label: 'Inventario', route: '/reporte/inventario', icon: 'list_alt' }
      ]
    },
    { label: 'Gráficas y estadísticas', route: '/graficas', icon: 'bar_chart' },
    { label: 'Usuarios', route: '/usuarios', icon: 'person' },
    { 
      label: 'Más', 
      route: '/mas', 
      icon: 'more_horiz',
      expanded: false,
      children: [
        { label: 'Hacer inventario', route: '/hacer-inventario', icon: 'inventory' },
        { label: 'Imprimir códigos de barras', route: '/imprimir-codigos', icon: 'print' },
        { label: 'Ajustes', route: '/ajustes', icon: 'settings' },
        { label: 'Ayuda', route: '/ayuda', icon: 'help' },
        { label: 'Salir', route: '/logout', icon: 'logout' }
      ]
    }
  ];

  constructor(public router: Router) {}

  toggleSubmenu(item: MenuItem, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    item.expanded = !item.expanded;
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
    if (this.isMobile) {
      this.closeSidebar.emit();
    }
  }

  isActive(route: string): boolean {
    return this.router.url === route || this.router.url.startsWith(route + '/');
  }

  onCloseSidebar(): void {
    this.closeSidebar.emit();
  }
}