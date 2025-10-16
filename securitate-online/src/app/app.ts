import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Componente standalone
import { HeaderComponent } from './components/header/header'; 
import { HomeComponent } from './components/home/home';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet />
  `,

})
export class App {
  protected readonly title = signal('securitate-online');
}