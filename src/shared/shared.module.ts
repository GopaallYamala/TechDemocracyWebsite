import { NgModule } from '@angular/core'
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
import { IGAImplementationComponent } from 'src/app/IGA-Implementation/iga-implementation.component';
import { SolutionCIAMComponent } from 'src/app/solution-ciam/solution-ciam.component';
import { SolutionPAMComponent } from 'src/app/solution-pam/solution-pam.component';
import { SolutionAMComponent } from 'src/app/solution-am/solution-am.component';
import { TestimonialsComponent } from 'src/app/testimonials/testimonials.component';
import { AdvisoryConsultingComponent } from 'src/app/advisory-consulting/advisory-consulting.component';
import { IAMAdvisoryAssessmentWhyComponent } from 'src/app/IAM-advisory-assessment-why/IAM-advisory-assessment-why.component';
import { SVGIconComponent } from 'src/app/form-controls/svg-icon.component';
import { TDCforConsultantComponent } from 'src/app/tdc-adv-consultant/tdc-adv-consultant.component';
import { ExpertsInIdentityComponent } from 'src/app/experts-in-identity/experts-in-identity.component';
import { TDCRightPartnerComponent } from 'src/app/tdc-right-partner/tdc-right-partner.component';
import { ImplServiceComponent } from 'src/app/implementation-service/implementation-service.component';
import { OpsManageServicesComponent } from 'src/app/ops-manage-services/ops-manage-services.component';
import { CaseStudiesComponent } from 'src/app/case-studies/case-studies.component';
import { OurStatsComponent } from 'src/app/our-stats/our-stats.component';
import { SolutionsPartnershipComponent } from 'src/app/solutions-partnership/solutions-partnership.component';
import { AppearDirective } from './directives/appearDirective';
import { ResourcesHighlightsComponent } from 'src/app/resources/highlights/highlights.component';
import { ResourcesCategoriesComponent } from 'src/app/resources/categories/resources-categories.component';
import { EventsComponent } from 'src/app/resources/events/events.component';
import { ResourcesContextComponent } from 'src/app/resources/context/resources-context.component';

@NgModule({
  declarations: [PotentialDifferentiatorComponent, ConsultationComponent, AcceleratorsUtilitiesComponent, ChallengesComponent, ValuedCustomersComponent, CaseStudiesComponent, SolutionsHeroComponent, SuccessStoriesComponent, IGASolutionsComponent, IGAImplementationComponent, SolutionCIAMComponent, SolutionPAMComponent, SolutionAMComponent, TestimonialsComponent, AdvisoryConsultingComponent, EventsComponent, IAMAdvisoryAssessmentWhyComponent,
    SVGIconComponent, TDCforConsultantComponent, ExpertsInIdentityComponent,
    TDCRightPartnerComponent,
    ImplServiceComponent, OpsManageServicesComponent, OurStatsComponent, SolutionsPartnershipComponent, ResourcesHighlightsComponent, ResourcesCategoriesComponent, ResourcesContextComponent,
    AppearDirective],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [PotentialDifferentiatorComponent, ConsultationComponent, AcceleratorsUtilitiesComponent, ChallengesComponent, ValuedCustomersComponent, CaseStudiesComponent, SolutionsHeroComponent, SuccessStoriesComponent, IGASolutionsComponent, IGAImplementationComponent, SolutionCIAMComponent, SolutionPAMComponent, SolutionAMComponent, TestimonialsComponent, AdvisoryConsultingComponent, IAMAdvisoryAssessmentWhyComponent, SVGIconComponent, TDCforConsultantComponent, ExpertsInIdentityComponent, TDCRightPartnerComponent, ImplServiceComponent, OpsManageServicesComponent, OurStatsComponent, SolutionsPartnershipComponent, ResourcesHighlightsComponent, ResourcesCategoriesComponent, AppearDirective, EventsComponent, ResourcesContextComponent]
})


export class SharedModule { }
