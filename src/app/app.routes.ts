import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register.component';
import { CreateSolutionComponent } from './components/create-solution/create-solution.component';

import { BlogComponent } from './components/blog/blog';
import { ContactComponent } from './components/contact/contact';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./components/main-page/connector').then(c => c.ContactPage) 
  },
  { 
    path: 'solutions', 
    loadComponent: () => import('./components/pricing-page/connector').then(c => c.PricingPage) 
  },
  { 
    path: 'plan/:id', 
    loadComponent: () => import('./components/plan-page/connector').then(c => c.PlanPage) 
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create-solution', component: CreateSolutionComponent },
  
  // Adaugă rutele noi
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'pricing', redirectTo: 'solutions', pathMatch: 'full' }
];