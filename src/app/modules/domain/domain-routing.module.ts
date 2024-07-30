import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDomainComponent } from './add-domain/add-domain.component';
import { ListDomainComponent } from './list-domain/list-domain.component';
import { DomainComponent } from './domain/domain.component';
import { DomainSettingsComponent } from './domain-settings/domain-settings.component';

const routes: Routes = [
  {
    path: '',
    component: DomainComponent,
    children: [
      { path: 'add', component: AddDomainComponent },
      { path: 'list', component: ListDomainComponent },
      { path: 'settings', component: DomainSettingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomainRoutingModule {}
