import { User } from 'app/user';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UsersService {
    // Serviço usado para fazer a chamada a um webservice com retorno JSON.
    users: User;
    private url: string = "http://jsonplaceholder.typicode.com/users";
    constructor(private http: Http) {}
    
   public getUserUrl(id){
        return this.url + "/" +id;
    }
   
    //meteodo que "emite" o endPoint /users
    getUsers(){
        return this.http.get(this.url)
        .map(users => users.json());
    
    }
    
    getUser(id){
        return this.http.get(this.getUserUrl(id)).map(res => res.json());

    }

}