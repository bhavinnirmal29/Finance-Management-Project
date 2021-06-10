import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminInfoModule } from 'src/app/modules/admin-info/admin-info.module';
import { AdminInfoService } from 'src/app/services/admin-info.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {alert:boolean=false;

  editCustomer=new FormGroup({
   CustName :new FormControl(''),
   PhoneNo : new FormControl(''),
   CustEmail :new FormControl(''),
   CustUsername : new FormControl(''),
   CustPassword :new FormControl(''),
   CustAddress:new FormControl(''),
   CardType:new FormControl(''),
   BankName:new FormControl(''),
   AccountNumber:new FormControl(''),
   IFSCCode:new FormControl('')
 })
 
   model : any = [];
   svc : AdminInfoService;
   cust = new AdminInfoModule();
   constructor(svc : AdminInfoService,private router:ActivatedRoute) {
     this.svc = svc;
   }
 
   ngOnInit(): void {
 
     console.log(this.router.snapshot.params.id)
     this.svc.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      this.editCustomer=new FormGroup({
         CustName :new FormControl(result['CustName'],Validators.required),
         PhoneNo : new FormControl(result['PhoneNo'],[Validators.required,Validators.pattern("[0-9]{10}")]),
         CustEmail :new FormControl(result['CustEmail'],[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
         CustAddress:new FormControl(result['CustAddress'],Validators.required),
         CardType:new FormControl(result['CardType'],Validators.required),
         BankName:new FormControl(result['BankName'],Validators.required),
         IFSCCode:new FormControl(result['IFSCCode'],[Validators.required,Validators.minLength(11),Validators.maxLength(11)])
     })
   })
 }
 
 
 UpdateCustomer(){
   this.svc.UpdateCustomer(this.router.snapshot.params.id,this.editCustomer.value).subscribe((result)=>{
     console.log(result,"Data Updated Successfully")
     alert("Data Updated Successfully");
     
   })
 
 }
}