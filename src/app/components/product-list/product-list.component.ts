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
  PQuantity:number;
  BuyNow(prodID:number){
    this.buttonName="BuyNow";
    this.svc.GetProductByID(prodID).subscribe((data1:ProductInfoModule)=>{
      console.log(data1);
      this.pid=data1.ProductID;
      this.PName=data1.ProductName;
      this.PDesc=data1.ProductDesc;
      this.PPrice=data1.ProductPrice;
      this.PQuantity = data1.ProductStock;
    })
  }
  emiDuration:number;
  regNumber:number;
  PlaceOrder(placeOrder:NgForm){
    this.emiDuration = JSON.parse(placeOrder.value.emiDuration);
    console.log("Form value : "+this.emiDuration+" "+this.pid+" ");
    this.regNumber = JSON.parse(localStorage.getItem("LoggedRegNumber"));
    console.log(this.regNumber);
    
    // this.svc.BuyNow(this.regNumber,this.pid,this.emiDuration,1).subscribe((data2:number)=>{
      alert(typeof(this.regNumber)+"    "+typeof(this.pid)+ "  " +typeof(this.emiDuration)+ " 1");
      this.svc1.BuyNow(this.regNumber,this.pid,1,this.emiDuration).subscribe((data2:number)=>{
      console.log(data2);
      if(data2>1){
        alert("You are eligible to Order");
        this.ngZone.run(()=>this.router.navigateByUrl('/PlaceOrder'));
      }
      else{
        alert("You are not eligible to order");
      }
    })
    
  }
}
