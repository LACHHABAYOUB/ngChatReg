import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userName = '';
  password = '';
  message = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.authService.user.pipe(
      filter(u => u.isAuthenticated || u.isError),
      map(user => {
        this.message = user.isError ? 'User Name or Password is Incorrect' : 'Welcome';
        this.userName = this.password = '';
      })
    );
  }

  onLoginSubmit() {
    console.log('user', this.userName);
    this.authService.authenticate(this.userName, this.password);
  }

}
