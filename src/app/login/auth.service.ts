import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter} from '@angular/core';

@Injectable()
export class AuthService {
private usuarioAutenticado: boolean = false;
showMenu = new EventEmitter<boolean>();
  constructor(private router: Router) { }
    fazerLogin(usuario: Usuario){
      if(usuario.nome === "igor" && usuario.senha === "123"){
        this.usuarioAutenticado = true;
        this.showMenu.emit(true);
        this.router.navigate(['/home']);
      }  else {
        this.usuarioAutenticado = false;
        this.showMenu.emit(false);
        this.showMessage();
      } 
    }
    usuarioAuth(){
      return this.usuarioAutenticado;
    }
    showMessage(){
      var x = document.getElementById("snackbar")
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
}
