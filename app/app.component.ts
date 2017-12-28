import { Component } from '@angular/core'; 
 
 
 @Component({ 
   selector: 'pm-app', 
   //template: `<h1>Hello {{name}}</h1>`, 
  template: `
      <ul class='nav '>
      <li><a [routerLink]="['/']">Home</a></li>
      <li><a [routerLink]="['/products']">Product List</a></li>
      </ul>
      <router-outlet></router-outlet>
      `
 }) 
 export class AppComponent  { name = 'Angular'; } 

