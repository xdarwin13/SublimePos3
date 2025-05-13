import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {
  @Input() username: string = '';
  @Input() sidebarOpen: boolean = true;
  @Output() toggleSidebar = new EventEmitter<void>();
  
  currentSection: string = '';
  currentSubsection: string = '';
  isMobile = false;

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateSectionTitle();
    });

    // Initialize on component load
    this.updateSectionTitle();
    
    // Check for mobile view
    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.TabletPortrait
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
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
      this.currentSection = 'Empresa';
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
      this.currentSection = 'Sublime POS 3';
      this.currentSubsection = 'Inicio';
    } else if (url.includes('/productos')) {
      this.currentSection = 'Empresa';
      this.currentSubsection = 'Productos';
    } else {
      this.currentSection = 'Sublime POS 3';
      this.currentSubsection = '';
    }
  }

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }
}