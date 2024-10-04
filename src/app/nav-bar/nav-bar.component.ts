import { ProductService } from '../login/services/product.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  cartCount: number = 0;
  isVisible: boolean = true;

  constructor(private router: Router, private ProductService : ProductService) { } 
  ngOnInit(): void {
    
    this.ProductService.cart_no$.subscribe(count => {
      this.cartCount = count;
    });

    this.router.events.subscribe(() => {
      this.isVisible = this.router.url !== '/login'; 
    });
  }

  logout(){
     console.log('Logout button clicked'); 
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}

