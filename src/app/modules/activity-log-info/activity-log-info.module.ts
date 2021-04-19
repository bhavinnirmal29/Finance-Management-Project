import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ActivityLogInfoModule {
  ActivityID:number;
  LogType:string;
  ActivityDesc:string;
  ActivityTimeStamp:string;
}
