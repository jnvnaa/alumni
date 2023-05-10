import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isNotLoggedIn = false
  isLoggedIn = false
  constructor(private auth:AuthService){
    auth.getLoggedInName.subscribe(name => this.changeName(name));
    this.isNotLoggedIn = !this.auth.isLoggedIn();
    this.isLoggedIn = this.auth.isLoggedIn();
  }

  private changeName(name: string): void {
    this.isNotLoggedIn = !this.auth.isLoggedIn();
    this.isLoggedIn = this.auth.isLoggedIn();
  }

  logout()
  {
    debugger
    localStorage.clear();

    this.isNotLoggedIn = true
  }

}
