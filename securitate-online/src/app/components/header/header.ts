import { Component } from '@angular/core'; // ⬅️ Must import Component
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html', // ⬅️ Path confirmed by your file structure
  styleUrls: ['./header.css']
})
// ⬅️ CRITICAL: Must be exported!
export class HeaderComponent { 
  // No logic needed, just an empty class is fine for a test
}