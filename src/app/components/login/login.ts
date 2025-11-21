import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
      <div class="card shadow p-4" style="width: 100%; max-width: 400px;">
        <h2 class="text-center text-primary mb-4">Login</h2>
        <form (ngSubmit)="onSubmit()">
          <div class="mb-3">
            <label class="form-label">Username</label>
            <input [(ngModel)]="credentials.username" name="username" class="form-control" required>
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input [(ngModel)]="credentials.password" name="password" type="password" class="form-control" required>
          </div>
          <button type="submit" class="btn btn-success w-100">Login</button>
        </form>
        <div class="mt-3 text-center">
          <p>No account? <a routerLink="/register">Register here</a></p>
        </div>
      </div>
    </div>
  `
})
export class LoginComponent {
  auth = inject(AuthService);
  credentials = { username: '', password: '' };

  onSubmit() {
    this.auth.login(this.credentials).subscribe({
      next: (res) => this.auth.saveToken(res.token),
      error: () => alert('Invalid credentials')
    });
  }
}