import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Story } from 'src/app/api/models';
import { AuthService } from 'src/app/services/auth.service';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent {

  notices:Story[] = []
  isNotEdit:boolean = false;
  isEdit:boolean = false;

  isAdmin:boolean = false;
  searching:boolean = true;

  constructor(private ss:StoryService, private auth:AuthService, private router:Router)
  {
    this.isEdit = false;
    this.isNotEdit = true;

    this.isAdmin = auth.isAdmin();
  }
  ngOnInit(): void {

    this.searching = true;
    this.ss.getStories("notice").subscribe( res => {
      this.notices = res
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
}
