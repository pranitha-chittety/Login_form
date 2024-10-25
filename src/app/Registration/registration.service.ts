import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() { }
  private dataSource = new BehaviorSubject<string>(''); // Example with string data
  currentData = this.dataSource.asObservable();

  ProfileData(data: any) {
    this.dataSource.next(data);
  }
}
