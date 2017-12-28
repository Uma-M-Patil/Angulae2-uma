import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { ProductListComponent }  from './Product/product-list.component';
import { StarComponent }  from './Product/Feature/star.component';
import {ProductService} from './Product/products.service';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
     imports:[ BrowserModule,FormsModule,HttpClientModule ],
     declarations:[ AppComponent,ProductListComponent,StarComponent ], 
     bootstrap: [ ProductListComponent ] ,
     providers: [ProductService]
     }
)
export class AppModule { }
    
