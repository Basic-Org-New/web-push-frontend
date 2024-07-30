import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';

import { AddDomainComponent } from './add-domain/add-domain.component';
import { ListDomainComponent } from './list-domain/list-domain.component';
import { DomainRoutingModule } from './domain-routing.module';
import { DomainComponent } from './domain/domain.component';
import { DomainSettingsComponent } from './domain-settings/domain-settings.component';
import { CommonSharedModule } from 'src/app/common/common.module';

@NgModule({
  declarations: [
    AddDomainComponent,
    ListDomainComponent,
    DomainComponent,
    DomainSettingsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonSharedModule,
    FormsModule,
    NgxDropzoneModule,
    ToastrModule.forRoot(),
    RouterModule,
    DomainRoutingModule
  ]
})
export class DomainModule {}
