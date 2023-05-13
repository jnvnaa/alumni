import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DisplayprofileComponent } from '../displayprofile/displayprofile.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements AfterViewInit {

  @ViewChild(DisplayprofileComponent) displayProfile !: DisplayprofileComponent;

  isEdit:boolean = false;
  isNotEdit:boolean = false;
  isPasswordEdit:boolean = false;

  id:any;
  owner:boolean = false;

  constructor(private actRoute:ActivatedRoute, private auth:AuthService)
  {
    this.isEdit = false;
    this.isPasswordEdit = false;
    this.isNotEdit = true;

    if(this.actRoute.snapshot.paramMap.get('id'))
    {
      this.id = this.actRoute.snapshot.paramMap.get('id');
      this.owner = false;
    }
    else
    {
      this.id = this.auth.loggedInId();
      this.owner = true;
    }
  }
  ngAfterViewInit(): void {

  }

  enableEdit()
  {
    this.isEdit = true;
    this.isNotEdit = false;
  }

  enablePasswordEdit()
  {
    this.isPasswordEdit = true;
    this.isNotEdit = false;
  }

  editCompleted()
  {
    this.isEdit = false;
    this.isNotEdit = true;
  }

  editPasswordCompleted()
  {
    this.isPasswordEdit = false;
    this.isNotEdit = true;
  }
}
