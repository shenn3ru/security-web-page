import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register.component';
import { CreateSolutionComponent } from './components/create-solution/create-solution.component';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./components/main-page/connector').then(c => c.ContactPage) 
  },
  { 
    path: 'solutions',  // This replaces 'pricing' to match your terminology
    loadComponent: () => import('./components/pricing-page/connector').then(c => c.PricingPage) 
  },
  { 
    path: 'plan/:id', 
    loadComponent: () => import('./components/plan-page/connector').then(c => c.PlanPage) 
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create-solution', component: CreateSolutionComponent }, // Protected by logic in component, but route is open
  
  // Alias 'pricing' to 'solutions' just in case
  { path: 'pricing', redirectTo: 'solutions', pathMatch: 'full' }
];