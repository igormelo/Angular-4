import { AuthGuard } from './auth-guard';
import { LoginComponent } from './login/login.component';
import { Routes,RouterModule } from '@angular/router';
import { AboutComponent} from './about/about.component';
import { ModuleWithProviders } from '@angular/core';
import { EmailComponent } from './email/email.component';
import { NamesComponent} from './names/names.component';
import { HomeComponent} from './home/home.component';
import {AddressComponent} from './address/address.component';
import {AddressDetailsComponent} from './address-details/address-details.component';
import {NotFoundComponent} from './not-found/not-found.component';
const routes: Routes = [
    { path  : '', component: LoginComponent},
    { path  : 'address', component: AddressComponent, canActivate: [AuthGuard]},
    { path  : 'email', component: EmailComponent, canActivate: [AuthGuard]},
    { path  : 'about', component: AboutComponent, canActivate: [AuthGuard]},
    { path  : 'notfound', component: NotFoundComponent, canActivate: [AuthGuard]},
    { path  : 'names', component: NamesComponent, canActivate: [AuthGuard]},
    { path  : 'address-details', component: AddressDetailsComponent, canActivate: [AuthGuard]},
    { path  : 'address-details/:id', component: AddressDetailsComponent, canActivate: [AuthGuard]},
    { path  : 'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path  : '**', component: NotFoundComponent},
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);