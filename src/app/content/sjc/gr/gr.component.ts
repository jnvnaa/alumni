import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AlumniService } from 'src/app/services/alumni.service';

@Component({
  selector: 'app-gr',
  templateUrl: './gr.component.html',
  styleUrls: ['./gr.component.css']
})
export class GrComponent implements OnInit{

data:any = []
total:number = 0;
batch:any = {};

dtOptions:DataTables.Settings = {}
dtTrigger:Subject<any> = new Subject<any>()

constructor(private als:AlumniService)
  {
   

  }
  ngOnInit(): void {

    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 50,
      order: [[0, 'desc']]
    }

    this.als.getAllGf().subscribe((res:any) => {
      this.data = res.data;
      this.total = res.total;
      this.batch = res.batch;

      this.dtTrigger.next(null);
    });
  }
}
