import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from 'app/users.service';
import {User} from 'app/user';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {
users: User[];
constructor(private usersService: UsersService) { }

 // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
  getNames() : Subscription {
    return this.usersService.getUsers()
    .subscribe(users => {
      this.users = users;
      console.log(this.users);
    });
  }

  ngOnInit() {
    this.getNames();
    //this.usersService.getUsers()
    //  .then(data => this.users = data);
  }

}
