import { Component, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  // standalone: true,
  //imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // constructor(private router: Router) {},

  signUpForm:FormGroup;
  submitted = false;
  // signUpForm: FormGroup<any> = new FormGroup({
  //   FullName: new FormControl('', [Validators.required,Validators.minLength(3)]),
  //   email: new FormControl('',[Validators.required,Validators.email]),
  //   password: new FormControl('',[Validators.required,Validators.minLength(8)]),
  //   confirmPassword: new FormControl('',[Validators.required])
  // })

  constructor(private fb: FormBuilder, private router: Router) {
    this.signUpForm = this.fb.group({
      FullName: new FormControl('', [Validators.required,Validators.minLength(3)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
      confirmPassword: new FormControl('',[Validators.required])
    }, { 
      validators: this.passwordMatchValidator // Add custom validator here
    });
  }
  
  hide = signal(true);
  errorMessage: any;
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  
  get f() { return this.signUpForm.controls; }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get(['password'])?.value;
    const confirmPassword = form.get(['confirmPassword'])?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
  Create(){
    this.submitted = true;

    // Stop if the form is invalid
    if (this.signUpForm.invalid) {
      return;
    }

    // Handle form submission (authentication)
    const fullName = this.signUpForm.value.FullName;
    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;
    const confirmpwd =this.signUpForm.value.confirmPassword;

    console.log(`fullName:${fullName}, Email: ${email}, Password: ${password},confirmpwd: ${confirmpwd}`);

    // Mock login validation (replace with real authentication logic)
    if (fullName === 'john' && email === 'test@example.com' && password === 'password123' && password == confirmpwd) {
      alert('Login successful!');
      // Redirect or perform any action on successful login
    } else if(email === 'test@example.com' && password != confirmpwd){
     this.errorMessage = 'please enter correct password'
    } 
    else {
      this.errorMessage = 'Invalid email or password';
    }
    this.signUpForm.reset()
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

  signInWithGoogle(): void {
    // this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signInWithFB(): void {
    // this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  login(){
    this.router.navigate(['']);
  }


  }

