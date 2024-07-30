import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-request-reset-password',
  templateUrl: './request-reset-password.component.html',
  styleUrls: ['./request-reset-password.component.scss']
})
export class RequestResetPasswordComponent {
  requestResetForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
    this.requestResetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.requestResetForm.valid) {
      this.authService.requestResetPassword(this.requestResetForm.value).subscribe({
        next: (response: any) => {
          this.toastr.success('Password reset email sent', 'Success');
        },
        error: (error: any) => {
          this.toastr.error(error.error.message || 'Request failed', 'Error');
        }
      });
    }
  }
}
