import { ProductService } from 'src/app/login/services/product.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  mAddOrEditProduct: boolean = false;


  data_storage: any[] = [];

  cart_items: any[] = [];

  cart_data: any [] = []

  added: boolean = false;
 
  constructor(private router : Router, private ProductService : ProductService) {
    
  }

  ngOnInit(): void {

    const data = localStorage.getItem('cart_data')

    if (data !== null) {
      this.data_storage = JSON.parse(data); 
    }
    
    
  }


  addCart() {
    this.router.navigate(['add-product']);
    this.mAddOrEditProduct = true;
  }

 
  recivedData(newDataStorage: any) {
    
    const updatedDataStorage = [...this.data_storage, newDataStorage];
    this.data_storage = updatedDataStorage;
    localStorage.setItem('cart_data', JSON.stringify(this.data_storage));
  }

  showDescription(item: any) {
    console.log(item)
    this.router.navigate([`product-description/${item.id}`])
  }

  addProduct(item: any) {

    item.added = true;

    var addQuantity = 
    
      {
        ...item,
        quantity: 1
      }
    

    const updatedDataStorage = [...this.cart_items, addQuantity];

    this.cart_items = updatedDataStorage;

    console.log(this.cart_items)

    localStorage.setItem('added_cart_data', JSON.stringify(this.cart_items));
  

    this.ProductService.incrementCartCount();

  }

  deleteUpdate(){

    const data = localStorage.getItem('added_cart_data')

    if (data !== null) {
      this.cart_data = JSON.parse(data);
    }


  }



  deleteProduct(item:any){
    const index = this.data_storage.indexOf(item);
    let allAddCardData = localStorage.getItem('added_cart_data');

    if(allAddCardData != null){
      let parsedDAta =  JSON.parse(allAddCardData)
      let removedAdd = parsedDAta.filter((val : any) => item.id !== val.id )
      localStorage.setItem('added_cart_data',JSON.stringify(removedAdd));
    }

    if (index !== -1) {
      this.data_storage.splice(index, 1);
      
      localStorage.setItem('cart_data', JSON.stringify(this.data_storage));
    }

    this.ProductService.decCartCount();

  }


  editProduct(item:any){
    const edit_product =  this.data_storage.filter((val)=> item.id == val.id)
    this.ProductService.updateEditProductData(edit_product);


    const index = this.data_storage.indexOf(item);

    if (index !== -1) {
      this.data_storage.splice(index, 1);
      
      localStorage.setItem('cart_data', JSON.stringify(this.data_storage));
    }


  }

}
