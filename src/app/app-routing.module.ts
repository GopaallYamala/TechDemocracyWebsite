import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { PartnersComponent } from './partners/partners.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { AdminBlogPostComponent } from './admin/admin-blog-post/admin-blog-post.compoent';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppHomeComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'admin', component: AdminBlogPostComponent }

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
