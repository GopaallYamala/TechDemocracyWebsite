import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { PartnersComponent } from './partners/partners.component';
import { SolutionsComponent } from './solutions/solutions.component';
// import { AdminBlogPostComponent } from './admin/admin-blog-post/admin-blog-post.compoent';
import { LoginComponent } from './admin/login.component';
import { AdvisoryConsultingComponent } from './advisory-consulting/advisory-consulting.component';
import { ResourcesComponent } from './resources/resources.component';
import { CompanyComponent } from './company/company.component';
import { BlogComponent } from './blogs/blog.component';
import { PrivacyPolicyComponent } from './Policies/privacy-policy.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { TermsAndConditionsComponent } from './terms-conditions/terms-conditions.component';

const routes: Routes = [
  { path: '', component: AppHomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppHomeComponent },
  { path: 'partners', component: PartnersComponent },
  // { path: 'admin', component: AdminBlogPostComponent },
  { path: 'solutions', component: SolutionsComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange' },
  { path: 'adv-consulting', component: AdvisoryConsultingComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange' },
  { path: 'login', component: LoginComponent },
  { path: 'resources', component: ResourcesComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange' },
  { path: 'company', component: CompanyComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange' },
  { path: 'blogs', component: BlogComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange'},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
  { path: 'cookie-policy', component: CookiePolicyComponent },
  { path: 'terms-conditions', component: TermsAndConditionsComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
