import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomizePopupComponent } from './customize-popup/customize-popup.component';
import { IntegrationComponent } from './integration/integration.component';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'domains', loadChildren: () => import('../modules/domain/domain.module').then(m => m.DomainModule) },
      { path: 'analytics', loadChildren: () => import('../analytics/analytics.module').then(m => m.AnalyticsModule), canActivate: [AuthGuard] },
      { path: 'customize-popup', component: CustomizePopupComponent },
      { path: 'integration', component: IntegrationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule {}
