import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UsersService {
    private url: string = "http://jsonplaceholder.typicode.com/users";
    constructor(private http: Http) { }

    public getUserUrl(id){
        return this.url + "/" +id;
    }

    getUsers(){
        return this.http.get(this.url).map(response => response.json());

    }
    getUser(id){
        return this.http.get(this.getUserUrl(id)).map(res => res.json());
    }
    

}