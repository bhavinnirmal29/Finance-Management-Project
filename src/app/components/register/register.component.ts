import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model:any=[];
  constructor() { }
  ngOnInit(): void {
  }
  RegisterData(regform:NgForm)
  {
    console.log(regform.value);
  }
}
