import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmiCardInfoModule } from 'src/app/modules/emi-card-info/emi-card-info.module';
import { OrderDetailsModule } from 'src/app/modules/order-details/order-details.module';
import { UserLoginService } from 'src/app/services/user-login.service';
import { UserLoginComponent } from '../user-login/user-login.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  model:any=[];
  svc:UserLoginService;
  ngzone:NgZone;
  router:Router;
  userlogin:UserLoginComponent;

  order:OrderDetailsModule[];

  emicard=new EmiCardInfoModule(); 
  constructor(svc:UserLoginService,ngzone:NgZone,router:Router) {
    this.svc=svc;
    this.ngzone = ngzone;
    this.router=router;
   }
   //Emi Card Details

   cardno:number;
   regno:number;
   cardtype:string;
   validity:string;
   cardlimit:number;
   accountstatus:string;
   custname:string;
   custusername:string;

   //OrderDetails 
   /*
   transactionid:number;
   cardid:number;
   productid:number;
   quantity:number;
   totalamount:number;
   emiduration:number;
   emipaid:number;
   emibalance:number;
   createddate:number;  */


  ngOnInit(): void {
    this.custusername = localStorage.getItem("UserUname");
    this.svc.GetCardDetails(this.custusername).subscribe((data:EmiCardInfoModule)=>
    {
      console.log(data)
      this.custname = data.CustName;
      localStorage.setItem("LoggedRegNumber",""+data.RegNumber);
      this.cardno=data.CardNumber;
      this.validity=data.ValidityPeriod;
      this.cardtype=data.CardType;
      this.accountstatus=data.AccountStatus;
      //this.projid=data.projid;

      console.log(data.RegNumber + "," + data.CardNumber + "," + data.ValidityPeriod + "," + data.CardType + "," + data.AccountStatus );
      alert(data.RegNumber + "," + data.CardNumber + "," + data.ValidityPeriod + "," + data.CardType + "," + data.AccountStatus );
       
    });

    this.svc.GetOrderDetails(this.custusername).subscribe((data:OrderDetailsModule[])=>
    {
        this.order=data;
        console.log(this.order);

    });
  }

  // CardDetails(idform:NgForm):void
  // {
  //   console.log(idform.value);
  //   this.emicard.Username=this.custusername;
    
  //   this.svc.GetCardDetails(this.emicard.Username).subscribe((data:EmiCardInfoModule)=>
  //   {
  //     this.custname = this.custusername;
  //     this.regno= data.RegNumber;
  //     this.cardno=data.CardNumber;
  //     this.validity=data.ValidityPeriod;
  //     this.cardtype=data.CardType;
  //     this.accountstatus=data.AccountStatus;
  //     //this.projid=data.projid;

  //     console.log(data.RegNumber + "," + data.CardNumber + "," + data.ValidityPeriod + "," + data.CardType + "," + data.AccountStatus );
  //     alert(data.RegNumber + "," + data.CardNumber + "," + data.ValidityPeriod + "," + data.CardType + "," + data.AccountStatus );
       
  //   });
  // }
  

}
