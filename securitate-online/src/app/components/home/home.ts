import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// ⬅️ STEP 1: Define the structure of a single card object
interface Card {
  title: string;
  text: string;
  linkText: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  // ⬅️ STEP 2: Apply the interface to the cards property
  // This tells TypeScript exactly what properties 'cards' holds.
  cards: Card[] = [
    { title: 'SOC Managers', text: 'Unify to stop threats and protect your surface efficiently.', linkText: 'Learn More →' },
    { title: 'Cloud SecOps', text: 'Control multi-cloud complexity and secure your applications.', linkText: 'Learn More →' },
    { title: 'Cloud Dev', text: 'Securely balance innovation and timely app delivery.', linkText: 'Learn More →' },
    { title: 'Infra Leads', text: 'Enhance security to mitigate threats swiftly and intelligently.', linkText: 'Learn More →' }
  ];
}