import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient ) { }


  getUsers(){

    let  params = new HttpParams().append('page', '1');
    params = params.append('name', 'Atuel');

 

    return this.http.get('https://re1qres.in/api/user', {
      params,
      // headers
      }).pipe(
        map( resp => resp['data']),
        );
      }
}
