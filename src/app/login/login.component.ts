import { Component, OnInit, NgModule } from '@angular/core';
import {AuthService} from './auth.service';
import { Usuario } from './usuario';
import { UsersService } from 'app/users.service';
import { User } from 'app/user';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    showLoading: boolean = false;
    usuario: Usuario = new Usuario();
    public new_user;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getExternal();
    this.authService.getLocal(); 
    this.authService.showLoading.subscribe(
          show => this.showLoading = show
    )
  }
  
  fazerLogin(){
    this.authService.fazerLogin(this.usuario);
    console.log(this.usuario);
  }


}