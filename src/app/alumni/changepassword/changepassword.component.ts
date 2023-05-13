import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChangePasswordDto } from 'src/app/api/models';
import { AlumniService } from 'src/app/services/alumni.service';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {

  password:ChangePasswordDto = {}
  alumniId = 0;

  passwordFG = new FormGroup({
    oldPassword: new FormControl(this.password.oldPassword),
    newPassword: new FormControl(this.password.newPassword)
  })

  constructor(private auth:AuthService, private als:AlumniService)
  {
      this.alumniId = auth.loggedInId();
  }

  back()
  {
    this.search.emit();

  }

  save()
  {
    this.password.id = this.alumniId;
    this.password.oldPassword = this.passwordFG.controls["oldPassword"].value;
    this.password.newPassword = this.passwordFG.controls["newPassword"].value;

    this.als.updatePassword(this.password).subscribe( res => {
      console.log(res);
      Swal.fire("Password Changed successfully.");
      this.search.emit();
    },
    error => {
      Swal.fire(error.error.message);
    }
    )

  }

  @Output() search = new EventEmitter<string>();

}
