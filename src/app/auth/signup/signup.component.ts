import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { strongPasswordValidator, mobileNumberValidator } from 'src/app/validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      mobile: [null, [Validators.required, mobileNumberValidator()]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), strongPasswordValidator()]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.authService.signup(this.signupForm.value).subscribe({
        next: (response: any) => {
          this.toastr.success('Signup successful!', 'Success');
          console.log('Signup successful:', response);
          // Handle successful signup, e.g., navigate to login page
        },
        error: (error: any) => {
          if (error.status >= 400 && error.error.message) {
            this.toastr.error(error.error.message);
          } else {
            this.toastr.error('Signup failed. Please try again.', 'Error');
          }
          console.error('Signup failed:', error);
          // Handle error, e.g., show error message
        }
      });
    } else {
      this.toastr.error('Please correct the errors in the form', 'Error');
    }
  }
}
