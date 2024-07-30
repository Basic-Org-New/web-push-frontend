import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/common/model/paging.model';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-analytics-dashboard',
  templateUrl: './analytics-dashboard.component.html',
  styleUrls: ['./analytics-dashboard.component.scss']
})
export class AnalyticsDashboardComponent implements OnInit {
  stats: any = {};
  allTimeData: any[] = [];
  errorMessage: string = '';
  page: Page<any> = new Page([], 0, 1, 10); // Provide an initializer here
  currentPage = 1;
  itemsPerPage = 10;
  sortColumn: string = 'date';
  sortDirection: string = 'asc';
  pageNumbers: number[] = [];

  constructor(private analyticsService: AnalyticsService) { }

  ngOnInit(): void {
    this.fetchStats();
    this.fetchAllTimeData();
  }

  fetchStats(): void {
    this.analyticsService.getStats().subscribe(
      data => {
        this.stats = data;
      },
      error => {
        this.errorMessage = 'Error fetching stats';
        console.error(error);
      }
    );
  }

  fetchAllTimeData(): void {
    this.analyticsService.getAllTime().subscribe(
      data => {
        this.allTimeData = data;
        this.updatePage();
      },
      error => {
        this.errorMessage = 'Error fetching all-time data';
        console.error(error);
      }
    );
  }

  updatePage(): void {
    const sortedData = this.allTimeData.sort((a, b) => {
      const valueA = a[this.sortColumn];
      const valueB = b[this.sortColumn];
      if (valueA < valueB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (valueA > valueB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });

    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const items = sortedData.slice(startIndex, endIndex);

    this.page = new Page(items, this.allTimeData.length, this.currentPage, this.itemsPerPage);
    this.pageNumbers = Array.from({ length: this.page.totalPages }, (_, i) => i + 1);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updatePage();
  }

  onSort(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.updatePage();
  }

  getDisplayRangeEnd(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.allTimeData.length);
  }
}
