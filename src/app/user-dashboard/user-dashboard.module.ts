import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomizePopupComponent } from './customize-popup/customize-popup.component';
import { IntegrationComponent } from './integration/integration.component';
import { CommonSharedModule } from '../common/common.module';
import { DomainModule } from '../modules/domain/domain.module';


@NgModule({
  declarations: [
    DashboardComponent,
    CustomizePopupComponent,
    IntegrationComponent
  ],
  imports: [
    CommonModule,
    CommonSharedModule,
    UserDashboardRoutingModule,
    
  ]
})
export class UserDashboardModule { }
