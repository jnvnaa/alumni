import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
            "Netaji / Nilgiri (Green)",
            "Rajiv / Aravali (Blue)",
            "Mother Teresa / Shivalik (Red)"
            ]

  professions = ["Business",
  "Banking /Finance",
  "Computers & Information Technology",
  "Real Estate/Contruction",
  "Trades",
  "Education, Teaching & Training",
  "Engineering & Engineering Technology",
  "Technicians",
  "Fishing, and Animal Husbandry",
  "Farming & Forestry",
  "Health & Medical",
  "Hospitality, Travel & Tourism",
  "Legal, Criminal Justice & Law Enforcement",
  "Management",
  "Media Communications & Broadcasting",
  "Defence, Military & Armed Forces",
  "Public Service / Administration",
  "Office Administration & Management",
  "Production & Manufacturing",
  "Psychology & Counseling",
  "Installation, Repair & Maintenance",
  "Sales & Marketing",
  "Transportation Services",
  "Social & Life Sciences",
  "Politician",
  "Social Worker",
  "Others Professional & Services"]

  batches = ["1999",
  "2000",
  "2001",
  "2002",
  "2003",
  "2004",
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  ]

  alumniInfoFG = new FormGroup({
    aboutMe: new FormControl(this.alumniInfo.aboutMe),
    houseInJNV: new FormControl(this.alumniInfo.houseInJNV),
    address: new FormControl(this.alumniInfo.address),
    name: new FormControl(this.alumni.name, Validators.required),
    email: new FormControl(this.alumni.email),
    batch: new FormControl(this.alumni.batch, Validators.required)
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

  isNameNotSet()
  {
    return !this.auth.isNameSet();
  }

  ngOnInit(): void {

    this.alumniId = this.auth.loggedInId();

    this.als.getAlumniById(this.alumniId).subscribe( res =>
      {
        this.alumni = res;
        this.alumniInfoFG.controls["email"].setValue(this.alumni.email);
        this.alumniInfoFG.controls["name"].setValue(this.alumni.name);

        if(this.alumni.batch)
        {
          this.alumniInfoFG.controls["batch"].setValue(this.alumni.batch);
        }
        else
        {
        this.alumniInfoFG.controls["batch"].setValue("");

        }

      },
      error => {
        this.alumniInfoFG.controls["batch"].setValue("");
      })

    this.als.getAlumniInfo(this.auth.loggedInId()).subscribe(res =>
      {
        this.alumniInfo = res;
        this.image = this.alumniInfo?.image;

        if(this.alumniInfo.houseInJNV)
        {
          this.alumniInfoFG.controls["houseInJNV"].setValue(this.alumniInfo.houseInJNV);
        }
        else
        {
          this.alumniInfoFG.controls["houseInJNV"].setValue("");
        }

        this.alumniInfoFG.controls["address"].setValue(this.alumniInfo.address);
        this.alumniInfoFG.controls["aboutMe"].setValue(this.alumniInfo.aboutMe);

      },
      error => {
        this.alumniInfoFG.controls["houseInJNV"].setValue("");

      })

      this.als.getProfessionalInfo(this.auth.loggedInId()).subscribe(res =>
        {
          this.professionalInfo = res;

          if(this.professionalInfo.profession)
          {
            this.professionalInfoFG.controls["profession"].setValue(this.professionalInfo.profession);

          }
          else
          {
          this.professionalInfoFG.controls["profession"].setValue("");

          }

          this.professionalInfoFG.controls["designation"].setValue(this.professionalInfo.designation);
          this.professionalInfoFG.controls["organization"].setValue(this.professionalInfo.organization);

        },
        error => {
          this.professionalInfoFG.controls["profession"].setValue("");
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
    this.alumni.name = this.alumniInfoFG.controls["name"].value;

    if(this.alumniInfoFG.controls["batch"].value)
    {
      this.alumni.batch = this.alumniInfoFG.controls["batch"].value;
    }
    else
    {
      this.alumni.batch = "";
    }


    this.als.updateAlumni(this.alumni).subscribe( res => {
      console.log(res);
      localStorage.setItem('name',this.alumni.name!);

    },
    error => {
      console.log(error);
      Swal.fire(error.error.message);
    });

  }

  saveAlumniInfo()
  {

    debugger
    this.alumniInfo.alumnusId = this.alumniId;
    this.alumniInfo.image = this.imageToUpload;

    if(this.alumniInfoFG.controls["aboutMe"].value)
    {
      this.alumniInfo.aboutMe = this.alumniInfoFG.controls["aboutMe"].value;
    }
    else
    {
      this.alumniInfo.aboutMe = "";
    }


    if(this.alumniInfoFG.controls["houseInJNV"].value)
    {
      this.alumniInfo.houseInJNV = this.alumniInfoFG.controls["houseInJNV"].value;
    }
    else
    {
      this.alumniInfo.houseInJNV = "";
    }

    if(this.alumniInfoFG.controls["address"].value)
    {
      this.alumniInfo.address = this.alumniInfoFG.controls["address"].value;

    }
    else
    {
      this.alumniInfo.address = "";
    }

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
