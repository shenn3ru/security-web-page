import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; 

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
  styleUrls: ['./home.css']
})
export class HomeComponent {
  
  protected showDetails = signal(false);

  
  toggleDetails() {
    this.showDetails.update(currentValue => !currentValue);
  }
  
  cards: Card[] = [
    { title: 'Threat Analysis', text: 'Analyze potential security threats with AI tools.', linkText: 'Learn More' },
    { title: 'Endpoint Security', text: 'Protect your devices with advanced monitoring.', linkText: 'Explore' },
    { title: 'Cloud Protection', text: 'Ensure your cloud systems are fully secure.', linkText: 'Discover' },
    { title: 'User Training', text: 'Educate your team to stay safe online.', linkText: 'Get Started' }
  ];
}
