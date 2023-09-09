import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router)
  {

  }
  ngOnInit(): void {
    if(this.auth.isLoggedIn())
    {
      this.router.navigate(["alumni"]);
    }
  }

  loginForm = new FormGroup({
    Username : new FormControl(''),
    Password : new FormControl(''),
  });

  class = "form-control btn btn-login";
  clicked = false;

  classGet()
  {
    return this.class;
  }

  onSubmit() {

    this.clicked = true;

    this.auth.onLogin(this.loginForm.value).subscribe((res:any) => {
      console.log(res);
      localStorage.setItem('token',res.token);
      localStorage.setItem('userid',res.userid);
      localStorage.setItem('name',res.name);
      this.auth.emit(res.userid);
      this.router.navigate(["alumni"]);
    },
    error => {
      console.log(error);
      Swal.fire(
        'Login Failed',
        error.error.message,
          'error'
        );
      this.router.navigate(["login"]);

      this.clicked =false;

    });

    this.loginForm.get("Username")?.reset();
    this.loginForm.get("Password")?.reset();

  }

  forgotPassword()
  {
    this.router.navigate(["forgotpassword"]);
  }

}
