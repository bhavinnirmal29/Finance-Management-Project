import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observer} from 'rxjs';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { ReginfoModule } from '../modules/reginfo/reginfo.module';

@Injectable({
  providedIn: 'root'
})
export class RegistrationinfoService {
  http:HttpClient;
  url:string = 'http://localhost:56054/api/RegistrationAPI';
  httpOptions={headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
  }
  constructor(http:HttpClient) { 
    this.http = http;
  }
  RegisterCustomer(reg:ReginfoModule):Observable<boolean>{
    return this.http.post<boolean>(this.url+"/"+"RegisterCustomer",reg,this.httpOptions);
  }
}
