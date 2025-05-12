import { Component } from '@angular/core';

@Component({
  selector: 'app-graficas',
  standalone: false,
  templateUrl: './graficas.component.html',
  styleUrl: './graficas.component.css'
})
export class GraficasComponent {
  yearOptions: string[] = ['2025', '2024', '2023'];
  selectedYear: string = '';
  
  filterByYear(): void {
    console.log('Filtering by year:', this.selectedYear);
    // Implement year filter logic
  }
}
