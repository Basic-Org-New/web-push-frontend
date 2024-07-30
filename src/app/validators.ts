import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Validator for strong password
export function strongPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }

    const hasUpperCase = /[A-Z]+/.test(value);
    const hasLowerCase = /[a-z]+/.test(value);
    const hasNumeric = /[0-9]+/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]+/.test(value);

    const valid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialChar;

    return valid ? null : { strongPassword: true };
  };
}

// Validator for mobile number
export function mobileNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value || typeof value !== 'object') {
      return { mobileNumber: true }; // Ensure the value is an object
    }

    const { dial_code, phone } = value;
    if (!dial_code || !phone) {
      return { mobileNumber: true }; // Ensure both dial_code and phone exist
    }

    // International phone number regex
    const isValid = /^\+?[1-9]\d{1,14}$/.test(`${dial_code}${phone}`);

    return isValid ? null : { mobileNumber: true };
  };}
