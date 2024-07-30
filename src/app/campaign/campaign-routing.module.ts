import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignReportComponent } from './campaign-report/campaign-report.component';
import { AutoPushComponent } from './auto-push/auto-push.component';
import { WelcomePushComponent } from './welcome-push/welcome-push.component';

const routes: Routes = [
  { path: 'report', component: CampaignReportComponent },
  { path: 'auto-push', component: AutoPushComponent },
  { path: 'welcome-push', component: WelcomePushComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
