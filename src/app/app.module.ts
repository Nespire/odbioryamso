import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgZorroAntdModule, NZ_I18N, pl_PL } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import pl from '@angular/common/locales/pl';
import { FormOrderComponent } from './form-order/form-order.component';
import { FormServiceComponent } from './form-service/form-service.component';
import { MainComponent } from './main/main.component';
import { EndComponent } from './end/end.component';
import { RouterLinkDelayModule } from '@bcodes/ngx-routerlink-delay';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { AuthService } from './shared/auth.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';

registerLocaleData(pl);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FormOrderComponent,
    FormServiceComponent,
    MainComponent,
    EndComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterLinkDelayModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [{ provide: NZ_I18N, useValue: pl_PL }, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
