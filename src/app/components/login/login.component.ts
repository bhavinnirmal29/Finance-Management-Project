import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.login=this.fb.group({
      name: new FormControl('',[Validators.required]),
      txtpass : new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(8),Validators.pattern('^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[#$%@*])')])
    });  
  }
  RegisterData():void{
    console.log(this.login.value);
  }

}
