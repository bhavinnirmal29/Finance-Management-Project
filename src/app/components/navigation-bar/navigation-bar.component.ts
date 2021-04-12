import { Component, OnInit } from '@angular/core';
import { LoginInfoService } from 'src/app/services/login-info.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  username:string
  svc:LoginInfoService
  constructor(svc:LoginInfoService) {
    this.svc=svc;
   }

  ngOnInit(): void {
    this.username=localStorage.getItem("AdminUsername");
  }
  Logout(){
    this.svc.adminLogged=false;
    this.svc.adminUsername="";
    localStorage.setItem("AdminUsername","");
  }

}
