import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';
import { DomainService } from 'src/app/services/domain.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-domain',
  templateUrl: './add-domain.component.html',
  styleUrls: ['./add-domain.component.scss']
})
export class AddDomainComponent implements OnInit {
  domainForm: FormGroup;
  files: File[] = [];
  file: File | null = null;
  fileError: string | null = null;
  submitted = false;
  domainId: number | null = null;
  isCloneMode = false;

  constructor(
    private fb: FormBuilder,
    private domainService: DomainService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.domainForm = this.fb.group({
      domain: ['', [Validators.required, Validators.pattern(/^(?:(?:[a-zA-Z0-9-]{1,63}\.[a-zA-Z]{2,})|(?:\d{1,3}\.){3}\d{1,3})$/)]],
      firebaseEmail: ['', [Validators.required, Validators.email]],
      firebaseConfig: ['', Validators.required],
      publicKey: ['', Validators.required],
      privateKey: ['', Validators.required],
      serviceAccount: ['']
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log('Query params:', params);

      if (params['mode'] === 'edit' && params['domainId']) {
        this.domainId = +params['domainId'];
        this.loadDomainData(this.domainId);
      } else if (params['mode'] === 'clone') {
        this.isCloneMode = true;
        this.domainForm.patchValue({
          firebaseEmail: params['firebaseEmail'],
          firebaseConfig: params['firebaseConfig'],
          publicKey: params['publicKey'],
          privateKey: params['privateKey']
        });
        console.log('Patching form with cloned data:', params);

        // Simulate file selection for clone
        if (params['serviceAccountFilePath']) {
          this.file = new File([], params['serviceAccountFilePath']);
          this.files = [this.file];
          this.domainForm.patchValue({ serviceAccount: 'file' });
        }
      }
    });
  }

  loadDomainData(id: number): void {
    console.log('Loading domain data for ID:', id);
    this.domainService.getDomainById(id).subscribe(
      data => {
        console.log('Loaded domain data:', data);
        this.domainForm.patchValue({
          domain: data.domain,
          firebaseEmail: data.firebaseEmail,
          firebaseConfig: data.firebaseConfig,
          publicKey: data.publicKey,
          privateKey: data.privateKey
        });
        if (data.serviceAccountFilePath) {
          // Simulate file selection
          this.file = new File([], data.serviceAccountFilePath);
          this.files = [this.file];
          this.domainForm.patchValue({ serviceAccount: 'file' });
        }
      },
      error => {
        console.error('Failed to load domain data:', error);
        this.toastr.error('Failed to load domain data', 'Error');
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    console.log('Form submitted:', this.domainForm.value);
    if (this.domainForm.valid && (this.file || this.isCloneMode)) {
      const formData = this.domainForm.value;

      const formDataWithFile = new FormData();
      formDataWithFile.append('domain', formData.domain);
      formDataWithFile.append('firebaseEmail', formData.firebaseEmail);
      formDataWithFile.append('firebaseConfig', formData.firebaseConfig);
      formDataWithFile.append('publicKey', formData.publicKey);
      formDataWithFile.append('privateKey', formData.privateKey);
      if (!this.isCloneMode && this.file) {
        formDataWithFile.append('serviceAccount', this.file, this.file.name);
      }

      console.log('Form data with file:', formDataWithFile);

      if (this.domainId) {
        this.updateDomain(this.domainId, formDataWithFile);
      } else {
        this.addDomain(formDataWithFile);
      }
    } else {
      if (!this.file && !this.isCloneMode) {
        this.fileError = 'Service account file is required.';
        this.toastr.error(this.fileError, 'Error');
      }
      if (this.domainForm.invalid) {
        this.toastr.error('Please fill out the form correctly.', 'Error');
      }
    }
  }

  addDomain(formDataWithFile: FormData): void {
    console.log('Adding domain:', formDataWithFile);
    this.domainService.addDomain(formDataWithFile).subscribe(
      response => {
        console.log('Domain added successfully:', response);
        this.toastr.success('Domain added successfully!', 'Success');
        this.submitted = false;
        this.domainForm.reset();
        this.files = [];
        this.file = null;
      },
      error => {
        console.error('Failed to add domain:', error);
        this.toastr.error(error.message || 'Failed to add domain.', 'Error');
      }
    );
  }

  updateDomain(id: number, formDataWithFile: FormData): void {
    console.log('Updating domain ID:', id, 'with data:', formDataWithFile);
    this.domainService.updateDomain(id, formDataWithFile).subscribe(
      response => {
        console.log('Domain updated successfully:', response);
        this.toastr.success('Domain updated successfully!', 'Success');
        this.router.navigate(['/dashboard/domains/list']);
      },
      error => {
        console.error('Failed to update domain:', error);
        this.toastr.error(error.message || 'Failed to update domain.', 'Error');
      }
    );
  }

  onSelect(event: NgxDropzoneChangeEvent) {
    this.fileError = null;
    const file = event.addedFiles[0];
    console.log('Selected file:', file);
    if (file.type !== 'application/json') {
      this.fileError = 'Only JSON files are supported.';
      this.toastr.error(this.fileError, 'Error');
    } else if (file.size > 1048576) { // 1 MB = 1048576 bytes
      this.fileError = 'File size must be less than 1MB.';
      this.toastr.error(this.fileError, 'Error');
    } else {
      this.files = [file];
      this.file = file;
      this.domainForm.patchValue({ serviceAccount: 'file' });
    }
  }

  onRemove(file: File) {
    console.log('Removed file:', file);
    this.files = this.files.filter(f => f !== file);
    if (this.files.length === 0) {
      this.file = null;
      this.domainForm.patchValue({ serviceAccount: '' });
    }
  }
}
