import { Component, NgZone, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
  ngZone:NgZone;
  router:Router;
  constructor(svc:RegistrationinfoService,ngZone:NgZone,router:Router) {
    this.svc=svc;
    this.ngZone = ngZone;
    this.router=router;
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
      if(data==true){
        alert("Your Registration is Complete");
        this.ngZone.run(()=>this.router.navigateByUrl('/UserLogin'));

      }
      else{
        alert("Data not inserted");
      }
    },error => {
      console.log(error);
    alert ('Duplicate Values Found...');}
    )
  }
}
