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
public local =  {};
public external =  {};
showMenu = new EventEmitter<boolean>();
showLoading = new EventEmitter<boolean>();

  constructor(private router: Router, private http: Http) { }

  getLocalAuth() {
   return this.http.get('/assets/validation.json').map((res: Response) => res.json());
  }
  getExternalAuth() {
    return this.http.get('http://jsonplaceholder.typicode.com/users').map((res: Response)=> res.json());
  }

   getLocal() {
   this.getLocalAuth().subscribe(data=>{this.local = data}, err=>console.log(err));
  }

  getExternal(){
    this.getExternalAuth().subscribe(data=>{this.external = data}, err=>console.log(err));
  }
    usuarioIsAuth() {
      return this.usuarioAutenticado;
    }

    fazerLogin(usuario: Usuario)  {
      if((usuario.nome == this.external[0].email || this.local[0].name) && (usuario.senha == this.external[0].username)){
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
    createUser(usuario: Usuario){
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers});
      //let body = JSON.stringify(u)
      return this.http.post('/assets/validation.json', {usuario}, options).map(this.parseData).catch(this.handleError);

    }
        private parseData(res: Response)  {
        let body = res.json();

        if (body instanceof Array) {
            return body || [];
        }

        else return body.post || {};
    }
        private handleError(error: Response | any) {
        let errorMessage: string;

        errorMessage = error.message ? error.message : error.toString();

        // In real world application, call to log error to remote server
        // logError(error);

        return Observable.throw(errorMessage);
    }
}
