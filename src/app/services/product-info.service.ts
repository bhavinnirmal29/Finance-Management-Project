import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInfoModule } from '../modules/product-info/product-info.module';

@Injectable({
  providedIn: 'root'
})
export class ProductInfoService {

  prod : ProductInfoModule;
  http : HttpClient;
  url : string = 'http://localhost:56054/api/ProductAPI';
  httpOptions = {headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })}
  constructor(http : HttpClient) {
    this.http = http;
   }
   GetProducts(): Observable<ProductInfoModule[]>{
     return this.http.get<ProductInfoModule[]>(this.url+"/"+"ShowAll")
   }
   GetProductByID(pid:number):Observable<ProductInfoModule>{
    return this.http.get<ProductInfoModule>(this.url+"/"+"GetProductByID"+"/"+pid);
  }

}
