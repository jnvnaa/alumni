import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnusDto } from 'src/app/api/models';
import { AlumniService } from 'src/app/services/alumni.service';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit{
  alumni:AlumnusDto = {}
  alumniId = 0;
  saving:boolean = false;

  batches = ["Teacher","1994-1995","1995-1996","1996-1997","1997-1998","1998-1999","1999-2000","2000-2001","2001-2002","2002-2003",
              "2003-2004","2004-2005","2005-2006","2006-2007","2007-2008","2008-2009","2009-2010","2010-2011",
            "2011-2012","2012-2013","2013-2014","2014-2015","2015-2016","2016-2017","2017-2018","2018-2019","2019-2020","2020-2021"]

  alumniFG = new FormGroup({
              name: new FormControl(this.alumni.name, Validators.required),
              batch: new FormControl(this.alumni.batch, Validators.required)
            })
  
  constructor(private als:AlumniService,
              private auth:AuthService,
              private router:Router,
              private route:ActivatedRoute)
  {
    

  }

  ngOnInit(): void {

    this.alumniId = this.auth.loggedInId();

    this.als.getAlumniById(this.alumniId).subscribe( res =>
    {
      this.alumni = res;
    });

  }

  saveAlumni()
  {
    this.alumni.name = this.alumniFG.controls["name"].value;

    if(this.alumniFG.controls["batch"].value)
    {
      this.alumni.batch = this.alumniFG.controls["batch"].value;
    }
    else
    {
      this.alumni.batch = "";
    }

    this.saving = true;

    this.als.updateAlumni(this.alumni).subscribe( res => {

      localStorage.setItem('name',this.alumni.name!);
      this.router.navigate(["alumni"]);

    },
    error => {
      Swal.fire("Oops!! Something went wrong. Please contact IT Team")
      this.saving = false;
    });

  }

}
