import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppHomeComponent } from './app-home.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from '../carousel/carousel.component';
import { IdentitySecureSolutionComponent } from '../identity-secure-solution/identity-secure-solution.component';
import { PotentialDifferentiatorComponent } from '../potential-differentiator/potential-differentiator.component';
import { OurSolutionsComponent } from '../our-solutions/our-solutions.component';
import { AcceleratorsUtilitiesComponent } from '../accelerators-utilities/accelerators-utilities.component';
import { ConsultationComponent } from '../consultation/consultation.component';
import { AboutUsComponent } from '../about/about-us.component';
import { SpecialisedSolutionsComponent } from '../specialised-solutions/specialised-solutions.component';
import { NgbAccordionModule, NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideDirective } from '../directives/click-outside.directive';
import { SVGIconComponent } from '../form-controls/svg-icon.component';
import { PopupDropdownComponent } from '../form-controls/popup-dropdown.component';

@NgModule({
  declarations: [
    AppHomeComponent,
    CarouselComponent,
    IdentitySecureSolutionComponent,
    PotentialDifferentiatorComponent,
    OurSolutionsComponent,
    AcceleratorsUtilitiesComponent,
    ConsultationComponent,
    AboutUsComponent,
    SpecialisedSolutionsComponent,
    ClickOutsideDirective,
    SVGIconComponent,
    PopupDropdownComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbAlertModule, NgbAccordionModule,
    NgbCarouselModule,
  ],
  exports: [
    ClickOutsideDirective,
    SVGIconComponent,
    PopupDropdownComponent
  ]

})
export class AppHomeModule { }
