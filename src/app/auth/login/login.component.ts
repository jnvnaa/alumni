import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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

  onSubmit() {

    this.auth.onLogin(this.loginForm.value).subscribe((res:any) => {
      console.log(res);
      localStorage.setItem('token',res.token);
      localStorage.setItem('userid',res.userid);
      this.auth.emit(res.userid);
      this.router.navigate(["sjc"]);
    });
  }


}
