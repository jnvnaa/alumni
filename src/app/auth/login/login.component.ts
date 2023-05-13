import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(private auth:AuthService, private router:Router)
  {

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
      this.auth.emit(res.userid);
      this.router.navigate(["home"]);
    },
    error => {
      console.log(error);
      Swal.fire(error.error.message);
      this.router.navigate(["login"]);

    });

    this.clicked = false;
  }


}
