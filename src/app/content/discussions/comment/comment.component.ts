import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnusDto, Comment } from 'src/app/api/models';
import { AlumniService } from 'src/app/services/alumni.service';
import { AuthService } from 'src/app/services/auth.service';
import { StoryService } from 'src/app/services/story.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() comment:Comment = {};

  alumnus:AlumnusDto = {}
  isOwner:boolean = false;
  isAdmin:boolean = false;

  constructor(private als:AlumniService, private auth:AuthService, private ss:StoryService)
  {
    this.isAdmin = auth.isAdmin();
    this.isOwner = this.auth.loggedInId() == this.comment.alumnusId;

  }
  ngOnInit(): void {

    this.als.getAlumniById(this.comment.alumnusId!).subscribe( res => {
      this.alumnus = res;
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
        this.ss.disableComment(this.comment.id).subscribe( res => {
          Swal.fire("Comment deleted successfully");
          this.search.emit();
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your comment not deleted :)',
          'error'
        )
      }
    })


  }

  @Output() search = new EventEmitter<string>();
}
