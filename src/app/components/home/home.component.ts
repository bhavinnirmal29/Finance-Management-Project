import { Component, OnInit } from '@angular/core';
import { LoginInfoService } from 'src/app/services/login-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  svc:LoginInfoService;
  constructor(svc:LoginInfoService) {
    this.svc=svc;
   }

  ngOnInit(): void {
    
  }

}
