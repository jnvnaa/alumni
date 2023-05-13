import { Component } from '@angular/core';
import { AlumniService } from 'src/app/services/alumni.service';
import { FormControl, FormGroup} from '@angular/forms';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {

  alumni = new FormControl('');
  alumniData:any = [];

  isAdmin:boolean = false;

  dtOptions:DataTables.Settings = {}

  dtTrigger:Subject<any> = new Subject<any>()

  constructor(private alumniService: AlumniService, private auth:AuthService) {

    this.isAdmin = auth.isAdmin();

    this.dtOptions = {
      pagingType: "full_numbers"
    }

    this.alumniService.getAllAlumni().subscribe((res:any) => {
      console.log(res);

      this.alumniData = res;
      this.dtTrigger.next(null);
    });
  }

}
