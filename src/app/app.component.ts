import { Component } from '@angular/core';
import { combineLatest, filter, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learn-rjx';

  message = 'Message'
  timeMessage: string = 'Time is money'
  rnum = 1;


  users = [
    {
      id: 1,
      name: 'Naa'
    },
    {
      id: 2,
      name: 'Naa'
    },
    {
      id: 3,
      name: 'Naa'
    }
  ]

  users$ = of(this.users)
  username$ = this.users$.pipe(map((users) => users.map(user => user?.name)))
  filtered$ = this.users$.pipe(map((user) => user.filter((user) => user.id > 1)));

  //what combineLatest does is it combines streams
  data$ = combineLatest([ this.users$, this.username$, this.filtered$]).pipe(map(([users, username, filtered]) => ({
    users,
    username,
    filtered
  })))
}
