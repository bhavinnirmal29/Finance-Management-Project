import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReginfoModule } from 'src/app/modules/reginfo/reginfo.module';
import { RegistrationinfoService } from 'src/app/services/registrationinfo.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model:any = [];
  svc:RegistrationinfoService;
  reg=new ReginfoModule();
  constructor(svc:RegistrationinfoService) {
    this.svc=svc;
   }

  ngOnInit(): void {
  }
  RegisterData(regForm:NgForm):void{
    console.log(regForm.value);
    this.reg.CustName = this.model.CustName;
    this.reg.PhoneNo = this.model.PhoneNo;
    this.reg.CustEmail = this.model.Email;
    this.reg.CustUsername=this.model.uname;
    this.reg.CustPassword=this.model.pwd;
    this.reg.CustAddress = this.model.Address;
    this.reg.CardType = this.model.Card;
    this.reg.BankName = this.model.Bank;
    this.reg.AccountNumber=this.model.Accountno;
    this.reg.IFSCCode = this.model.ifsc;
    this.reg.ApprovalStatus = "Pending";
    console.log(this.reg);
    console.log(this.model);
    this.svc.RegisterCustomer(this.reg).subscribe((data:boolean)=>{
      alert(data);
      if(data==true){
        alert("New Customer Registered");
      }
    })
  }
}
