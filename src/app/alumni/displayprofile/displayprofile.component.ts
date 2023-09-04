import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnusDto, AlumnusInfo, ProfessionalInfo, SocialInfo } from 'src/app/api/models';
import { AlumniService } from 'src/app/services/alumni.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-displayprofile',
  templateUrl: './displayprofile.component.html',
  styleUrls: ['./displayprofile.component.css']
})
export class DisplayprofileComponent  implements OnInit{

  @Input() alumniId = 0;

  alumniInfo:AlumnusInfo = {}
  professionalInfo:ProfessionalInfo = {}
  socialInfo:SocialInfo = {}
  alumni:AlumnusDto = {}
  image:any;
  alumniGf:any = {}

  constructor(private als:AlumniService, private auth:AuthService, private router:Router)
  {

  }


  ngOnInit(): void {

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

      this.als.getAlumniById(this.alumniId).subscribe( res =>
      {
        this.alumni = res;

        this.als.getGfByPhone(res.phone).subscribe(res =>
          {
              this.alumniGf = res;
          });

      })
      this.als.getAlumniInfo(this.alumniId).subscribe(res =>
      {
        this.alumniInfo = res;

        this.image = res.image;
      })

      this.als.getProfessionalInfo(this.alumniId).subscribe(res =>
      {
        this.professionalInfo = res;
      })

      this.als.getSocialInfo(this.alumniId).subscribe(res =>
      {
        this.socialInfo = res;

      })
  }

  reload()
  {
    this.ngOnInit()
  }
}
