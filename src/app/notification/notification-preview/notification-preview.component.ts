import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification-preview',
  templateUrl: './notification-preview.component.html',
  styleUrls: ['./notification-preview.component.scss']
})
export class NotificationPreviewComponent {
  @Input() title: string = '[Title Here]';
  @Input() description: string = '[Description Here]';
}
