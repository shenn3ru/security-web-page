import { FooterComponent } from '../footer/footer';
import { RouterOutlet } from '@angular/router';

//interface Card {
//  title: string;
//  text: string;
//  linkText: string;
//}

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  template: `
    <app-header></app-header>
    <app-footer></app-footer>
    <router-outlet></router-outlet>
  `,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  styles:[],
})
export class HomeComponent {
  protected showDetails = signal(false);
