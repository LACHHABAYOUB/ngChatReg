import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { User } from '../models/user.model';

@Injectable()
export class AuthService {

  readonly api = environment.authApi;

  private _user: BehaviorSubject<User>;
  private user$: Observable<User>;

  constructor(private http: HttpClient) {
    this._user = new BehaviorSubject<User>({
      userName: '',
      password: '',
      isError: false,
      isAuthenticated: false
    });
    this.user$ = this._user.asObservable();
  }

  authenticate(userName: string, password: string) {
    const headers = new HttpHeaders();
    const _headers = headers.append('client', 'testjwtclientid')
      .append('secret', 'GJZUUzu4UFRzU')
      .append('grant_type', 'password')
      .append('username', userName)
      .append('password', password);

    this.http.post<User>(this.api,
      {
        grant_type: password,
        username: userName,
        password: password
      },
      { headers: _headers })
      .toPromise().then(jwt => {
        this._user.next(
          {
            userName: jwt.userName,
            password: jwt.password,
            isError: false,
            isAuthenticated: true
          }
        );
      }).catch(err => {
        this._user.next(
          {
            isError: true,
            isAuthenticated: false
          }
        );
      });
  }

  get user() {
    return this.user$;
  }

}
