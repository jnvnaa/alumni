import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnusDto, Story, Comment } from 'src/app/api/models';
import { AlumniService } from 'src/app/services/alumni.service';
import { AuthService } from 'src/app/services/auth.service';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent {
  story:Story = {};
  storyId:any;
  alumnus:AlumnusDto = {}
  comments:Comment[] = []
  isLoggedIn:boolean = false;

  constructor(private actRoute:ActivatedRoute, private als:AlumniService, private ss:StoryService, private auth:AuthService,)
  {
    if(this.actRoute.snapshot.paramMap.get('id'))
    {
      this.storyId = this.actRoute.snapshot.paramMap.get('id');
    }

    this.isLoggedIn = auth.isLoggedIn();

  }
  ngOnInit(): void {

    this.ss.getStoryById(this.storyId).subscribe(res => {
      this.story = res;

      this.ss.getAllCommentsByStory(this.story.id).subscribe( res3 => {
        this.comments = res3;
      })

      this.als.getAlumniById(this.story.alumnusId!).subscribe(res2 => {
        this.alumnus = res2
      })
    })

  }

  commentAdded()
  {
    this.ngOnInit();
  }
}
