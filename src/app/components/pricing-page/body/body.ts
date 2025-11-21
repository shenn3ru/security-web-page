import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Needed for search input
import { PlanModel } from '../../../../../Backend/data/PlanModel';
import { PlanService } from '../../../services/plan-service';
import { AuthService } from '../../../services/auth.service';

// Export Libraries
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body implements OnInit {
  plans: PlanModel[] = [];
  filteredPlans: PlanModel[] = []; // List to be displayed
  searchText: string = ''; // Search input model
  isLoading = true;

  private planService = inject(PlanService);
  public authService = inject(AuthService);

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    this.planService.getAll().subscribe({
      next: (data) => {
        this.plans = data;
        this.filteredPlans = data; // Initialize filtered list
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }

  // --- SEARCH / FILTER LOGIC ---
  onSearch() {
    const text = this.searchText.toLowerCase();
    this.filteredPlans = this.plans.filter(plan => 
      plan.name.toLowerCase().includes(text) || 
      plan.description.toLowerCase().includes(text)
    );
  }

  // --- EXPORT LOGIC ---
  exportPDF() {
    const doc = new jsPDF();
    doc.text('TechSpec Security Solutions', 14, 20);
    const data = this.filteredPlans.map(p => [p.id, p.name, `$${p.price}`, p.recommended ? 'Yes' : 'No']);
    autoTable(doc, {
      head: [['ID', 'Name', 'Price', 'Rec.']],
      body: data,
      startY: 30,
    });
    doc.save('solutions.pdf');
  }

  exportExcel() {
    const worksheet = XLSX.utils.json_to_sheet(this.filteredPlans);
    const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const buffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([buffer], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
    saveAs(data, 'solutions.xlsx');
  }

  deletePlan(id: number) {
    if(confirm('Delete this solution?')) {
      this.planService.remove(id).subscribe(() => this.loadData());
    }
  }
}