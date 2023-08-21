import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Story } from 'src/app/api/models';
import { AlumniService } from 'src/app/services/alumni.service';
import { AuthService } from 'src/app/services/auth.service';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit{


  stories:Story[] = []
  isNotEdit:boolean = false;
  isEdit:boolean = false;

  isLoggedIn:boolean = false;

  searching:boolean = true;

  constructor(private ss:StoryService, private auth:AuthService, private router:Router, private as:AlumniService)
  {
    this.isEdit = false;
    this.isNotEdit = true;

    this.isLoggedIn = auth.isLoggedIn();
  }
  ngOnInit(): void {

    this.searching = true;
    this.ss.getStories("story").subscribe( res => {
      this.stories = res

      this.searching = false;

      console.log(res)
    })
  }

  enableEdit()
  {

    this.isEdit = true;
    this.isNotEdit = false;
  }

  editCompleted()
  {
    this.isEdit = false;
    this.isNotEdit = true;

    this.ngOnInit();
  }

  getAuthor(id:any)
  {
    this.as.getAlumniById(id).subscribe( res => {
      return res.name + " (" + res.batch + ")";
    })
  }

}
