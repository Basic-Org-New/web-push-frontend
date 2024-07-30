import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { FeaturesComponent } from './features/features.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    HomeComponent,
    PricingComponent,
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule

  ]
})
export class HomeModule { }
