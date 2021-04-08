import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:"full"},
  {path:'Home',component:HomeComponent},
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
