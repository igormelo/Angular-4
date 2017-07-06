import { Component, OnInit } from '@angular/core';
import {UsersService} from 'app/users.service';
import {User} from 'app/user';
import {Geo} from 'app/geo';
import { Router, ActivatedRoute } from '@angular/router';
import { AgmMap, AgmMarker } from '@agm/core';
@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {
  user: User = new User();
  lat:string;
  lng:string;
  
  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
      var id = this.route.params.subscribe(params => {
        var id = params['id'];
         this.usersService.getUser(id)
      .subscribe(user => this.user = user);
      if (id == null){
        this.router.navigate(['/notfound']);
      }
      
      });
      
  }

}
