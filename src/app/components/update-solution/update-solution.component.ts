import { Component, OnInit, inject } from '@angular/core';
import { PlanService } from '../../services/plan-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-solution',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  template: `
    <div class="container mt-5">
      <div class="card shadow p-4 mx-auto" style="max-width: 600px;">
        <h2 class="mb-4">Edit Security Solution</h2>
        <form (ngSubmit)="onSubmit()" *ngIf="plan">
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
            <input [(ngModel)]="featuresInput" name="features" class="form-control">
          </div>
          
          <div class="d-flex gap-2">
            <button type="submit" class="btn btn-success flex-fill">Update Solution</button>
            <button type="button" (click)="cancel()" class="btn btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  `
})
export class UpdateSolutionComponent implements OnInit {
  planService = inject(PlanService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  planId!: number;
  featuresInput = '';
  plan: any = null;

  ngOnInit() {
    this.planId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.planId) {
      this.planService.getById(this.planId).subscribe(data => {
        this.plan = data;
        // Convert features array back to string for editing
        if (this.plan.features && Array.isArray(this.plan.features)) {
          this.featuresInput = this.plan.features.join(', ');
        }
      });
    }
  }

  onSubmit() {
    // Convert string back to array
    this.plan.features = this.featuresInput.split(',').map(f => f.trim()).filter(f => f.length > 0);
    
    this.planService.update(this.planId, this.plan).subscribe(() => {
      this.router.navigate(['/plan', this.planId]);
    });
  }

  cancel() {
    this.router.navigate(['/plan', this.planId]);
  }
}