import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent {
  data_storage: any[] = []; 

  show_descripiton: any[] = []; 

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {


    const data = localStorage.getItem('cart_data')

    if (data !== null) {
      this.data_storage = JSON.parse(data); 
    }

   
    this.route.params.subscribe((param) => {
      const id = param['id'];

      console.log(id)

      console.log(this.data_storage)

    let description_data =  this.data_storage.filter((product) => product.id == id)

      this.show_descripiton = description_data

    })
    
  }

}
