

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from '../models/usuario';

@Injectable()
export class PeticionesService{
  public url: string;

  constructor(
    public _http: HttpClient
  ){
    this.url = "https://reqres.in/";
  }

  getUser(): Observable<any>{
    return this._http.get(`${this.url}api/users/2`);
  }

  addUser(user: any): Observable<any>{
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type','aplication/json')

    return this._http.post(this.url+'api/users', params,{headers: headers})
  }

}

