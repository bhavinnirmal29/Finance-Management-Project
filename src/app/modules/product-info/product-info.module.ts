import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductInfoModule { 
  ProductID:number;
  ProductName:string;
  ProductDesc:string;
  ProductStock:number;
  ProductPrice:number;
}
