import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  name:string;
  pwd:string;
  model:any=[];
  constructor() {}
  ngOnInit(): void {
  }
  AdminLogin(AdminForm:NgForm):void{
    this.name =AdminForm.value.userName;
    this.pwd=AdminForm.value.pwd;
    console.log(this.name+" "+this.pwd);
  }

}
