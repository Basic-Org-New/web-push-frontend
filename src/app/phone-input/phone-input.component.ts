import { Component, forwardRef, OnInit, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { COUNTRY_CODES } from './country-codes';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneInputComponent),
      multi: true
    }
  ]
})
export class PhoneInputComponent implements OnInit, ControlValueAccessor {
  countryCodes = COUNTRY_CODES;
  filteredCountryCodes = COUNTRY_CODES;
  selectedCountry = this.countryCodes[0];
  phoneNumber = '';
  showDropdown = false;

  onChange: any = () => {};
  onTouched: any = () => {};

  ngOnInit() {}

  writeValue(value: any): void {
    if (value && typeof value === 'object') {
      const { dial_code, phone } = value;
      const country = this.countryCodes.find(c => c.dial_code === dial_code);
      if (country) {
        this.selectedCountry = country;
        this.phoneNumber = phone;
      }
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  selectCountry(country: any) {
    this.selectedCountry = country;
    this.showDropdown = false;
    this.onChange({ dial_code: this.selectedCountry.dial_code, phone: this.phoneNumber });
    this.onTouched();
  }

  onPhoneNumberChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.phoneNumber = input.value;
    this.onChange({ dial_code: this.selectedCountry.dial_code, phone: this.phoneNumber });
    this.onTouched();
  }

  onSearchChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const searchValue = input.value.toLowerCase();
    this.filteredCountryCodes = this.countryCodes.filter(country =>
      country.name.toLowerCase().includes(searchValue) ||
      country.dial_code.includes(searchValue)
    );
  }

  @HostListener('blur')
  onBlur() {
    this.onTouched();
  }
}
