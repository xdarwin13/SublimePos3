import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: 'inicio', component: DashboardComponent },
      { path: 'vender', component: VenderComponent },
      { path: 'inventario', component: InventarioComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'caja', component: CajaComponent },
      { path: 'reportes', component: ReportesComponent },
      { path: 'graficas', component: GraficasComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'escritorio', component: EscritorioComponent },
      { path: 'productos', component: ProductosComponent },
      { path: 'reporte/ventas/contado', component: ReportesComponent },
      { path: '**', redirectTo: '/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
