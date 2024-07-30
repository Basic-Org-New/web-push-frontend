import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { ScheduleNotificationComponent } from './schedule-notification/schedule-notification.component';
import { NotificationPreviewComponent } from './notification-preview/notification-preview.component';
import { CommonSharedModule } from '../common/common.module';


@NgModule({
  declarations: [
    SendNotificationComponent,
    ScheduleNotificationComponent,
    NotificationPreviewComponent
  ],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    CommonSharedModule
  ]
})
export class NotificationModule { }
