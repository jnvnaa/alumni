import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isNotLoggedIn = false
  isLoggedIn = false
  isMobile:boolean = false
  constructor(private auth:AuthService, private elementRef: ElementRef, public breakpointObserver: BreakpointObserver){
    auth.getLoggedInName.subscribe(name => this.changeName(name));
    this.isNotLoggedIn = !this.auth.isLoggedIn();
    this.isLoggedIn = this.auth.isLoggedIn();
  }
  ngOnInit(): void {
  
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
