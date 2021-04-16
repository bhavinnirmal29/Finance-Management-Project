import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ReginfoModule {
  RegNumber:number;
  CustName:string;
  PhoneNo:number;
  CustEmail:string;
  CustUsername:string;
  CustPassword:string;
  CustAddress:string;
  CardType:string;
  BankName:string;
  AccountNumber:string;
  IFSCCode:string;
  ApprovalStatus:string;
}
