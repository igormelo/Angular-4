import { UsersService } from './../users.service';
import { EmailComponent } from './../email/email.component';
import { User } from './../user';
import { Usuario } from './usuario';
import { Injectable, OnInit, enableProdMode } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class AuthService  {

private usuarioAutenticado: boolean = false;
userService: UsersService;
user: User;
public login;
showMenu = new EventEmitter<boolean>();
showLoading = new EventEmitter<boolean>();

  constructor(private router: Router, private http: Http) { }

  getAuth() {
   return this.http.get('/assets/validation.json').map((res: Response) => res.json());
  }
   getAll() {
   this.getAuth().subscribe(data=>{this.login = data}, err=>console.log(err));
  }
    usuarioIsAuth() {
      return this.usuarioAutenticado;
    }

    fazerLogin(usuario: Usuario)  {
      if(usuario.nome == this.login[0].name && usuario.senha == this.login[0].password){
        this.usuarioAutenticado = true;
        this.showLoading.emit(true);
         setTimeout((router: Router) => {
            this.showMenu.emit(true);
            this.router.navigate(['/home']);
        }, 2000);
      } else if (usuario.nome == "" && usuario.senha == "" ) {
        this.showNull();
      } else {
        this.usuarioAutenticado = false;
        this.showMessage();
        usuario.senha = "";
        usuario.nome = "";
      }
    }

    fazerLogout() {
      this.usuarioAutenticado = false;
      this.showMenu.emit(false);
      this.showLoading.emit(true);
      setTimeout((router: Router)=>{
        this.router.navigate(['/']);
      }, 2000) 
    }

    showNull()  {
      var x = document.getElementById("snacknull")
      x.className = "show";
      setTimeout(function(){x.className = x.className.replace("show","");},3000);
    }

    showMessage() {
      var x = document.getElementById("snackbar")
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
}
