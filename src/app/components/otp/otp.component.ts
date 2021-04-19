import { Component, NgZone, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OtpModule } from 'src/app/modules/otp/otp.module';
import { OtpService } from 'src/app/services/otp.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  model:any=[];
  svc:OtpService;
  otp1=new OtpModule;
  email:string;
  password : string;
  ngZone:NgZone;
  router:Router;

  flag:boolean=false;
    constructor(svc:OtpService,ngZone:NgZone,router:Router) { this.svc=svc;
    this.ngZone=ngZone;
  this.router=router;}
  
    ngOnInit(): void {
    }
    EmailVerify:boolean=true;
    Acknowledgement:boolean=false;
    ResetPwd:boolean=false;
    RegisterData(EmailVerify:NgForm):void{
      console.log(EmailVerify.value);
      this.otp1.CustEmail=EmailVerify.value.Email;
      this.svc.ChkEmail(this.otp1.CustEmail).subscribe((data: string) => {
        console.log(data + " Check email");
        if (data == "success") {
          alert('Email is present in system');
          this.flag = true;
          this.svc.VerifyLinkEmail(this.otp1).subscribe((data: string) => {
            if (data == "success") {
              alert('Verification link is sent');
              this.EmailVerify = false;
              this.Acknowledgement = true;
              this.ResetPwd = true;
            }
            else {
              alert('Sending link failed!!');
            }
          });
        }
        else {
          alert('Email ID not found!!');
        }
      });
    }
  
  
    ResetPassword(PassReset: NgForm): void {
      this.otp1.Otp = PassReset.value.otp;
      this.otp1.CustPassword = PassReset.value.pwd;
      if(this.otp1.CustPassword!=PassReset.value.pwd)
        alert("Password not matching");
      else
      {
        this.svc.SetNewPassword(this.otp1).subscribe((data:boolean)=>{
          if (data == true) {
            alert('Password is Updated');
            this.ngZone.run(()=>this.router.navigateByUrl('/UserLogin'));
          }
          else {
            alert('Invalid OTP/ OTP expired!!');
          }
    
        });
      }
    }
  
  }