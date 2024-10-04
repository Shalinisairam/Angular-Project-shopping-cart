import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  cart_added:any[] = [];

  private _cart_no: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  cart_no$ = this._cart_no.asObservable();


  private editProductData: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  editProductData$ = this.editProductData.asObservable();

  constructor() { }

  get cart_no(): number {
    return this._cart_no.value;
  }

  set cart_no(value: number) {
    this._cart_no.next(value);
  }

  incrementCartCount() {
    this.cart_no += 1;
  }

  decCartCount() {
    if(this.cart_no > 0){
      this.cart_no -= 1;
    }
    
  }

  updateEditProductData(data: any[]) {
    this.editProductData.next(data);
  }
  

}
