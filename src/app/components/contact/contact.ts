import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  sentSuccess = false;

  sendMessage() {
    this.isSubmitting = true;
    
    // Simulăm un request către server (așteptăm 1.5 secunde)
    setTimeout(() => {
      this.isSubmitting = false;
      this.sentSuccess = true;
      
      // Resetăm formularul
      this.formData = { name: '', email: '', message: '' };

      // Ascundem mesajul de succes după 3 secunde
      setTimeout(() => this.sentSuccess = false, 4000);
    }, 1500);
  }
}