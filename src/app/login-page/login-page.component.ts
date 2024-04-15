import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    // Handle login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }

  loginWithFacebook() {
    // Handle Facebook login logic here
    console.log('Logging in with Facebook...');
  }

  loginWithGoogle() {
    // Handle Google login logic here
    console.log('Logging in with Google...');
  }
}
