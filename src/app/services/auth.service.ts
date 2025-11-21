import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private baseUrl = 'http://localhost:3000';
  
  // Tracks login state across the app
  isLoggedIn$ = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));

  register(user: any) {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(credentials: any) {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
    this.isLoggedIn$.next(true);
    this.router.navigate(['/solutions']); // Redirect to solutions after login
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn$.next(false);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isLoggedIn$.value;
  }
}