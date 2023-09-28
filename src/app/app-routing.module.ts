import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
	{ path: '',  redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: AppHomeComponent },
	{ path: 'partners', component: PartnersComponent}

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
