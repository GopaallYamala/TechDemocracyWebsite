import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { PartnersComponent } from './partners/partners.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { SolutionCIAMComponent } from './solution-ciam/solution-ciam.component';
import { SolutionPAMComponent } from './solution-pam/solution-pam.component';
import { SolutionAMComponent } from './solution-am/solution-am.component';

const routes: Routes = [
	{ path: '',  redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: AppHomeComponent },
	{ path: 'partners', component: PartnersComponent},
	{ path: 'solution-iga', component: SolutionsComponent},
	{ path: 'solution-ciam', component: SolutionCIAMComponent},
	{ path: 'solution-pam', component: SolutionPAMComponent},
	{ path: 'solution-am', component: SolutionAMComponent}

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
