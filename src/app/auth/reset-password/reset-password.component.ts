import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  token!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    this.token = this.route.snapshot.params['token'];
  }

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      const payload = {
        token: this.token,
        ...this.resetPasswordForm.value
      };
      this.authService.resetPassword(payload).subscribe({
        next: (response: any) => {
          this.toastr.success('Password has been reset', 'Success');
        },
        error: (error: any) => {
          this.toastr.error(error.error.message || 'Reset failed', 'Error');
        }
      });
    }
  }
}
