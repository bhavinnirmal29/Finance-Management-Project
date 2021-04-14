import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminInfoModule } from 'src/app/modules/admin-info/admin-info.module';
import { OrderInfoModule } from 'src/app/modules/order-info/order-info.module';
import { ProductInfoModule } from 'src/app/modules/product-info/product-info.module';
import { ReginfoModule } from 'src/app/modules/reginfo/reginfo.module';
import { AdminInfoService } from 'src/app/services/admin-info.service';
import { LoginInfoService } from 'src/app/services/login-info.service';

@Component({
  selector: 'app-admin-rights',
  templateUrl: './admin-rights.component.html',
  styleUrls: ['./admin-rights.component.css']
})
export class AdminRightsComponent implements OnInit {
  custid:number;
  model:any[];
  buttonName:string="GetCustomers";
  svc1:AdminInfoService;
  custlist:ReginfoModule[];
  productList:ProductInfoModule[];
  orderList:OrderInfoModule[];
  pendingRequests:ReginfoModule[];
  constructor(svc:LoginInfoService,svc1:AdminInfoService) {
    this.svc1=svc1;
   }

  ngOnInit(): void {
    this.svc1.GetCustomers().subscribe((data:ReginfoModule[])=>{
      this.custlist = data;
      console.log(this.custlist);
    });
  }

  GetCustomers(){
    this.buttonName = "GetCustomers";
    this.svc1.GetCustomers().subscribe((data:ReginfoModule[])=>{
      this.custlist = data;
      console.log(this.custlist);
    });
  }
  GetCustomerByID(){
    this.buttonName="GetCustomerByID";
  }
  GetProducts(){
    this.buttonName="GetProducts";
    this.svc1.GetProducts().subscribe((data:ProductInfoModule[])=>{
      this.productList = data;
      console.log(this.productList);
    })
  }
  GetOrderDetails(){
    this.buttonName="GetOrderDetails";
    this.svc1.GetOrderDetails().subscribe((data:OrderInfoModule[])=>{
      this.orderList = data;
      console.log(this.orderList);
    })

  }
  Delete(regNo:number) : void
  {
    this.custid = regNo;
    alert(regNo+" Cust ID : "+this.custid);
    this.svc1.DeleteCustomer(this.custid).subscribe((data : boolean)=>{
      if(data == true)
      {
        alert('Record Deleted Successfully');
      }
    });
  }
  PendingRequests(){
    this.buttonName="PendingRequests";
    this.svc1.PendingRequests().subscribe((data:ReginfoModule[])=>{
      this.pendingRequests=data;
      console.log(this.pendingRequests);
    })
  }
}
