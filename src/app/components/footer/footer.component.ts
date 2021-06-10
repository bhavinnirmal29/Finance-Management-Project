import { AfterViewInit, Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit,AfterViewInit {
  userLoginLogged : boolean;
  adminLoginLogged : boolean;
  ng:NgZone;
  rout:Router;
  constructor(ngZone:NgZone,router:Router) { 
    this.ng=ngZone;
    this.rout=router;
  }
  ngAfterViewInit(): void {
    this.userLoginLogged = JSON.parse(localStorage.getItem("UserLoginLogged"));
    this.adminLoginLogged = JSON.parse(localStorage.getItem("AdminLogged"));
    
  }
  
  ngOnInit(): void {
    
  }
 
}
