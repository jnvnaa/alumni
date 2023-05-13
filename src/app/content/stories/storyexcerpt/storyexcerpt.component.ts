import { Component, Input, OnInit } from '@angular/core';
import { AlumnusDto, Story } from 'src/app/api/models';
import { AlumniService } from 'src/app/services/alumni.service';

@Component({
  selector: 'app-storyexcerpt',
  templateUrl: './storyexcerpt.component.html',
  styleUrls: ['./storyexcerpt.component.css']
})
export class StoryexcerptComponent implements OnInit{

  @Input() story:Story = {};

  alumnus:AlumnusDto = {}

  storyExcerpt:any;

  constructor(private als:AlumniService)
  {

  }
  ngOnInit(): void {

    console.log(this.story)
    this.als.getAlumniById(this.story.alumnusId!).subscribe( res => {
      this.alumnus = res;
    })

    this.storyExcerpt = this.story.content ? String(this.story.content).replace(/<[^>]+>/gm, '') : '';

    this.storyExcerpt = this.storyExcerpt.substring(0,200);

  }

}
