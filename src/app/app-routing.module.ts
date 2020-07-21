import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormOrderComponent } from './form-order/form-order.component';
import { FormServiceComponent } from './form-service/form-service.component';
import { MainComponent } from './main/main.component';
import { EndComponent } from './end/end.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StartpageComponent } from './startpage/startpage.component';


const routes: Routes = [
  { path: '', redirectTo: '/startpage', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  { path: 'main', component: MainComponent, /*canActivate: [AuthGuardService]*/},
  { path: 'form-order', component: FormOrderComponent },
  { path: 'form-service', component: FormServiceComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'startpage', component: StartpageComponent },

  { path: 'end', component: EndComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
