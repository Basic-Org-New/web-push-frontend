import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomainService } from 'src/app/services/domain.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-domain',
  templateUrl: './list-domain.component.html',
  styleUrls: ['./list-domain.component.scss']
})
export class ListDomainComponent implements OnInit {
  domains: any[] = [];

  constructor(
    private domainService: DomainService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.fetchDomains();
  }

  fetchDomains(): void {
    this.domainService.getDomainsTokens().subscribe(
      data => {
        console.log('Fetched domains:', data);
        this.domains = data;
      },
      error => {
        console.error('Failed to fetch domains:', error);
        this.toastr.error('Failed to fetch domains', 'Error');
      }
    );
  }

  deleteDomain(id: number): void {
    if (confirm('Are you sure you want to delete this domain?')) {
      console.log('Deleting domain ID:', id);
      this.domainService.deleteDomain(id).subscribe(
        () => {
          console.log('Domain deleted successfully');
          this.toastr.success('Domain deleted successfully', 'Success');
          this.fetchDomains(); // Refresh the list
        },
        error => {
          console.error('Failed to delete domain:', error);
          this.toastr.error('Failed to delete domain', 'Error');
        }
      );
    }
  }

  cloneDomain(id: number): void {
    console.log('Cloning domain ID:', id);
    this.domainService.getDomainById(id).subscribe(
      data => {
        console.log('Domain data for cloning:', data);
        // Remove the domain field and ID to clone
        const clonedData = { ...data };
        delete clonedData.id;
        delete clonedData.domain;

        // Navigate to add-domain page with pre-filled data
        this.router.navigate(['/dashboard/domains/add'], {
          queryParams: {
            ...clonedData,
            mode: 'clone',
            serviceAccountFilePath: data.serviceAccountFilePath || ''
          }
        });
      },
      error => {
        console.error('Failed to fetch domain data for cloning:', error);
        this.toastr.error('Failed to fetch domain data', 'Error');
      }
    );
  }

  editDomain(id: number): void {
    console.log('Editing domain ID:', id);
    this.router.navigate(['/dashboard/domains/add'], { queryParams: { domainId: id, mode: 'edit' } });
  }

  addNewDomain(): void {
    console.log('Navigating to add new domain');
    this.router.navigate(['/dashboard/domains/add']);
  }
}
