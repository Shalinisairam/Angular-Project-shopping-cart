import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/login/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  @Input() editProd: any[] = [];
  @Output() dataStorageUpdated = new EventEmitter<any>();

  addProductData: any = { id: null,
    name: '',
    price: null,
    description: '',
    image: ''};
  data_storage: any[] = [];
  editproduct: number = 0;

  constructor(private router: Router, private productservice: ProductService) {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    this.getProductData(); 
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.addProductData.image = reader.result as string;
      const base64String = event.target.result;
      console.log(base64String);
    };

    reader.readAsDataURL(file);
  }

  onSubmit() {
    let productData = {
      id: this.addProductData.id,
      name: this.addProductData.name,
      price: this.addProductData.price,
      description: this.addProductData.description,
      image: this.addProductData.image,
      quantity: 0
      
    };

    if (productData) { 
      this.dataStorageUpdated.emit(productData);
      this.router.navigate(['/product-list']);
    }
  }

 
  getProductData() {
    this.productservice.editProductData$.subscribe((data) => {
      this.editproduct = data.length;
      
      if (data.length > 0) {
        const receivedData = data[0];
        this.addProductData.id = receivedData.id;
        this.addProductData.name = receivedData.name;
        this.addProductData.price = receivedData.price;
        this.addProductData.description = receivedData.description;
        console.log('Received data in second component:', this.addProductData);
      }
    });
  }
}


