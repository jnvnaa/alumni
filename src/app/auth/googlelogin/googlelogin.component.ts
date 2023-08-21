import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-googlelogin',
  templateUrl: './googlelogin.component.html',
  styleUrls: ['./googlelogin.component.css']
})
export class GoogleloginComponent implements OnInit{
  user: any;
  loggedIn: any;
  googleloginin = false;

  constructor(private auth:AuthService, private authSoc: SocialAuthService, private router:Router)
  {

  }

  ngOnInit(): void {
    this.authSoc.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);

      console.log(user);
      this.googleloginin = true;

      this.auth.onGoogleLogin(user.idToken).subscribe((res:any) => {
        
        console.log(res);
        localStorage.setItem('token',res.token);
        localStorage.setItem('userid',res.userid);
        localStorage.setItem('name',res.name);
        this.auth.emit(res.userid);
        this.googleloginin = false;
        this.router.navigate(["alumni"]);
      },
      error => {
        console.log(error);
        Swal.fire(
          'Google Login Failed',
          error.error,
            'error'
          );
        this.router.navigate(["login"]);
  
      });

    });
  }
}
