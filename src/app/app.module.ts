import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ProductListComponent } from './main/product-list/product-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component'; 
import { AppRoutingModule } from './approuting/app.routing.module';
import { AddProductComponent } from './main/add-product/add-product.component';
import { MycartComponent } from './main/mycart/mycart.component';
import { ProductDescriptionComponent } from './main/product-description/product-description.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ProductListComponent,
    NavBarComponent,
    AddProductComponent,
    MycartComponent,
    ProductDescriptionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
