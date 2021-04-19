import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import{ActivatedRoute} from '@angular/router';
import { ReginfoModule } from 'src/app/modules/reginfo/reginfo.module';
import { RegistrationinfoService } from 'src/app/services/registrationinfo.service';
@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  alert:boolean=false;


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
  svc : RegistrationinfoService;
  cust = new ReginfoModule();
  constructor(svc : RegistrationinfoService,private router:ActivatedRoute) {
    this.svc = svc;
  }

  ngOnInit(): void {

    console.log(this.router.snapshot.params.id)
    this.svc.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
     this.editCustomer=new FormGroup({
        CustName :new FormControl(result['CustName']),
        PhoneNo : new FormControl(result['PhoneNo']),
        CustEmail :new FormControl(result['CustEmail']),
        CustUsername : new FormControl(result['CustUsername']),
        CustPassword :new FormControl(result['CustPassword']),
        CustAddress:new FormControl(result['CustAddress']),
        CardType:new FormControl(result['CardType']),
        BankName:new FormControl(result['BankName']),
        AccountNumber:new FormControl(result['AccountNumber']),
        IFSCCode:new FormControl(result['IFSCCode'])
    })
  })
}


UpdateCustomer(){
  this.svc.UpdateCustomer(this.router.snapshot.params.id,this.editCustomer.value).subscribe((result)=>{
    console.log(result,"Data Updated Successfully")
  })

}
}