import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-empty-state',
  standalone: false,
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.css'
})
export class EmptyStateComponent {
  @Input() title: string = 'No hay datos';
  @Input() message: string = '';
  @Input() icon: string = 'box';
  @Input() color: string = 'primary';
}
