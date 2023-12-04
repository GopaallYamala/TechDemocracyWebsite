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

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppHomeComponent },
  { path: 'partners', component: PartnersComponent },
  // { path: 'admin', component: AdminBlogPostComponent },
  { path: 'solutions', component: SolutionsComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange' },
  { path: 'adv-consulting', component: AdvisoryConsultingComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange' },
  { path: 'login', component: LoginComponent },
  { path: 'resources', component: ResourcesComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange' },
  { path: 'company', component: CompanyComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange' },
  { path: 'blogs', component: BlogComponent }

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
