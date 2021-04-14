import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminInfoModule } from 'src/app/modules/admin-info/admin-info.module';
import { LoginInfoService } from 'src/app/services/login-info.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  username:string
  svc:LoginInfoService
  admin:AdminInfoModule;
  isLoggedIn:boolean;
  constructor(svc:LoginInfoService) {
    this.svc=svc;
   }

  ngOnInit(): void {
    // this.username=localStorage.getItem("AdminUsername");
    this.username=this.svc.adminUsername;
    this.isLoggedIn=this.svc.adminLogged;
    alert(this.isLoggedIn+" "+this.username);
  }
  onLogout(){
    //this.adminLogged=false;
    this.svc.adminUsername="";
    this.svc.Logout();
    localStorage.setItem("AdminUsername","");
  }

}
