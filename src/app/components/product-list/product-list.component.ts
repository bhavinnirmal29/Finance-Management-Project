import { Component, NgZone, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProductInfoModule } from 'src/app/modules/product-info/product-info.module';
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
  prod : ProductInfoModule[];
  ngZone:NgZone;
  router:Router;
  constructor( svc : ProductInfoService,ngZone:NgZone,router:Router) {
    this.svc = svc;
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
  BuyNow(prodID:number){
    this.buttonName="BuyNow";
    this.svc.GetProductByID(prodID).subscribe((data1:ProductInfoModule)=>{
      console.log(data1);
      this.PName=data1.ProductName;
      this.PDesc=data1.ProductDesc;
      this.PPrice=data1.ProductPrice;
    })
  }
  PlaceOrder(placeOrder:NgForm){
    console.log("Form value : ",placeOrder.value.name);
    this.ngZone.run(()=>this.router.navigateByUrl('/PlaceOrder'));
  }
}
