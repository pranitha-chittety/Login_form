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
      password: new FormControl('',[Validators.required,Validators.minLength(8)]),
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
  

  passwordMatchValidator(form: FormGroup) {
    const password = form.get(['password'])?.value;
    const confirmPassword = form.get(['confirmPassword'])?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
  Create(){

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
  get f() {
    console.log(this.signUpForm.controls)
    return this.signUpForm.controls;
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

