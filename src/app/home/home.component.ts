import { Component, OnInit } from '@angular/core';
import {UsersService} from 'app/users.service';
import {User} from 'app/user';

import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
private users: User[];
showLoading: boolean = false;
  constructor(private usersService: UsersService, private authService: AuthService) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(users => this.users = users);

    this.authService.showLoading.subscribe(
          show => this.showLoading = show
 )
  }
  logout() {
    this.authService.fazerLogout();
  }

}
