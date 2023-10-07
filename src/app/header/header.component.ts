import { Component, ElementRef, HostListener, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AuthService } from '../services/auth.service';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isNotLoggedIn = false
  isLoggedIn = false
  isMobile:boolean = false
  isAdmin = false

  private breakpointObserver = inject(BreakpointObserver);

  constructor(private auth:AuthService, private elementRef: ElementRef){
    auth.getLoggedInName.subscribe(name => this.changeName(name));
    this.isNotLoggedIn = !this.auth.isLoggedIn();
    this.isLoggedIn = this.auth.isLoggedIn();

    this.isAdmin = auth.isAdmin();
  }
  ngOnInit(): void {
    if(window.innerWidth < 780)
    {
      this.isMobile = true;
    }
    else
    {
      this.isMobile = false;
    }
  }

  private changeName(name: string): void {
    this.isNotLoggedIn = !this.auth.isLoggedIn();
    this.isLoggedIn = this.auth.isLoggedIn();
  }

  logout()
  {

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



  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

}
