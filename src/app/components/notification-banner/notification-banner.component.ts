import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-banner',
  standalone: false,
  templateUrl: './notification-banner.component.html',
  styleUrl: './notification-banner.component.css'
})
export class NotificationBannerComponent {
  title = 'Sublime POS 3 - Punto de venta gratuito creado por xDarwinpm';
  donationUrl = 'https://xdarwinpm.com/donaciones';
  blogUrl = 'https://xdarwinpm.com/blog';
  infoUrl = 'https://xdarwinpm.com/faq';
}
