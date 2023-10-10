import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { PotentialDifferentiatorComponent } from "src/app/potential-differentiator/potential-differentiator.component";
import { ConsultationComponent } from 'src/app/consultation/consultation.component';
import { AcceleratorsUtilitiesComponent } from 'src/app/accelerators-utilities/accelerators-utilities.component';
import { ChallengesComponent } from 'src/app/challenges/challenges.component';
import { ValuedCustomersComponent } from 'src/app/valued-customers/valued-customers.component';

@NgModule({
  declarations: [PotentialDifferentiatorComponent, ConsultationComponent, AcceleratorsUtilitiesComponent, ChallengesComponent, ValuedCustomersComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [PotentialDifferentiatorComponent, ConsultationComponent, AcceleratorsUtilitiesComponent, ChallengesComponent, ValuedCustomersComponent]
})

export class SharedModule {}