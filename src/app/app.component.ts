import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private userService: UsersService ){

    this.userService.getUsers()
    .subscribe(resp => {
      console.log(resp);
    }, (err) => {
      console.log('error en el app component');
    });
  }
}
