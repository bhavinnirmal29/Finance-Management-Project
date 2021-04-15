import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EmiCardInfoModule { 
  
  CardNumber:number;
  RegNumber:number;
  CardType:string;
  CardLimit:number;
  ValidityPeriod:string;
  AccountStatus:string;
  Username:string;
  CustName:string;
}
