import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderInfoModule } from '../modules/order-info/order-info.module';
import { ProductInfoModule } from '../modules/product-info/product-info.module';
import { ReginfoModule } from '../modules/reginfo/reginfo.module';

@Injectable({
  providedIn: 'root'
})
export class AdminInfoService {

  http:HttpClient;
  url:string='http://localhost:56054/api/AdminAPI';
  httpOptions={headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
  };

  constructor(http:HttpClient) {
    this.http=http;
  }
  GetCustomers() : Observable<ReginfoModule[]>
  {
    return this.http.get<ReginfoModule[]>(this.url + "/" + "GetAllCustomers");
  }

  GetCustomerById(id : number) : Observable<ReginfoModule>
  {
    return this.http.get<ReginfoModule>(this.url + "/" + "GetCustomerById" + "/" + id);
  }

  AdminLogin(AdminName:string,AdminPassword:string):Observable<boolean>
  {
    return this.http.get<boolean>(this.url+'/'+'AdminLogin'+'/'+AdminName+'/'+AdminPassword);
  }
  DeleteCustomer(id : number) : Observable<boolean>
  {
    return this.http.delete<boolean>(this.url + "/" + "DeleteCustomer" + "/" + id);
  }
  GetProducts():Observable<ProductInfoModule[]>
  {
    return this.http.get<ProductInfoModule[]>(this.url+"/GetProducts");
  }
  GetOrderDetails():Observable<OrderInfoModule[]>
  {
    return this.http.get<OrderInfoModule[]>(this.url+"/GetOrderDetails");
  }
  PendingRequests():Observable<ReginfoModule[]>
  {
    return this.http.get<ReginfoModule[]>(this.url+"/GetPendingRequests");
  }
}
