import { Injectable } from '@angular/core';
import { User } from '../../model/user';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { loginUser } from '../../model/loginUser';
import { SingleResponseModel } from '../../model/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = "http://localhost:5860/User/";

  constructor(private http: HttpClient) { }

  

  login(username: string,password: string): Observable<SingleResponseModel<User>> {
    return this.http.get<SingleResponseModel<User>>(`${this.baseUrl}login/${username}/${password}`);
    
  }
}
