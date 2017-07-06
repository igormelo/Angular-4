import { EmailComponent } from './../email/email.component';
import { User } from './../user';
import { Usuario } from './usuario';
import { Injectable, OnInit, enableProdMode } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter} from '@angular/core';
import { UsersService } from 'app/users.service';


@Injectable()
export class AuthService  {
private usuarioAutenticado: boolean = false;
showMenu = new EventEmitter<boolean>();
showLoading = new EventEmitter<boolean>();
  constructor(private router: Router) { }


    fazerLogin(usuario: Usuario){
      if(usuario.nome == "igor" && usuario.senha == "igor"){
         this.usuarioAutenticado = true;
         this.showLoading.emit(true);

        setTimeout((router: Router) => {
            this.showMenu.emit(true);
            this.router.navigate(['/home']);
        }, 2000);
        
        
      } else if (usuario.nome == "" && usuario.senha == "") {
        this.showNull();   
        } else {
        this.usuarioAutenticado = false;
        this.showMessage();
        usuario.nome = "";
        usuario.senha = "";
      } 
    }
    usuarioIsAuth(){
      return this.usuarioAutenticado;
    }

    showMessage(){
      var x = document.getElementById("snackbar")
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
    fazerLogout(){
      this.usuarioAutenticado = false;
      this.showMenu.emit(false);
      this.showLoading.emit(true);
      setTimeout((router: Router)=>{
        this.router.navigate(['/']);
      }, 2000)
      
    }
    showNull(){
      var x = document.getElementById("snacknull")
      x.className = "show";
      setTimeout(function(){x.className = x.className.replace("show","");},3000);
    }
}
