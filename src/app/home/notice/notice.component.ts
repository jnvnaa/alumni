import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  fetching:boolean = true;

  content:any;

  constructor(private actRoute:ActivatedRoute, private ss:StoryService, private domSanitizer:DomSanitizer)
  {
    if(this.actRoute.snapshot.paramMap.get('id'))
    {
      this.noticeId = this.actRoute.snapshot.paramMap.get('id');
    }

  }
  ngOnInit(): void {

    this.fetching = true;
    this.ss.getStoryById(this.noticeId).subscribe(res => {
      this.notice = res;

      this.ss.getContentByFileName(this.notice.content!).subscribe(res2 => {
        this.content = this.domSanitizer.bypassSecurityTrustHtml(res2.content);
        this.fetching = false;
        });


    })

  }
}
