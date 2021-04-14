import { Component, NgZone, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminInfoService } from 'src/app/services/admin-info.service';
import { LoginInfoService } from 'src/app/services/login-info.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  name:string;
  pwd:string;
  model:any=[];
  svc:AdminInfoService;
  svc1:LoginInfoService;
  ngZone:NgZone;
  router:Router;
  adminLogged:Observable<boolean>;
  constructor(svc:AdminInfoService,svc1:LoginInfoService,ngZone:NgZone,router:Router) {
    this.svc=svc;
    this.svc1=svc1;
    this.ngZone=ngZone;
    this.router=router;
  }
  ngOnInit(): void {

  }
  AdminLogin(AdminForm:NgForm):void{
    this.name =AdminForm.value.userName;
    this.pwd = AdminForm.value.pwd;
    console.log(this.name+" "+this.pwd);
    this.svc.AdminLogin(this.name,this.pwd).subscribe((data:boolean)=>{
      if(data==true){
        alert("Admin Login Successfull");
        localStorage.setItem("AdminUsername",this.name);
        localStorage.setItem("AdminLogged","true");
        this.svc1.Login(this.name);
        //this.svc1.adminUsername=this.name;
        this.ngZone.run(()=>this.router.navigateByUrl('/AdminRights'));
      }
      else{
        alert("Login Unsuccessfull");
      }
    })
  }

}
