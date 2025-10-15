import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Componente standalone
import { HeaderComponent } from './components/header/header'; // ⬅️ Now resolves HeaderComponent
import { HomeComponent } from './components/home/home'; // ⬅️ Should not be here if routed
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HomeComponent, // ⬅️ Should be removed
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('securitate-online');
}