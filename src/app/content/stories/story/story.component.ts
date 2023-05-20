import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnusDto, Story } from 'src/app/api/models';
import { AlumniService } from 'src/app/services/alumni.service';
import { StoryService } from 'src/app/services/story.service';

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

  constructor(private actRoute:ActivatedRoute, private als:AlumniService, private ss:StoryService)
  {
    if(this.actRoute.snapshot.paramMap.get('id'))
    {
      this.storyId = this.actRoute.snapshot.paramMap.get('id');
    }

  }
  ngOnInit(): void {

    this.ss.getStoryById(this.storyId).subscribe(res => {
      this.story = res;

      this.als.getAlumniById(this.story.alumnusId!).subscribe(res2 => {
        this.alumnus = res2
      })
    })

  }

}
