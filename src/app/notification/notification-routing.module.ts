import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { ScheduleNotificationComponent } from './schedule-notification/schedule-notification.component';
import { NotificationPreviewComponent } from './notification-preview/notification-preview.component';

const routes: Routes = [
  { path: 'send', component: SendNotificationComponent },
  { path: 'schedule', component: ScheduleNotificationComponent },
  { path: 'preview', component: NotificationPreviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationRoutingModule { }
