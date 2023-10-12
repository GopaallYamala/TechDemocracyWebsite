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
import { SolutionsHeroComponent } from 'src/app/solutions-hero/solutions-hero.component';
import { SuccessStoriesComponent } from 'src/app/success-stories/success-stories.component';
import { IGASolutionsComponent } from 'src/app/iga-solutions/iga-solutions.component';

@NgModule({
  declarations: [PotentialDifferentiatorComponent, ConsultationComponent, AcceleratorsUtilitiesComponent, ChallengesComponent, ValuedCustomersComponent, SolutionsHeroComponent, SuccessStoriesComponent, IGASolutionsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [PotentialDifferentiatorComponent, ConsultationComponent, AcceleratorsUtilitiesComponent, ChallengesComponent, ValuedCustomersComponent, SolutionsHeroComponent, SuccessStoriesComponent, IGASolutionsComponent]
})

export class SharedModule {}