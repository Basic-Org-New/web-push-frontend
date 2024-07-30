import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxFileDropModule } from 'ngx-file-drop';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper'; // Import MatStepperModule here

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    FontAwesomeModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    CommonModule,
    ReactiveFormsModule,
    NgxFileDropModule,
    NgxDropzoneModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTableModule,
    MatTooltipModule,
    MatStepperModule, // Add MatStepperModule here
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    NgxFileDropModule,
    NgxDropzoneModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTableModule,
    MatTooltipModule,
    MatStepperModule, // Add MatStepperModule here

  ]
})
export class CommonSharedModule { }
