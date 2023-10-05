import { Component, OnInit } from '@angular/core';
import { AlumniService } from 'src/app/services/alumni.service';
import { Attendance } from './attendance';
import { Subject, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit  {

  attendences: Attendance[] = [];

  selectedEvent = "";

  totalAlumni = 0;
  totalFootfall = 0;

  selectedAttendances: Attendance[] = [];

  eventNames: string[] = []

  dtOptions:DataTables.Settings = {

  }

  dtTrigger:Subject<any> = new Subject<any>()

  constructor(private als:AlumniService)
  {
    
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 50,
      order: [[0, 'desc']],
      destroy: true
    }

    this.als.getEventNames().subscribe( (res:any) => {
      this.eventNames = res;
    });

    this.als.getAttendance().subscribe( (res:any) =>{
      this.attendences = res;
    });

    const obs$ = interval(5000);

    obs$.subscribe( (d) => {
        this.update();
    });
  }

  update()
  {
    if(this.selectedEvent == "" && this.eventNames.length > 0)
    {
      this.selectedEvent = this.eventNames[0];
      this.onSelectChange("");
    }

    this.als.getAttendance().subscribe( (res:any) =>{
      this.attendences = res;
      this.onSelectChange("");
    });

  }

  onSelectChange($event: any) {
      this.selectedAttendances = this.attendences.filter( x => x.event === this.selectedEvent); 

      this.totalAlumni = this.selectedAttendances.length;
      this.totalFootfall = this.selectedAttendances.map( i => i.numberOfAccompanied ).reduce((acc, curr) => acc + curr, 0) + this.totalAlumni;

      this.dtTrigger.next(null);
    }

}
