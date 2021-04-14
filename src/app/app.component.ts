import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminInfoModule } from './modules/admin-info/admin-info.module';
import { LoginInfoService } from './services/login-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FinanceProject';
  svc:LoginInfoService;             //For Login and Logout
  username:string;
  admin:AdminInfoModule;
  adminLogged:boolean;
  name1:string;
  logg:string;
  adminlog:boolean;
  constructor(@Inject(DOCUMENT) private document: Document,svc:LoginInfoService) {
    this.svc=svc;
    }

  ngOnInit():void{
    this.username=this.svc.adminUsername;
    this.adminLogged=this.svc.adminLogged;
    this.name1=localStorage.getItem("AdminUsername");
    this.logg = localStorage.getItem("AdminLogged");
    this.adminlog=JSON.parse(this.logg);
    //alert(this.name1+"App Component");
  }
 
  onLogout(){
    //this.adminLogged=false;
    this.svc.Logout();
  }
  windowScrolled: boolean;
  //On Window Scroll
  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;
      } 
     else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }
  //Scroll to Top Function for smooth Scroll
  scrollToTop() {
      (function smoothscroll() {
          var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - (currentScroll / 8));
          }
      })();
  }
}
