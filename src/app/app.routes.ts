import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadComponent: () => import('./components/contacts-page/connector').then(c => c.ContactPage)
}];
