import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AdminInfoModule } from '../modules/admin-info/admin-info.module';

@Injectable({
  providedIn: 'root'
})
export class LoginInfoService {
  adminLogged:boolean = false;
  ngZone:NgZone;
  router:Router;
  // adminUsername:string;
  // constructor() { 
  // }
  // Login(admin:AdminInfoModule){
  //   if()
  // }
  name1:string;
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
  
}
