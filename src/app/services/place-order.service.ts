import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceOrderService {

  http : HttpClient;
  url : string = 'http://localhost:56054/api/ProductAPI';
  httpOptions = {headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })}
  constructor(http:HttpClient) {
    this.http=http;
  }

  BuyNow(regNumber:number,pid:number,EMIDuration:number,Quantity:number):Observable<number>{
    return this.http.get<number>(this.url+"/"+"PlaceOrder"+"/"+regNumber+"/"+pid+"/"+EMIDuration+"/"+Quantity);
  }
}
