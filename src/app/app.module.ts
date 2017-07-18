import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { UsersService } from './users.service'
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { EmailComponent } from './email/email.component';
import { NamesComponent } from './names/names.component';
import { AddressComponent } from './address/address.component';
import { HomeComponent } from './home/home.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { AgmCoreModule } from '@agm/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { FormsModule }   from '@angular/forms';
import { AuthGuard } from './auth-guard';
import { DiretivasDirective } from './diretivas/coordenadas/diretivas.directive';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EmailComponent,
    NamesComponent,
    AddressComponent,
    HomeComponent,
    AddressDetailsComponent,
    NotFoundComponent,
    LoginComponent,
    DiretivasDirective
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB-wUaUTgO5jQWJOMpG2kDq5W1t4tG1ZmQ'
    })
  ],
  providers: [UsersService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

