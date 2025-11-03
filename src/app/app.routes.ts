import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadComponent: () => import('./components/main-page/connector').then(c => c.ContactPage)
},
{
    path: 'pricing',
    loadComponent: () => import('./components/pricing-page/connector').then(c => c.PricingPage)
},
{
    path: 'plan/:id',
    loadComponent: () => import('./components/plan-page/connector').then(c => c.PlanPage)
}];
