import { Component } from '@angular/core'; 
 import{ProductService} from './products.service'
import { IProduct } from './product';
 
 @Component({ 
   selector: 'product-list-app', 
   templateUrl: './app/Product/product-list.component.html',
   providers: [ProductService]
 }) 
 export class ProductListComponent  {  

   pageTitle:string='Product List';
   imageWidth:number=50;
   imageMargin:number=2;
   showImage:boolean=false;

   filteredProduct:IProduct;
   _listFilter:string='Garden Cart';

   products:IProduct[];

constructor(private _productService : ProductService)
{
 // this.filteredProduct=this._productService.getProducts();
}

toggleImage():void{
  this.showImage=!this.showImage;
}

get listFilter():string {
  return this._listFilter;
}

set listFilter(value:string) {
  this._listFilter = value;
  this.filteredProduct=this.performFilter(this._listFilter);
  console.log(value);

}

ngOnInit(): void {
  this._productService.getProducts()
  .subscribe(products => {
    this.products= products,
    this.filteredProduct = this.products;
  },
  error => this.errorMessage= <any>error);
}

performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
              product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}	

  /* products: Iproduct[] = [
    {
        "productId": 1,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
        "productId": 2,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    }
]; */


products: Iproduct[] = this._productService.getProducts();
 } 

