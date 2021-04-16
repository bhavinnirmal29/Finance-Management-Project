import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AdminInfoModule } from '../modules/admin-info/admin-info.module';

@Injectable({
  providedIn: 'root'
})
export class LoginInfoService {
  adminLogged:boolean = false;
  userLogged:boolean=false;
  ngZone:NgZone;
  router:Router;
  // adminUsername:string;
  // constructor() { 
  // }
  // Login(admin:AdminInfoModule){
  //   if()
  // }
  userName:string;
  name1:string;
  user:string;
  adminUsername:string;
  constructor(ngZone:NgZone,router:Router) { 
    this.ngZone=ngZone;
    this.router=router;
  }
  Login(adminUsername:string){
    this.adminLogged=true;
    this.name1 = localStorage.getItem("AdminUsername");
    this.adminUsername = localStorage.getItem("AdminUsername");
    //alert(this.name1+" Name 1 local Storage");
    this.adminUsername=this.name1;
  }
  Logout() {
    this.adminLogged=false;
    this.adminUsername="";
    localStorage.setItem("AdminUsername",null);
    localStorage.setItem("AdminLogged","false");
    this.ngZone.run(()=>this.router.navigateByUrl('/Login'));
  }
  UserLogin(){
    this.userLogged=true;
    this.user = localStorage.getItem("UserUname");
    this.userName = this.user;
  }
  UserLogout(){
    this.userLogged=false;
    this.userName= "";
    localStorage.setItem("UserUname",null);
    localStorage.setItem("UserLogged","false");
    localStorage.setItem("LoggedRegNumber",null);
    this.ngZone.run(()=>this.router.navigateByUrl('/Login'));
  }
}
