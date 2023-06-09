import { Component, ElementRef, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isNotLoggedIn = false
  isLoggedIn = false
  isMobile:boolean = false
  constructor(private auth:AuthService, private elementRef: ElementRef){
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

  @HostListener("window:resize", [])
  private onResize() {
    if(window.innerWidth < 780)
    {
      this.isMobile = true;
    }
    else
    {
      this.isMobile = false;
    }
  }

}
