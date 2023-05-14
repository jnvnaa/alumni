import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isLoggedIn:boolean = false;
  constructor(private auth:AuthService)
  {
    this.isLoggedIn = auth.isLoggedIn();
  }

}
