import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components — make sure these paths match your folder structure
import { SolutionsComponent } from './pages/solutions/solutions';
import { PricingComponent } from './pages/pricing/pricing';
import { BlogComponent } from './pages/blog/blog';
import { ContactComponent } from './pages/contact/contact';

const routes: Routes = [
  { path: 'hello', loadComponent: () => import('./components/home/home').then(c => c.HomeComponent) }, 			// main home page
//  { path: 'solutions', component: SolutionsComponent },
//  { path: 'pricing', component: PricingComponent },
//  { path: 'blog', component: BlogComponent },
//  { path: 'contact', component: ContactComponent },
//  { path: '**', redirectTo: '' } 					// catch-all redirects to home
];

export class AppRoutingModule {}