import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  adminLogged:string;
  ngZone:NgZone;
  router:Router;
  constructor(ngZone:NgZone,router:Router) {
    this.ngZone=ngZone;
    this.router=router;
   }

  ngOnInit(): void {
    // this.adminLogged = localStorage.getItem("AdminUsername");
    // if(this.adminLogged!=""){
    //   alert("Already Logged In");
    //   this.ngZone.run(()=>this.router.navigateByUrl('/AdminRights'));
    // }
  }
  RegisterData():void{
    
  }

}
