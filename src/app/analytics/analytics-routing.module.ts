import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsDashboardComponent } from './analytics-dashboard/analytics-dashboard.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: '', component: AnalyticsDashboardComponent },
  { path: 'reports', component: ReportsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyticsRoutingModule { }
