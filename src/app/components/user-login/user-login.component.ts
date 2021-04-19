import { DOCUMENT } from '@angular/common';
import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReginfoModule } from 'src/app/modules/reginfo/reginfo.module';
import { UserLoginModule } from 'src/app/modules/user-login/user-login.module';
import { LoginInfoService } from 'src/app/services/login-info.service';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  model:any =[];
  svc:UserLoginService;
  cust= new UserLoginModule();
  svc1:LoginInfoService;
  ngZone:NgZone;
  router:Router;
  custList=new ReginfoModule();
  constructor(svc:UserLoginService,svc1:LoginInfoService,ngZone:NgZone,router:Router) {
    this.svc = svc;
    this.svc1=svc1;
    this.ngZone = ngZone;
    this.router=router;
   }
   username:string;
  ngOnInit(): void {

  
 
  }
 
  showModal():void {
    ($("#myModal") as any).modal('show');
  }
  sendModal(): void {
    //do something here
    this.hideModal();
  }
  hideModal():void {
    document.getElementById('close-modal').click();
  }
  Login(loginForm:NgForm):void{
    this.cust.Username = loginForm.value.name;
    this.cust.Password = loginForm.value.pwd;
    console.log(this.cust.Username,this.cust.Password);
    this.svc.Login(this.cust.Username,this.cust.Password).subscribe((data:string)=>{
      alert(data);
      if(data=="Login Successfull")
      {
        localStorage.setItem("UserUname",this.cust.Username);
        localStorage.setItem("UserLogged","true");
        this.ngZone.run(()=>this.router.navigateByUrl('/Dashboard'));
        this.svc1.UserLogin();

      }
      else{
        alert(data);
      }
    },error => {

      console.log(error);

    alert ('Unexpected Error Occur...');}

    )

  }


}
