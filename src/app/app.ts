import { HttpClientModule } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule],
  template: `
    
    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('TechSpec');
}
