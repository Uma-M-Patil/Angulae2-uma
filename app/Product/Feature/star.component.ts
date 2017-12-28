import { Component, OnChanges, Input } from '@angular/core'; 

 
 @Component({ 
   selector: 'pm-star', 
   templateUrl: './app/Product/Feature/star.component.html',
   styleUrls: ['./app/Product/Feature/star.component.css']
   
 }) 
 export class StarComponent implements OnChanges {  
    @Input() rating:number;
    starWidth: number;
    
    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

 }
