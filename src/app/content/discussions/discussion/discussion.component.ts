import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnusDto, Story, Comment } from 'src/app/api/models';
import { AlumniService } from 'src/app/services/alumni.service';
import { AuthService } from 'src/app/services/auth.service';
import { StoryService } from 'src/app/services/story.service';
import Swal from 'sweetalert2';

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
  isOwner:boolean = false;
  isAdmin:boolean = false;
  fetching:boolean = true;

  constructor(private actRoute:ActivatedRoute, private als:AlumniService, private ss:StoryService, private auth:AuthService, private router:Router)
  {
    if(this.actRoute.snapshot.paramMap.get('id'))
    {
      this.storyId = this.actRoute.snapshot.paramMap.get('id');
    }

    this.isLoggedIn = auth.isLoggedIn();
    this.isAdmin = auth.isAdmin();

  }
  ngOnInit(): void {

    this.fetching = true;
    this.ss.getStoryById(this.storyId).subscribe(res => {
      this.story = res;

      this.isOwner = this.auth.loggedInId() == this.story.alumnusId;

      this.ss.getAllCommentsByStory(this.story.id).subscribe( res3 => {
        this.comments = res3;
      })

      this.als.getAlumniById(this.story.alumnusId!).subscribe(res2 => {
        this.alumnus = res2
      })

      this.fetching = false;
    })

  }

  commentAdded()
  {
    this.ngOnInit();
  }

  disable()
  {
    Swal.fire({
      title: 'Are you sure want to delete?',
      text: 'You will not be able to recover the content!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.ss.disable(this.story.id).subscribe( res => {
          Swal.fire("Content deleted successfully");
          this.router.navigate(['/alumni/discussions']);
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your content not deleted :)',
          'error'
        )
      }
    })

  }
}
