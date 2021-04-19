import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PurchasedProductInfoModule { 
  ProductID:number;
  ProductName:string;
  Quantity:number;
  TotalAmount:number;
}
