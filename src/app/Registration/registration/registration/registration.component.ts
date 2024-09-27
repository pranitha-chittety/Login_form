import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-registration',
  // standalone:true,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  constructor(private router: Router) {}

  RegistrationForm: FormGroup<any> = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
   
  hide = signal(true);
  errorMessage: any;
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

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

  }
  Create(){

  }
}
