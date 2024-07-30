import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule-notification',
  templateUrl: './schedule-notification.component.html',
  styleUrls: ['./schedule-notification.component.scss']
})
export class ScheduleNotificationComponent {
  sendNow = true;
  notificationExpires = 3;
  notificationExpiresUnit = 'days';
  stickyNotification = true;
}
