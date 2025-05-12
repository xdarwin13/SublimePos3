import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  @Input() username: string = '';
  currentSection: string = '';
  currentSubsection: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateSectionTitle();
    });

    // Initialize on component load
    this.updateSectionTitle();
  }

  updateSectionTitle(): void {
    const url = this.router.url;
    
    if (url.includes('/vender')) {
      this.currentSection = 'Empresa';
      this.currentSubsection = 'Vender';
    } else if (url.includes('/inventario')) {
      this.currentSection = 'Empresa';
      this.currentSubsection = 'Inventario';
    } else if (url.includes('/clientes')) {
      this.currentSection = 'Empresa';
      this.currentSubsection = 'Clientes';
    } else if (url.includes('/escritorio')) {
      this.currentSection = 'Sublime POS';
      this.currentSubsection = 'Escritorio';
    } else if (url.includes('/graficas')) {
      this.currentSection = 'Sublime POS';
      this.currentSubsection = 'Gráficas y estadísticas';
    } else if (url.includes('/usuarios')) {
      this.currentSection = 'Sublime POS';
      this.currentSubsection = 'Usuarios';
    } else if (url.includes('/caja')) {
      this.currentSection = 'Sublime POS';
      this.currentSubsection = 'Caja';
    } else if (url.includes('/reporte/ventas/contado')) {
      this.currentSection = 'Sublime POS';
      this.currentSubsection = 'Ventas al contado';
    } else if (url.includes('/inicio')) {
      this.currentSection = 'Empresa';
      this.currentSubsection = 'Inicio';
    } else {
      this.currentSection = 'Sublime POS 3';
      this.currentSubsection = '';
    }
  }
}
