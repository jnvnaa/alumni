import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Story } from 'src/app/api/models';
import { AuthService } from 'src/app/services/auth.service';
import { StoryService } from 'src/app/services/story.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addnotice',
  templateUrl: './addnotice.component.html',
  styleUrls: ['./addnotice.component.css']
})
export class AddnoticeComponent {

  modules = {}
  content = ''

  story:Story = {}
  saving:boolean = false;

  storyFG = new FormGroup({
    title: new FormControl(this.story.title),
    content: new FormControl(this.content)
  })


  constructor(private ss:StoryService, private auth:AuthService, private router:Router) {
    this.modules = {
      'emoji-shortname': true,
      'emoji-textarea': true,
      'emoji-toolbar': true,
      'toolbar': [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
        ["link", "image", "video"],
        ['emoji']
      ]
    }
  }

  save()
  {
    this.saving =true;
    this.story.alumnusId = this.auth.loggedInId();
    this.story.type = "notice";
    this.story.content = this.storyFG.controls["content"].value;
    this.story.title = this.storyFG.controls["title"].value;

    this.ss.updateStory(this.story).subscribe( res => {
      Swal.fire("Notice added successfully")
      this.saving = false;
      this.search.emit();
    }, error =>{
      Swal.fire(error.error.message);
      this.saving = false;
    })

  }

  back()
  {
    this.search.emit();
  }

  @Output() search = new EventEmitter<string>();

}
