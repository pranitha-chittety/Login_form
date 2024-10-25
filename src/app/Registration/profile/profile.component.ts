import { HttpClient } from '@angular/common/http';
import { Component,Input } from '@angular/core';
import {RegistrationService} from  '../registration.service'

@Component({
  selector: 'app-profile',
  // standalone: true,
  //imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  
  data!: string;

constructor(private RegistrationService: RegistrationService){}


ngOnInit() {
  this.RegistrationService.currentData.subscribe((form:any) => {
    this.data = form;
    console.log("hello",this.data)
  });
}
}

