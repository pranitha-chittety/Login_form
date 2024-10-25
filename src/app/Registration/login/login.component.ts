import { Component, signal ,Input} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-login',
  // standalone: true,
  //imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // constructor(private router: Router) {},
  constructor(private router: Router,private RegistrationService: RegistrationService) {}
    
    signUpForm: any = new FormGroup({
      FullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required,
        Validators.minLength(8),Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
        confirmPassword: new FormControl('', [Validators.required,
          //   Validators.minLength(8),
            Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)])
    })

  submitted = false;
  hidePassword = true;
  hideConfirmPassword = true;
  errorMessage: any;
  // hide = signal(true);
  // errorMessage: any;
  // clickEvent(event: MouseEvent) {
  //   this.hide.set(!this.hide());
  //   event.stopPropagation();
  // }

  get f() { return this.signUpForm.controls; }

  passwordMatchValidator() {
    const password = this.signUpForm.get(['password'])?.value;
    const confirmPassword = this.signUpForm.get(['confirmPassword'])?.value;
    return password === confirmPassword;
  }
  Create() {
    this.submitted = true;

    // Stop if the form is invalid
    if (this.signUpForm.invalid) {
      return;
    }

    // Handle form submission (authentication)
    const fullName = this.signUpForm.value.FullName;
    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;
    const confirmpwd = this.signUpForm.value.confirmPassword;
    if (password === confirmpwd) {
      alert('Login successful!')
    } else {
      this.errorMessage = 'true'
    }
      this.RegistrationService.ProfileData(fullName)
    console.log(`fullName:${fullName}, Email: ${email}, Password: ${password},confirmpwd: ${confirmpwd}`);


    if (this.submitted = true) {
      console.log("signup successful")
      this.router.navigate(['/profile'])
    }


    // Mock login validation (replace with real authentication logic)
    // if (email === 'test@example.com' && password === 'password123' && password == confirmpwd) {
    //   alert('Login successful!');
    //   // this.router.navigate(['/profile'])
    //   // Redirect or perform any action on successful login
    // } else if(email === 'test@example.com' && password != confirmpwd){
    //  this.errorMessage = 'please enter correct password'
    // } 
    // else {
    //   this.errorMessage = 'Invalid email or password';
    // }
    this.signUpForm.reset()
    // if(this.submitted = true){
    //   this.router.navigate(['/profile'])
    // } 
  }
  updateErrorMessage() {
    if (this.signUpForm.value.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.signUpForm.value.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  signInWithGoogle(){
    // this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signInWithFB() {
    // this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  login() {
    this.router.navigate(['']);
  }


}


