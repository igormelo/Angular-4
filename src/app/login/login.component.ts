import { Component, OnInit, NgModule } from '@angular/core';
import {AuthService} from './auth.service';
import { Usuario } from './usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    private usuario: Usuario = new Usuario();
    
  constructor(private authSerivce: AuthService) { }

  ngOnInit() {

  }
  fazerLogin(){
    this.authSerivce.fazerLogin(this.usuario);
    console.log(this.usuario);
  }

}
