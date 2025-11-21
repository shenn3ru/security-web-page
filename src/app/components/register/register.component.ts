import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
      <div class="card shadow p-4" style="width: 100%; max-width: 400px;">
        <h2 class="text-center text-primary mb-4">Register</h2>
        <form (ngSubmit)="onRegister()">
          <div class="mb-3">
            <label class="form-label">Username</label>
            <input [(ngModel)]="user.username" name="username" class="form-control" required>
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input [(ngModel)]="user.password" name="password" type="password" class="form-control" required>
          </div>
          <button type="submit" class="btn btn-primary w-100">Create Account</button>
        </form>
        <div class="mt-3 text-center">
          <p>Already have an account? <a routerLink="/login">Login here</a></p>
        </div>
      </div>
    </div>
  `
})
export class RegisterComponent {
  auth = inject(AuthService);
  router = inject(Router);
  user = { username: '', password: '' };

  onRegister() {
    this.auth.register(this.user).subscribe({
      next: () => {
        alert('Registration successful! Please login.');
        this.router.navigate(['/login']);
      },
      error: (err) => {
  console.error('Registration Error:', err); // This prints the full error to the console
  alert(err.error?.message || 'Registration failed. Check console (F12) for details.');
}
    });
  }
}