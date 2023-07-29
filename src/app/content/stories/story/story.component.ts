import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnusDto, Story } from 'src/app/api/models';
import { AlumniService } from 'src/app/services/alumni.service';
import { AuthService } from 'src/app/services/auth.service';
import { StoryService } from 'src/app/services/story.service';
import Swal from 'sweetalert2';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit{

  story:Story = {};
  storyId:any;
  alumnus:AlumnusDto = {}
  isOwner:boolean = false;
  isAdmin:boolean = false;
  fetching:boolean = false;

  content:any;

  constructor(private actRoute:ActivatedRoute, private als:AlumniService, private ss:StoryService, private auth:AuthService, private router:Router, private domSanitizer:DomSanitizer)
  {
    if(this.actRoute.snapshot.paramMap.get('id'))
    {
      this.storyId = this.actRoute.snapshot.paramMap.get('id');
    }

    this.isAdmin = auth.isAdmin();

  }
  ngOnInit(): void {

    this.fetching = true;
    this.ss.getStoryById(this.storyId).subscribe(res => {
      this.story = res;

      this.content = this.domSanitizer.bypassSecurityTrustHtml(this.story.content!);

      this.isOwner = this.auth.loggedInId() == this.story.alumnusId;

      this.als.getAlumniById(this.story.alumnusId!).subscribe(res2 => {
        this.alumnus = res2
      })

      this.fetching = false;
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
          this.router.navigate(['/alumni/stories']);
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

  share() {
  
    // Opening URL
    window.open(
        "whatsapp://send?text=OK",

        // This is what makes it 
        // open in a new window.
        '_blank' 
    );
}

}
