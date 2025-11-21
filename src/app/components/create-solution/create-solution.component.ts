import { Component, inject } from '@angular/core';
import { PlanService } from '../../services/plan-service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-solution',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    <div class="container mt-5">
      <div class="card shadow p-4 mx-auto" style="max-width: 600px;">
        <h2 class="mb-4">Create New Security Solution</h2>
        <form (ngSubmit)="onSubmit()">
          <div class="mb-3">
            <label class="form-label">Solution Name</label>
            <input [(ngModel)]="plan.name" name="name" class="form-control" required>
          </div>
          <div class="mb-3">
            <label class="form-label">Price ($/mo)</label>
            <input [(ngModel)]="plan.price" name="price" type="number" class="form-control" required>
          </div>
          <div class="mb-3">
            <label class="form-label">Description</label>
            <textarea [(ngModel)]="plan.description" name="desc" class="form-control" rows="3" required></textarea>
          </div>
          <div class="mb-3">
            <label class="form-label">Features (comma separated)</label>
            <input [(ngModel)]="featuresInput" name="features" class="form-control" placeholder="Firewall, VPN, Support...">
          </div>
          
          <div class="d-flex gap-2">
            <button type="submit" class="btn btn-primary flex-fill">Save Solution</button>
            <a routerLink="/solutions" class="btn btn-secondary">Cancel</a>
          </div>
        </form>
      </div>
    </div>
  `
})
export class CreateSolutionComponent {
  planService = inject(PlanService);
  router = inject(Router);

  featuresInput = '';
  plan = { name: '', price: 0, description: '', features: [], recommended: false, imageUrl: '' };

  onSubmit() {
    // Convert comma string to array
    this.plan.features = this.featuresInput.split(',').map(f => f.trim()) as any;
    
    this.planService.add(this.plan).subscribe(() => {
      this.router.navigate(['/solutions']);
    });
  }
}