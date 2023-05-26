import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnusDto, AlumnusInfo, ProfessionalInfo, SocialInfo } from 'src/app/api/models';
import { AlumniService} from 'src/app/services/alumni.service';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit{

  alumniInfo:AlumnusInfo = {}
  professionalInfo:ProfessionalInfo = {}
  socialInfo:SocialInfo = {}
  alumni:AlumnusDto = {}

  alumniId = 0;
  name = "";
  image:any;
  imageToUpload:any;
  saving:boolean = false;

  modules = {}

  houses = ["Shankardev / Udaigiri (Yellow)",
            "Netaji / Nilachal (Green)",
            "Rajiv / Aravali (Blue)",
            "Mother Teresa / Shivalik (Red)"
            ]

  professions = ["Teacher","Professor","Social Worker","Doctor", "Lawyer", "Engineer"]

  batches = ["Teacher","1994-1995","1995-1996","1996-1997","1997-1998","1998-1999","1999-2000","2000-2001","2001-2002","2002-2003",
              "2003-2004","2004-2005","2005-2006","2006-2007","2007-2008","2008-2009","2009-2010","2010-2011",
            "2011-2012","2012-2013","2013-2014","2014-2015","2015-2016","2016-2018","2018-2019","2019-2020","2020-2021"]

  alumniInfoFG = new FormGroup({
    aboutMe: new FormControl(this.alumniInfo.aboutMe),
    houseInJNV: new FormControl(this.alumniInfo.houseInJNV),
    address: new FormControl(this.alumniInfo.address),
    name: new FormControl(this.alumni.name),
    email: new FormControl(this.alumni.email),
    batch: new FormControl(this.alumni.batch)
  })

  professionalInfoFG = new FormGroup({
    designation: new FormControl(this.professionalInfo.designation),
    organization: new FormControl(this.professionalInfo.organization),
    profession: new FormControl(this.professionalInfo.profession),
  })

  socialInfoFG = new FormGroup({
    facebook: new FormControl(this.socialInfo.facebook),
    linkedIn: new FormControl(this.socialInfo.linkedIn),
    twitter: new FormControl(this.socialInfo.twitter),
  })


  parentFG = new FormGroup({

    alumniInfoFG: this.alumniInfoFG,
    professionalInfoFG: this.professionalInfoFG,
    socialInfoFG: this.socialInfoFG

  });

  constructor(private als:AlumniService,
              private auth:AuthService,
              private router:Router,
              private route:ActivatedRoute,
              private formBuilder: FormBuilder)
  {
    this.modules = {
      'emoji-shortname': true,
      'emoji-textarea': true,
      'emoji-toolbar': true,
      'toolbar': [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        ['emoji']
      ]
    }
  }

  ngOnInit(): void {

    this.alumniId = this.auth.loggedInId();

    this.als.getAlumniById(this.alumniId).subscribe( res =>
      {
        this.alumni = res;
        this.alumniInfoFG.controls["email"].setValue(this.alumni.email);
        this.alumniInfoFG.controls["name"].setValue(this.alumni.name);
        this.alumniInfoFG.controls["batch"].setValue(this.alumni.batch);

      })

    this.als.getAlumniInfo(this.auth.loggedInId()).subscribe(res =>
      {

        this.alumniInfo = res;
        this.image = this.alumniInfo?.image;
        this.alumniInfoFG.controls["houseInJNV"].setValue(this.alumniInfo.houseInJNV);
        this.alumniInfoFG.controls["address"].setValue(this.alumniInfo.address);
        this.alumniInfoFG.controls["aboutMe"].setValue(this.alumniInfo.aboutMe);

      })

      this.als.getProfessionalInfo(this.auth.loggedInId()).subscribe(res =>
        {
          this.professionalInfo = res;

          this.professionalInfoFG.controls["profession"].setValue(this.professionalInfo.profession);
          this.professionalInfoFG.controls["designation"].setValue(this.professionalInfo.designation);
          this.professionalInfoFG.controls["organization"].setValue(this.professionalInfo.organization);

        })

        this.als.getSocialInfo(this.auth.loggedInId()).subscribe(res =>
          {
            this.socialInfo = res;

            this.socialInfoFG.controls["facebook"].setValue(this.socialInfo.facebook);
            this.socialInfoFG.controls["linkedIn"].setValue(this.socialInfo.linkedIn);
            this.socialInfoFG.controls["twitter"].setValue(this.socialInfo.twitter);

          })

  }



  save()
  {
    this.saving = true;
        this.saveAlumni();
        this.saveAlumniInfo();
        this.saveProfessionalInfo();
        this.saveSocialInfo();
  }

  saveAlumni()
  {
    debugger

    this.alumni.email = this.alumniInfoFG.controls["email"].value;
    this.alumni.name = this.alumniInfoFG.controls["name"].value;
    this.alumni.batch = this.alumniInfoFG.controls["batch"].value;

    this.als.updateAlumni(this.alumni).subscribe( res => {
      console.log(res);

    },
    error => {
      console.log(error);
      Swal.fire(error.error.message);
    });

  }

  saveAlumniInfo()
  {
    this.alumniInfo.alumnusId = this.alumniId;
    this.alumniInfo.image = this.imageToUpload;

    this.alumniInfo.aboutMe = this.alumniInfoFG.controls["aboutMe"].value;
    this.alumniInfo.houseInJNV = this.alumniInfoFG.controls["houseInJNV"].value;
    this.alumniInfo.address = this.alumniInfoFG.controls["address"].value;

    this.als.updateAlumniInfo(this.alumniInfo).subscribe( res => {
      console.log(res);
    },
    error => {
      console.log(error);
    });

  }

  saveProfessionalInfo()
  {
    this.professionalInfo.alumnusId = this.alumniId;

    this.professionalInfo.profession = this.professionalInfoFG.controls["profession"].value;
    this.professionalInfo.designation = this.professionalInfoFG.controls["designation"].value;
    this.professionalInfo.organization = this.professionalInfoFG.controls["organization"].value;

    this.als.updateProfessionalInfo(this.professionalInfo).subscribe( res => {
      console.log(res);
    },
    error => {
      console.log(error);
    });

  }


  saveSocialInfo()
  {
    this.socialInfo.alumnusId = this.alumniId;
    this.socialInfo.facebook = this.socialInfoFG.controls["facebook"].value;
    this.socialInfo.linkedIn = this.socialInfoFG.controls["linkedIn"].value;
    this.socialInfo.twitter = this.socialInfoFG.controls["twitter"].value;

    this.als.updateSocialInfo(this.socialInfo).subscribe( res => {
      console.log(res);
      Swal.fire("Successfully Saved")
      this.saving = false;

      this.search.emit();
    },
    error => {
      console.log(error);
      Swal.fire(error.error.message)
    });

  }

  back()
  {
    this.search.emit();

  }

  uploadimage()
  {
    this.resetPage();

  }

  resetPage()
  {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = "reload";
    this.router.navigate(["./"], {
      relativeTo : this.route
    });
  }

  onselectfile(e:any)
  {
    if(e.target.files)
    {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event:any) =>
      {
        this.image = event.target.result;
      }

      this.imageToUpload = e.target.files[0];

    }

  }

  @Output() search = new EventEmitter<string>();
}
