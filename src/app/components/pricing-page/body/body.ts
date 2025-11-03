import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PlanModel } from '../../../../../Backend/data/PlanModel'
import { PlanService } from '../../../services/plan-service';
@Component({
  selector: 'app-body',
  imports: [RouterLink],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {
plans :PlanModel[] = [];

private route = inject(ActivatedRoute)
private router = inject(Router)
private items = inject(PlanService)

ngOnInit() {
  console.log('ngOnInit runs');
  const id = Number(this.route.snapshot.paramMap.get('id'))

  this.items.getItems().subscribe(items => {
    this.plans = items
    console.log(items); 
  });
}
  goBack() {
    this.router.navigate(['/']); 
  }
}
