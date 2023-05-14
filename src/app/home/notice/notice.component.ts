import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Story } from 'src/app/api/models';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent {
  notice:Story = {};
  noticeId:any;

  constructor(private actRoute:ActivatedRoute, private ss:StoryService)
  {
    if(this.actRoute.snapshot.paramMap.get('id'))
    {
      this.noticeId = this.actRoute.snapshot.paramMap.get('id');
    }

  }
  ngOnInit(): void {

    this.ss.getStoryById(this.noticeId).subscribe(res => {
      this.notice = res;
    })

  }
}
