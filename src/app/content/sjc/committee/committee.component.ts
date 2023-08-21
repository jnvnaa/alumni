import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { AlumniService } from 'src/app/services/alumni.service';
import { committee } from 'src/assets/docs/committee';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-committee',
  templateUrl: './committee.component.html',
  styleUrls: ['./committee.component.css']
})
export class CommitteeComponent {

  committeeMembers = committee;

  alumni:any;
  dtOptions:DataTables.Settings = {}
  dtTrigger:Subject<any> = new Subject<any>()

  fileName= 'JNV Nalbari Silver Jubilee - Commitee Members.xlsx';

  routeCommittee:{[key:string] : string;} = {
        "Core Committee" : "core",
        "Event Management Sub Committee" : "event-management",
        "Cultural Sub Committee" : "cultural",
        "Finance Sub Committee" : "finance",
        "Literary Sub Committee" : "literary",
        "Reception Sub Committee" : "reception",
        "Food & Catering Sub Committee" : "food-catering",
        "Health & Wellness Sub Committee" : "health-wellness",
        "Transport & Accommodation Sub Committee" : "transport-accomodation",
        "Media & Publicity Sub Committee" : "media-publicity",
        "Sports Sub Committee" : "sports",
        "Audit Sub Committee" : "audit",
        "Plantation Sub Committee" : "plantation",
        "Legal Sub Committee" : "legal",
        "IT Sub Committee" : "it",

      };

  constructor(private als:AlumniService)
  {
    als.getAllAlumniExtra().subscribe((res:any) => {
      this.alumni = res.alumni;

      console.log(this.alumni);

      var dict:{[key: string]: any} = {};
      
      for (var i = 0; i < this.alumni.length; i++) {
          var item = this.alumni[i];

          console.log(item);

          dict[item.phone as string] = item;   
      }

      console.log(dict);

      this.committeeMembers.forEach(element => {

        if(dict.hasOwnProperty(element.Phone))
        {
          if(dict[element.Phone].name)
          {
            element.Name = dict[element.Phone].name;
          }

          element.Id = dict[element.Phone].id;
        }
      });

      this.dtTrigger.next(null);

    });
  }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 25,
      order: [[0, 'asc']]
    }

   
  }

  getRoute(commitee: string)
  {
    return this.routeCommittee[commitee];
  }

  exportExcel(): void
  {
    /* pass here the table id */
    const ws: XLSX.WorkSheet =XLSX.utils.json_to_sheet(this.committeeMembers);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }

}
