import { Component, OnInit, NgModule } from '@angular/core';
import {AuthService} from './auth.service';
import { Usuario } from './usuario';
import { User } from '../user';
import { UsersService } from 'app/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    showLoading: boolean = false;
    private usuario: Usuario = new Usuario();
  constructor(private authService: AuthService,private usersService: UsersService) { }

  ngOnInit() {
 this.authService.showLoading.subscribe(
          show => this.showLoading = show
 )}
  
  fazerLogin(){
    this.authService.fazerLogin(this.usuario);
    console.log(this.usuario);
  
  }

}
