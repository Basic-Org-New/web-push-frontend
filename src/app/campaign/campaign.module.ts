import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignReportComponent } from './campaign-report/campaign-report.component';
import { AutoPushComponent } from './auto-push/auto-push.component';
import { WelcomePushComponent } from './welcome-push/welcome-push.component';


@NgModule({
  declarations: [
    CampaignReportComponent,
    AutoPushComponent,
    WelcomePushComponent
  ],
  imports: [
    CommonModule,
    CampaignRoutingModule
  ]
})
export class CampaignModule { }
