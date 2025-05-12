import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportes',
  standalone: false,
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css'
})
export class ReportesComponent implements OnInit {
  isVentasContado: boolean = false;
  totalUtilidad: number = 0.00;
  totalVendido: number = 0.00;
  
  ventasContado: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isVentasContado = this.router.url.includes('/reporte/ventas/contado');
  }

  filterReport(): void {
    console.log('Filtering report');
    // Implement filter functionality
  }
}
