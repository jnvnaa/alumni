import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnusDto, Comment } from 'src/app/api/models';
import { AlumniService } from 'src/app/services/alumni.service';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() comment:Comment = {};

  alumnus:AlumnusDto = {}

  constructor(private als:AlumniService)
  {

  }
  ngOnInit(): void {

    this.als.getAlumniById(this.comment.alumnusId!).subscribe( res => {
      this.alumnus = res;
    })
  }
}
