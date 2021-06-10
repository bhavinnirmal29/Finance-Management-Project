import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OtpModule } from '../modules/otp/otp.module';

@Injectable({
  providedIn: 'root'
})
export class OtpService {
    otp:OtpModule;
    http:HttpClient;
    url:string='http://localhost:56054/api/UserLoginAPI';
    httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
    };
  
    constructor(http:HttpClient) {this.http=http }
  
    ChkEmail(email:string):Observable<string>
    {
    return this.http.get<string>(this.url+'/CheckEmail/'+ email +'/');
    }
  
    VerifyLinkEmail(CustEmail:OtpModule):Observable<string>
    {
     console.log(CustEmail);
     return this.http.post<string>(this.url+'/'+'VerifyLinkEmail',CustEmail,this.httpOptions);
    }
    SetNewPassword(CustEmail:OtpModule):Observable<boolean>
    {
      return this.http.put<boolean>(this.url + '/SetNewPassword',CustEmail,this.httpOptions);
    }
  }