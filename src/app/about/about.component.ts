import { Component, OnInit } from '@angular/core';
import {UsersService} from 'app/users.service';
import {User} from 'app/user';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    public openGit(): void{
    window.open('https://www.github.com/igormelo','_blank');
  }

}

