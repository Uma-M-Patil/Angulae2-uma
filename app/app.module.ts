import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { ProductListComponent }  from './Product/product-list.component';
import { StarComponent }  from './Product/Feature/star.component';
//import { ProductDetailComponent }  from './Product/product-detail.component';
import { WelcomeComponent }  from './home/welcome.component';
import {ProductService} from './Product/products.service';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
     imports:[ BrowserModule,FormsModule,HttpClientModule,
        RouterModule.forRoot([
            { path: 'products', component: ProductListComponent},
            //{ path: 'products/:id', component: ProductDetailComponent},
            { path: 'welcome', component: WelcomeComponent},
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
            ],{ useHash: true }),
            
    ],
     declarations:[ AppComponent,ProductListComponent,StarComponent,WelcomeComponent], 
     bootstrap: [ AppComponent ] ,
     providers: [ProductService]
     }
)
export class AppModule { }
    

