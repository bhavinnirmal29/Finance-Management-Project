import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLoginComponent } from '../components/user-login/user-login.component';
import { EmiCardInfoModule } from '../modules/emi-card-info/emi-card-info.module';
import { OrderDetailsModule } from '../modules/order-details/order-details.module';

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

  Login(name:string,pwd:string):Observable<string>{
    return this.http.get<string>(this.url+"/"+"UserLogin"+"/"+name+"/"+pwd);
  }

  GetCardDetails(username:string):Observable<EmiCardInfoModule>{
    return this.http.get<EmiCardInfoModule>(this.url+"/GetCardDetails"+"/"+username);
  }

  GetOrderDetails(username:string):Observable<OrderDetailsModule[]>{
    return this.http.get<OrderDetailsModule[]>(this.url+"/GetOrderDetails"+"/"+username);
  }

}
