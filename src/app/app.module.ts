import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { NotificationBannerComponent } from './components/notification-banner/notification-banner.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VenderComponent } from './pages/vender/vender.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { CajaComponent } from './pages/caja/caja.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { GraficasComponent } from './pages/graficas/graficas.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { EscritorioComponent } from './pages/escritorio/escritorio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    NotificationBannerComponent,
    EmptyStateComponent,
    SearchBarComponent,
    DashboardComponent,
    VenderComponent,
    InventarioComponent,
    ClientesComponent,
    CajaComponent,
    ReportesComponent,
    GraficasComponent,
    UsuariosComponent,
    EscritorioComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
     LayoutModule,
     FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
