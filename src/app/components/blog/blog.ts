import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // <--- IMPORTANT

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink], // <--- Adaugă RouterLink aici
  templateUrl: './blog.html',
  styleUrls: ['./blog.css']
})
export class BlogComponent {
  posts = [
    {
      id: 1,
      title: 'Top 5 Amenințări Cibernetice în 2025',
      date: '20 Nov 2025',
      category: 'Trends',
      image: 'https://placehold.co/600x400/1e40af/white?text=Cyber+Trends',
      summary: 'Descoperă cele mai periculoase atacuri de tip ransomware și phishing care vizează companiile anul acesta.'
    },
    {
      id: 2,
      title: 'Cum să îți protejezi parola de hackeri',
      date: '18 Nov 2025',
      category: 'Tutorial',
      image: 'https://placehold.co/600x400/b91c1c/white?text=Password+Security',
      summary: 'Ghid pas cu pas pentru crearea unei parole invincibile și importanța autentificării în doi pași (2FA).'
    },
    {
      id: 3,
      title: 'AI în Securitatea Cibernetică: Prieten sau Dușman?',
      date: '15 Nov 2025',
      category: 'Tech',
      image: 'https://placehold.co/600x400/15803d/white?text=AI+Security',
      summary: 'Inteligența artificială ajută la detectarea amenințărilor, dar este folosită și pentru a genera atacuri mai sofisticate.'
    }
  ];
}