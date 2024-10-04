import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from '../main/product-list/product-list.component'; 
import { LoginComponent } from '../login/login.component'; 
import { AddProductComponent } from '../main/add-product/add-product.component';
import { MycartComponent } from '../main/mycart/mycart.component';
import { ProductDescriptionComponent } from '../main/product-description/product-description.component';


const routes: Routes = [
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },  
  { path: 'login', component: LoginComponent },          
  { path: 'add-product', component: AddProductComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'mycart', component: MycartComponent },
  { path: 'product-description/:id', component: ProductDescriptionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] 
})
export class AppRoutingModule { } 
