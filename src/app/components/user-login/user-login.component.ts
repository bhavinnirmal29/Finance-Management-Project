import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserLoginModule } from 'src/app/modules/user-login/user-login.module';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  model:any =[];
  svc:UserLoginService;
  cust=new UserLoginModule();
  constructor(svc:UserLoginService) {
    this.svc = svc;
   }
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
    this.svc.Login(this.cust.Username,this.cust.Password).subscribe((data:string)=>{
      alert(data);
    })
  }

}
