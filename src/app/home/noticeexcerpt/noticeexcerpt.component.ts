import { Component, Input } from '@angular/core';
import { Story } from 'src/app/api/models';
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-noticeexcerpt',
  templateUrl: './noticeexcerpt.component.html',
  styleUrls: ['./noticeexcerpt.component.css']
})
export class NoticeexcerptComponent {
  @Input() notice:Story = {};

  noticeExcerpt:any;

  ngOnInit(): void {

    this.noticeExcerpt = this.notice.content ? String(this.notice.content).replace(/<[^>]+>/gm, '') : '';

    this.noticeExcerpt = this.noticeExcerpt.substring(0,200);

  }
}
