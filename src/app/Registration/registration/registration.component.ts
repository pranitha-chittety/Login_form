import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  // standalone:true,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  constructor(private router: Router) {}
  submitted = false;
  RegistrationForm: any = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)])
  })
   
  hide = signal(true);
  errorMessage: any;
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  get f() { return this.RegistrationForm.controls; }

  updateErrorMessage() {
    if (this.RegistrationForm.value.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.RegistrationForm.value.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  signup(){
  this.router.navigate(['/login']);
  }
  login(){
    this.submitted = true;

    // Stop if the form is invalid
    if (this.RegistrationForm.invalid) {
      return;
    }

    // Handle form submission (authentication)
    const email = this.RegistrationForm.value.email;
    const password = this.RegistrationForm.value.password;

    console.log(`Email: ${email}, Password: ${password}`);

    // Mock login validation (replace with real authentication logic)
    if (email === 'test@example.com' && password === 'password123') {
      alert('Login successful!');
      // Redirect or perform any action on successful login
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
   
  
  Create(){

  }
  signInWithGoogle(): void {
    // this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signInWithFB(): void {
    // this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
}
