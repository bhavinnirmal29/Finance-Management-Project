import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLoginComponent } from '../components/user-login/user-login.component';
import { EmiCardInfoModule } from '../modules/emi-card-info/emi-card-info.module';
import { OrderDetailsModule } from '../modules/order-details/order-details.module';
import { ReginfoModule } from '../modules/reginfo/reginfo.module';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  cust:UserLoginComponent;
  http:HttpClient;
  url:string='http://localhost:56054/api/UserLoginAPI';
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };

  constructor(http:HttpClient) {
    this.http=http; 
  }

  Login(username:string,pwd:string):Observable<string>{
    return this.http.get<string>(this.url+"/"+"UserLogin"+"/"+username+"/"+pwd);
  }

  GetCardDetails(username:string):Observable<EmiCardInfoModule>{
    return this.http.get<EmiCardInfoModule>(this.url+"/GetCardDetails"+"/"+username);
  }

  GetOrderDetails(username:string):Observable<OrderDetailsModule[]>{
    return this.http.get<OrderDetailsModule[]>(this.url+"/GetOrderDetails"+"/"+username);
  }
  // GetCustomerByUsername(username:string):Observable<ReginfoModule[]>{
  //   return this.http.get<ReginfoModule[]>(this.url+"/GetCustomerByUserName"+"/"+username);
  // }
}
