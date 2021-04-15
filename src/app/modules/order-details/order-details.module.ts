import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class OrderDetailsModule {
  TransactionId:number;
  RegNumber:number;
  CardId:number;
  ProductId:number;
  Quantity:number;
  TotalAmount:number;
  EmiDuration:number;
  EmiPaid:number;
  EmiBalance:number;
  CreatedDate:number;
 }
