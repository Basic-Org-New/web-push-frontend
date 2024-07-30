import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsDashboardComponent } from './analytics-dashboard/analytics-dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { CommonSharedModule } from '../common/common.module';


@NgModule({
  declarations: [
    AnalyticsDashboardComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    CommonSharedModule,
    AnalyticsRoutingModule,

  ]
})
export class AnalyticsModule { }
