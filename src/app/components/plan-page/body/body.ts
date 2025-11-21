import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanModel } from '../../../../../Backend/data/PlanModel'
import { PlanService } from '../../../services/plan-service';
@Component({
  selector: 'app-body',
  imports: [],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {
plans :PlanModel | undefined;

private route = inject(ActivatedRoute)
private router = inject(Router)
private items = inject(PlanService)

ngOnInit() {
  const id = Number(this.route.snapshot.paramMap.get('id'))

  this.items.getItems().subscribe(items => {
    this.plans = items.find(plan => plan.id === id);
  });
}
  goBack() {
    this.router.navigate(['/']); 
  }
  editPlan() {
    if (this.plans && this.plans.id) {
      this.router.navigate(['/edit-plan', this.plans.id]);
    }
  }
}
