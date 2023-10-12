import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { PotentialDifferentiatorComponent } from "src/app/potential-differentiator/potential-differentiator.component";
import { ConsultationComponent } from 'src/app/consultation/consultation.component';
import { AcceleratorsUtilitiesComponent } from 'src/app/accelerators-utilities/accelerators-utilities.component';

@NgModule({
  declarations: [PotentialDifferentiatorComponent, ConsultationComponent, AcceleratorsUtilitiesComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [PotentialDifferentiatorComponent, ConsultationComponent, AcceleratorsUtilitiesComponent]
})

export class SharedModule {}