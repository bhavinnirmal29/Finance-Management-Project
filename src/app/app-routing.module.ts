import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRightsComponent } from './components/admin-rights/admin-rights.component';

import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OtpComponent } from './components/otp/otp.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:"full"},
  {path:'Home',component:HomeComponent},
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Admin',component:AdminComponent},
  {path:'UserLogin',component:UserLoginComponent},
  {path:'Dashboard',component:DashboardComponent},
  {path:'AdminRights',component:AdminRightsComponent},
  {path:'ProductList',component:ProductListComponent},
  {path:'PlaceOrder',component:PlaceOrderComponent},
  {path:'Dashboard',component:DashboardComponent},
  {path:'OTP',component:OtpComponent},
  {path:'UpdateCustomer/:id',component:UpdateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
