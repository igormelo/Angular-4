import { AuthService } from './login/auth.service';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  //Serviço criado para ser usado como guarda de rotas, ou seja, eu só consigo acessar alguma rota
  //se o meu usuario estivar autenticado "if(this.authService.usuarioIsAuth)" caso não esteja logado
  //será redirecionado para a rota "/"(login)
  constructor(private authService: AuthService, private router: Router) { }
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
        if(this.authService.usuarioIsAuth()){
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
} 
