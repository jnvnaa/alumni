import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnusDto, Story } from 'src/app/api/models';
import { AlumniService } from 'src/app/services/alumni.service';
import { AuthService } from 'src/app/services/auth.service';
import { StoryService } from 'src/app/services/story.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit{

  story:Story = {};
  storyId:any;
  alumnus:AlumnusDto = {}
  content:string = "";
  isOwner:boolean = false;
  isAdmin:boolean = false;

  constructor(private actRoute:ActivatedRoute, private als:AlumniService, private ss:StoryService, private auth:AuthService, private router:Router)
  {
    if(this.actRoute.snapshot.paramMap.get('id'))
    {
      this.storyId = this.actRoute.snapshot.paramMap.get('id');
    }

    this.isAdmin = auth.isAdmin();

  }
  ngOnInit(): void {

    this.ss.getStoryById(this.storyId).subscribe(res => {
      this.story = res;

      this.isOwner = this.auth.loggedInId() == this.story.alumnusId;

      this.als.getAlumniById(this.story.alumnusId!).subscribe(res2 => {
        this.alumnus = res2
      })
    })

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
          this.router.navigate(['/stories']);
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
