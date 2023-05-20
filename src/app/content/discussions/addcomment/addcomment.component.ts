import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Story, Comment } from 'src/app/api/models';
import { StoryService } from 'src/app/services/story.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.component.html',
  styleUrls: ['./addcomment.component.css']
})
export class AddcommentComponent {
  @Input() story:Story = {};
  modules = {}
  content = ''
  comment:Comment = {}

  commentFG = new FormGroup({
    content: new FormControl(this.content)
  })


  constructor(private ss:StoryService) {
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

  save()
  {
    this.comment.alumnusId = this.story.alumnusId;
    this.comment.storyId = this.story.id;
    this.comment.content = this.commentFG.controls["content"].value;
    this.comment.active = true;

    this.ss.addComment(this.comment).subscribe( res => {
      Swal.fire("Comment added successfully")
      this.search.emit();
    }, error =>{
      Swal.fire(error.error.message);
    })

  }

  @Output() search = new EventEmitter<string>();

}
