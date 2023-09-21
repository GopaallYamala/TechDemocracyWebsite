import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgbAccordionModule, NgbAlertModule, NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { IdentitySecureSolutionComponent } from './identity-secure-solution/identity-secure-solution.component';
import { PotentialDifferentiatorComponent } from './potential-differentiator/potential-differentiator.component';
import { OurSolutionsComponent } from './our-solutions/our-solutions.component';
import { AcceleratorsUtilitiesComponent } from './accelerators-utilities/accelerators-utilities.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { AboutUsComponent } from './about/about-us.component';
import { SpecialisedSolutionsComponent } from './specialised-solutions/specialised-solutions.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    CarouselComponent,
    IdentitySecureSolutionComponent,
    PotentialDifferentiatorComponent,
    OurSolutionsComponent,
    AcceleratorsUtilitiesComponent,
    ConsultationComponent,
    AboutUsComponent,
    SpecialisedSolutionsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbAlertModule, NgbAccordionModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
