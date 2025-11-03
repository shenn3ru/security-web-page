import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PlanModel } from '../../../Backend/data/PlanModel';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  constructor(private http: HttpClient) {}
  getItems(): Observable<PlanModel[]> {
    return this.http.get<any[]>('http://localhost:3000/pricingdata');
  }
}
