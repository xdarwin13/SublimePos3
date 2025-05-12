import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-banner',
  standalone: false,
  templateUrl: './notification-banner.component.html',
  styleUrl: './notification-banner.component.css'
})
export class NotificationBannerComponent {
  title = 'Sublime POS 3 - Punto de venta gratuito creado por Parzibyte';
  donationUrl = 'https://parzibyte.me/blog/donaciones/';
  blogUrl = 'https://parzibyte.me/blog';
  infoUrl = 'https://parzibyte.me/blog';
}
