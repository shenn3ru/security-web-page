import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanModel } from '../../../Backend/data/PlanModel';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private apiUrl = 'http://localhost:3000/plans';

  constructor(private http: HttpClient) {}

  getAll(): Observable<PlanModel[]> {
    return this.http.get<PlanModel[]>(this.apiUrl);
  }

  getById(id: number): Observable<PlanModel> {
    return this.http.get<PlanModel>(`${this.apiUrl}/${id}`);
  }

  add(plan: any): Observable<any> {
    return this.http.post(this.apiUrl, plan);
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  update(id: number, plan: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, plan);
  }
  
  getItems() { return this.getAll(); }
}