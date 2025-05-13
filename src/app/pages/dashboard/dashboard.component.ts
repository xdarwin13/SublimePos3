import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface DashboardTile {
  title: string;
  description: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  welcomeMessage = 'Bienvenido. Elija una opción';
  navigationTip = 'Recuerde que siempre puede explorar el menú completo haciendo click en la parte superior izquierda';
  
  dashboardTiles: DashboardTile[] = [
    {
      title: 'Realizar una venta',
      description: 'Hacer una venta al contado o un apartado',
      icon: 'shopping-bag',
      route: '/vender'
    },
    {
      title: 'Ver inventario',
      description: 'Registrar, eliminar o actualizar detalles productos',
      icon: 'list',
      route: '/productos'
    },
    {
      title: 'Mis clientes',
      description: 'Registrar, eliminar o actualizar detalles clientes',
      icon: 'users',
      route: '/clientes'
    },
    {
      title: 'Abonos',
      description: 'Registrar o ver abonos de un apartado',
      icon: 'dollar-sign',
      route: '/abonos'
    },
    {
      title: 'Caja',
      description: 'Registrar una salida o entrada de efectivo',
      icon: 'box',
      route: '/caja'
    },
    {
      title: 'Escritorio',
      description: 'Resumen de todos los movimientos de su tienda',
      icon: 'grid',
      route: '/escritorio'
    },
    {
      title: 'Gráficas',
      description: 'Compare ventas, vea los productos más vendidos y mucho más',
      icon: 'bar-chart-2',
      route: '/graficas'
    },
    {
      title: 'Reportes',
      description: 'Ver el reporte de caja, de ventas al contado o de apartados',
      icon: 'file-text',
      route: '/reportes'
    },
    {
      title: 'Usuarios',
      description: 'Administrar usuarios (o permisos) del punto de venta',
      icon: 'user',
      route: '/usuarios'
    },
    {
      title: 'Códigos de barras',
      description: 'Imprimir códigos de barras de productos',
      icon: 'barcode',
      route: '/codigos-barras'
    },
    {
      title: 'Ajustes',
      description: 'Cambiar los datos de su tienda, configurar la impresora, etcétera',
      icon: 'settings',
      route: '/ajustes'
    }
  ];

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
