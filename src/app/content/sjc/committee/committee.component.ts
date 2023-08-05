import { Component } from '@angular/core';
import { AlumniService } from 'src/app/services/alumni.service';
import { committee } from 'src/assets/docs/committee';

@Component({
  selector: 'app-committee',
  templateUrl: './committee.component.html',
  styleUrls: ['./committee.component.css']
})
export class CommitteeComponent {

  committeeMembers = committee;

  alumni:any;

  constructor(private als:AlumniService)
  {
    als.getAllAlumniExtra().subscribe((res:any) => {
      this.alumni = res.alumni;

      console.log(this.alumni);

      var dict:{[key: string]: any} = {};
      
debugger

      for (var i = 0; i < this.alumni.length; i++) {
          var item = this.alumni[i];

          console.log(item);

          dict[item.phone as string] = item;   
      }

      console.log(dict);

      this.committeeMembers.forEach(element => {
        element.Name = dict[element.Phone].name;
        element.Id = dict[element.Phone].id;
      });
    });
  }

}
