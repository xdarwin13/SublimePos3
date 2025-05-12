import { Component } from '@angular/core';

@Component({
  selector: 'app-escritorio',
  standalone: false,
  templateUrl: './escritorio.component.html',
  styleUrl: './escritorio.component.css'
})
export class EscritorioComponent {
  financialSummary = [
    { title: 'Vendido al contado', amount: 0.00, icon: 'dollar-sign', color: 'blue' },
    { title: 'Anticipos y abonos', amount: 0.00, icon: 'credit-card', color: 'purple' },
    { title: 'Entradas de efectivo', amount: 0.00, icon: 'arrow-down', color: 'yellow' },
    { title: 'Salidas de efectivo', amount: 0.00, icon: 'arrow-up', color: 'red' }
  ];

  topProducts = [];
  topClients = [];
  topCashiers = [];
}
