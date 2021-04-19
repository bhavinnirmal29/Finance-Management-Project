import { AfterViewInit, Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditInfoModule } from 'src/app/modules/credit-info/credit-info.module';
import { EmiCardInfoModule } from 'src/app/modules/emi-card-info/emi-card-info.module';
import { OrderDetailsModule } from 'src/app/modules/order-details/order-details.module';
import { PurchasedProductInfoModule } from 'src/app/modules/purchased-product-info/purchased-product-info.module';
import { UserLoginService } from 'src/app/services/user-login.service';
import { UserLoginComponent } from '../user-login/user-login.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  model:any=[];
  svc:UserLoginService;
  ngzone:NgZone;
  router:Router;
  userlogin:UserLoginComponent;
  purchasedList:PurchasedProductInfoModule[];
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
   creditUsed:number;
   remainingCredit:number;
   totalCredit:number;
   regNumber:number;
   dashboardButtonName:string="";
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
      //alert(data.RegNumber + "," + data.CardNumber + "," + data.ValidityPeriod + "," + data.CardType + "," + data.AccountStatus );
       
    });
    //Getting Credit Card Info Of Logged In  Customer
    this.regNumber = JSON.parse(localStorage.getItem("LoggedRegNumber"));
    this.svc.GetCreditDetails(this.regNumber).subscribe((data:CreditInfoModule)=>{
      console.log(data);
      this.creditUsed = data.CreditUsed;
      this.remainingCredit=data.RemainingCredit;
      this.totalCredit=data.TotalCredit;
    })
    
  }
  GetPurchasedProducts(){
    this.dashboardButtonName="GetPurchasedProducts";
    this.svc.GetPurchasedProducts(this.regNumber).subscribe((data:PurchasedProductInfoModule[])=>{
      this.purchasedList = data;
      console.log(data);
    })
  }
  GetOrderDetails(){
    this.dashboardButtonName="GetOrderDetails";
    this.svc.GetOrderDetails(this.custusername).subscribe((data:OrderDetailsModule[])=>
    {
        this.order=data;
        console.log(this.order);

    });
  }
  CheckApprovalStatus()
  {
    this.dashboardButtonName="CheckApprovalStatus";
    this.svc.CheckApprovalStatus(4).subscribe((data:boolean)=>{//Instead of 4 use this.regNumber
      console.log('User approved? : ' +data);
      let res="";
      if(this.cardtype=="Gold")
      {
        res="500";
      }
      else
      {
        res="1000";
      }
      if(data==true)
      {
        alert("Not Approved Please pay the Required Amount!!!");

        alert("Card type: "+this.cardtype);
        alert("Paid rupees:"+res);
        alert("User Approved!!!");
      }
      else
      {
        alert("Registeration fee is paid!!!");
      }

  });
    
  }

}
