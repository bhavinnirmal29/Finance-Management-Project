import { Component, NgZone, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProductInfoModule } from 'src/app/modules/product-info/product-info.module';
import { PlaceOrderService } from 'src/app/services/place-order.service';
import { ProductInfoService } from 'src/app/services/product-info.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  model:any[];
  buttonName:string;
  svc : ProductInfoService;
  svc1:PlaceOrderService;
  prod : ProductInfoModule[];
  ngZone:NgZone;
  router:Router;
  constructor( svc : ProductInfoService,svc1:PlaceOrderService,ngZone:NgZone,router:Router) {
    this.svc = svc;
    this.svc1=svc1;
    this.ngZone=ngZone;
    this.router=router;
    
   }
   PName:string;
   PDesc:string;
   PPrice:number;
  ngOnInit(): void {
    this.svc.GetProducts().subscribe((data:ProductInfoModule[])=>{
      this.prod=data;
      console.log(data);
    })
    this.model=[];
  }
  pid:number;
  BuyNow(prodID:number){
    this.buttonName="BuyNow";
    this.svc.GetProductByID(prodID).subscribe((data1:ProductInfoModule)=>{
      console.log(data1);
      this.pid=data1.ProductID;
      this.PName=data1.ProductName;
      this.PDesc=data1.ProductDesc;
      this.PPrice=data1.ProductPrice;
    })
  }
  emiDuration:number;
  PlaceOrder(placeOrder:NgForm){
    this.emiDuration = placeOrder.value.emiDuration;
    console.log("Form value : "+this.emiDuration+" "+this.pid+" ");
    this.svc1.BuyNow(1,this.pid,this.emiDuration,1).subscribe((data1:number)=>{
      if(data1>1){
        alert("You are eligible to Order")
        this.ngZone.run(()=>this.router.navigateByUrl('/PlaceOrder'));
      }
      else{
        alert("You are not eligible to order");
      }
    })
    
  }
}
