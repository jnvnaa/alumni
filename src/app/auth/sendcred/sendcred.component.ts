import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sendcred',
  templateUrl: './sendcred.component.html',
  styleUrls: ['./sendcred.component.css']
})
export class SendcredComponent {
  email:string = ""

  emailFG = new FormGroup({    
    email: new FormControl("", Validators.required)
  })

  busy = false;

  constructor(private auth:AuthService, private router:Router)
  {
  }

  back()
  {
    return this.router.navigate(["/login"]);
  }

  send()
  {
    this.busy = true;
    var email = this.emailFG.value!;
    this.auth.sendcredential(email.email).subscribe( res => {
        console.log(res);
        if(res == true)
        {
          Swal.fire({
            title: 'Email sent successfully',
            text: 'Please check spam folder incase mail is not in inbox',
            icon: 'success'
          })
        }
        else
        {
          Swal.fire({
            title: 'Some error occured',
            text: 'Please try again',
            icon: 'warning'
          })
        }

        this.busy = false;
      },
      error => {
        console.log(error);
        Swal.fire(error.error);

        this.busy = false;
      }
    )

  }
}
