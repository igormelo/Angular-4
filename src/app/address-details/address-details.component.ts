import { Observable } from 'rxjs/Rx';
import { AddressComponent } from './../address/address.component';
import { Component, OnInit,Input } from '@angular/core';
import {UsersService} from 'app/users.service';
import {User} from 'app/user';
import {Geo} from 'app/geo';
import { Router, ActivatedRoute } from '@angular/router';
import { AgmMap, AgmMarker } from '@agm/core';
import { Addresses } from '../addresses';
import { getTestBed } from '@angular/core/testing';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {
  users: User[] = [];
  lat:number;
  lng:number;
  

  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    
      ) { }


  ngOnInit() {
    //this.usersService.getUsers()
    //.subscribe(data => this.users = data);
      
      var id = this.route.params.subscribe(params => {
        var id = params['id'];
         this.usersService.getUser(id)
      .subscribe(user => this.users = user);
      
      if (id == null){
      this.router.navigate(['/notfound']);
      }
      
    });
    
  }
}
