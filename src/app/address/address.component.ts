import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'app/users.service';
import { User } from 'app/user';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit{

users:User[];

constructor(private usersService: UsersService) { }

  ngOnInit() {

    this.usersService.getUsers()
      .subscribe(data => this.users = data);
    
  }


}
