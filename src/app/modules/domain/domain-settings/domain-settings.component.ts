import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-domain-settings',
  templateUrl: './domain-settings.component.html',
  styleUrls: ['./domain-settings.component.scss']
})
export class DomainSettingsComponent implements OnInit {
  backendUrl = environment.backendUrl; // Fetch the backend URL from environment variables
  domainId: string | null = null;

  steps = [
    { 
      label: 'Step 1: Copy & paste code', 
      content: '', 
      completed: true 
    },
    { label: 'Step 2: Download zip', content: 'Content for step 2', completed: false },
    { label: 'Step 3: Download ads.txt', content: 'Content for step 3', completed: false },
    { label: 'Step 4: Connect with GA', content: 'Content for step 4', completed: false },
    { label: 'Step 5: Test Devices', content: 'Content for step 5', completed: false }
  ];

  dataSource = [
    { status: true, platform: 'desktop', name: 'Native Opt-in', subscriptionType: 'One-click' },
    { status: true, platform: 'mobile', name: 'Native Opt-in', subscriptionType: 'One-click' },
    { status: false, platform: 'gdpr', name: 'No Opt-in is added', subscriptionType: '' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.domainId = params.get('domainId');
      this.updateStepContent();
      console.log('Domain ID:', this.domainId);
    });
  }

  updateStepContent(): void {
    if (this.domainId) {
      this.steps[0].content = `<script src="${this.backendUrl}/domains/push.js?domain=${this.domainId}"></script>`;
    }
  }

  completeStep(step: any): void {
    step.completed = true;
  }

  editElement(element: any): void {
    // Implement edit functionality here
  }

  copyCodeToClipboard(code: string): void {
    navigator.clipboard.writeText(`<script src="${this.backendUrl}/domains/push.js?domain=${this.domainId}"></script>`).then(() => {
      alert('Code copied to clipboard!');
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  }
}
