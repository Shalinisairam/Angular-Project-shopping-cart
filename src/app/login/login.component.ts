import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onlogin() {
  
    if (this.email && this.password) {
     localStorage.setItem('isLoggedIn','true');
     
      this.router.navigate(['/product-list']);
    } else {
      alert('Please enter valid email and password');
    }
  }
}