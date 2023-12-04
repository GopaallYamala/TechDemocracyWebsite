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
import { TestimonialsComponent } from 'src/app/testimonials/testimonials.component';
import { AdvisoryConsultingComponent } from 'src/app/advisory-consulting/advisory-consulting.component';
import { IAMAdvisoryAssessmentWhyComponent } from 'src/app/IAM-advisory-assessment-why/IAM-advisory-assessment-why.component';
import { SVGIconComponent } from 'src/app/form-controls/svg-icon.component';
import { TDCforConsultantComponent } from 'src/app/tdc-adv-consultant/tdc-adv-consultant.component';
import { ExpertsInIdentityComponent } from 'src/app/experts-in-identity/experts-in-identity.component';
import { TDCRightPartnerComponent } from 'src/app/tdc-right-partner/tdc-right-partner.component';
import { CaseStudiesComponent } from 'src/app/case-studies/case-studies.component';
import { OurStatsComponent } from 'src/app/our-stats/our-stats.component';
import { SolutionsPartnershipComponent } from 'src/app/solutions-partnership/solutions-partnership.component';
import { AppearDirective } from './directives/appearDirective';
import { ResourcesHighlightsComponent } from 'src/app/resources/highlights/highlights.component';
import { ResourcesCategoriesComponent } from 'src/app/resources/categories/resources-categories.component';
import { EventsComponent } from 'src/app/resources/events/events.component';
import { ResourcesContextComponent } from 'src/app/resources/context/resources-context.component';
import { CertifiedPartnersComponent } from 'src/app/certified-partners/certified-partners.component';
import { PartnersComponent } from 'src/app/partners/partners.component';
import { PartnersClientNewsComponent } from 'src/app/partner-client-news/partner-client-news.component';
import { ContactInfoComponent } from 'src/app/company/contact-us/contact-info/contact-info.component';
import { ContactUsCompoent } from 'src/app/company/contact-us/contact-us.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMapsComponent } from 'src/app/google-maps-component/google-maps-component.component';
import { AboutTDCComponent } from 'src/app/about-tdc/about-tdc.component';
import { OtherLocationsBannerComponent } from 'src/app/other-locations-banner/other-locations-banner.component';
import { LeadershipBannerComponent } from 'src/app/leadership-banner/leadership-banner.component';
import { CompanyComponent } from 'src/app/company/company.component';
import { AboutUsUIComponent } from 'src/app/company/about-us/about-us-ui.component';
import { WhatWeDoComponent } from 'src/app/company/about-us/what-we-do/what-we-do.component';
import { IdentitySecureSolutionComponent } from 'src/app/identity-secure-solution/identity-secure-solution.component';
import { YoutubeVidContainerComponent } from 'src/app/company/about-us/yt-vid-container/yt-vid-container.component';
import { NewsComponent } from 'src/app/company/news/news.component';
import { CareersComponent } from 'src/app/company/careers/careers.component';
import { BlogComponent } from 'src/app/blogs/blog.component';

@NgModule({
  declarations: [PotentialDifferentiatorComponent, ConsultationComponent, AcceleratorsUtilitiesComponent, ChallengesComponent, ValuedCustomersComponent, CaseStudiesComponent,
    SolutionsHeroComponent, SuccessStoriesComponent, IGASolutionsComponent, IGAImplementationComponent,
    TestimonialsComponent, AdvisoryConsultingComponent, EventsComponent, IAMAdvisoryAssessmentWhyComponent, SVGIconComponent, TDCforConsultantComponent, ExpertsInIdentityComponent,
    TDCRightPartnerComponent, OurStatsComponent, SolutionsPartnershipComponent, ResourcesHighlightsComponent, ResourcesCategoriesComponent,
    ResourcesContextComponent, AppearDirective, ContactUsCompoent, ContactInfoComponent, CertifiedPartnersComponent, PartnersComponent, PartnersClientNewsComponent, GoogleMapsComponent, AboutTDCComponent, OtherLocationsBannerComponent, LeadershipBannerComponent,
    CompanyComponent, AboutUsUIComponent, WhatWeDoComponent, IdentitySecureSolutionComponent, YoutubeVidContainerComponent, NewsComponent, CareersComponent, BlogComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  exports: [PotentialDifferentiatorComponent, ConsultationComponent, AcceleratorsUtilitiesComponent, ChallengesComponent, ValuedCustomersComponent, CaseStudiesComponent,
    SolutionsHeroComponent, SuccessStoriesComponent, IGASolutionsComponent, IGAImplementationComponent,
    TestimonialsComponent, AdvisoryConsultingComponent, IAMAdvisoryAssessmentWhyComponent, SVGIconComponent, TDCforConsultantComponent, ExpertsInIdentityComponent,
    TDCRightPartnerComponent, OurStatsComponent, SolutionsPartnershipComponent, ResourcesHighlightsComponent,
    ResourcesCategoriesComponent, AppearDirective, EventsComponent, ResourcesContextComponent, ContactUsCompoent, ContactInfoComponent, PartnersComponent, PartnersClientNewsComponent,
    GoogleMapsComponent, AboutTDCComponent, OtherLocationsBannerComponent, LeadershipBannerComponent, CompanyComponent, AboutUsUIComponent, WhatWeDoComponent, IdentitySecureSolutionComponent, YoutubeVidContainerComponent, NewsComponent, CareersComponent, BlogComponent]
})


export class SharedModule { }
