import { Component } from '@angular/core';

@Component({
  selector: 'app-google-sign-in',
  templateUrl: './google-sign-in.component.html',
  styleUrls: ['./google-sign-in.component.scss']
})
export class GoogleSignInComponent {
  signInWithGoogle() {
    console.log('Google sign-in clicked');
    // Handle Google sign-in logic here
  }
}
