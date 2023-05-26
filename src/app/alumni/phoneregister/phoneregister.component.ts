import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PhoneRegisterDto } from 'src/app/api/models/phone-register-dto';
import { AlumniService } from 'src/app/services/alumni.service';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-phoneregister',
  templateUrl: './phoneregister.component.html',
  styleUrls: ['./phoneregister.component.css']
})
export class PhoneregisterComponent {

  phoneRegister:PhoneRegisterDto = {};

  phoneFG = new FormGroup({
    phoneNumbers: new FormControl("")
  })

  constructor(private as:AlumniService, private auth:AuthService)
  {
    this.phoneRegister.id = auth.loggedInId();

  }

  send()
  {

    this.phoneRegister.phoneNumbers = this.phoneFG.controls["phoneNumbers"].value;
    this.as.registerPhone(this.phoneRegister).subscribe( res => {

      Swal.fire(res.message);

    },error => {

    })

  }

}
