import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service';
import {User} from './user';
import { DOCUMENT } from '@angular/platform-browser';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  showMenu: boolean = false;
  constructor(private autService: AuthService ) { }
    ngOnInit() {
      //Inscrever no emissor(EventEmitter) com o subscribe
      //Mostro o Menu superior apenas se o usuario estiver logado
        this.autService.showMenu.subscribe(
          show => this.showMenu = show
        );
  }
  
}
