import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class OrderInfoModule {
  TransactionID:number;
  RegNumber:number;
  CardID:string;
  ProductID:number;
  Quantity:number;
  TotalAmount:number;
  EMIDuration:number;
  EMIPaid:number;
  EMIBalance:number;
  CreatedDate:Date;
 }
