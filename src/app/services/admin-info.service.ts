import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
