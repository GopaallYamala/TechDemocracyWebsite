import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { PartnersComponent } from './partners/partners.component';
import { SolutionsComponent } from './solutions/solutions.component';
// import { SolutionCIAMComponent } from './solution-ciam/solution-ciam.component';
// import { SolutionPAMComponent } from './solution-pam/solution-pam.component';
// import { SolutionAMComponent } from './solution-am/solution-am.component';
import { AdminBlogPostComponent } from './admin/admin-blog-post/admin-blog-post.compoent';
import { LoginComponent } from './admin/login.component';
import { AdvisoryConsultingComponent } from './advisory-consulting/advisory-consulting.component';
// import { ImplServiceComponent } from './implementation-service/implementation-service.component';
// import { OpsManageServicesComponent } from './ops-manage-services/ops-manage-services.component';
import { ResourcesComponent } from './resources/resources.component';
import { ContactUsCompoent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppHomeComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'admin', component: AdminBlogPostComponent },
  { path: 'solutions', component: SolutionsComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange' },
  // { path: 'solution-ciam', component: SolutionCIAMComponent },
  // { path: 'solution-pam', component: SolutionPAMComponent },
  // { path: 'solution-am', component: SolutionAMComponent },
  { path: 'adv-consulting', component: AdvisoryConsultingComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange' },
  // { path: 'impl-services', component: ImplServiceComponent },
  // { path: 'ops-manage-services', component: OpsManageServicesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'resources', component: ResourcesComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange' },
  { path: 'contact-us', component: ContactUsCompoent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
