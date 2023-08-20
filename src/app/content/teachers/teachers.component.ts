import { Component, OnInit } from '@angular/core';
import { teachers } from 'src/assets/teachers/teachers';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit{

  dtOptions1:DataTables.Settings = {}

  fileName= 'JNV Nalbari Silver Jubilee - Staff invitation.xlsx';

  teachers2:{
    id: number;
    name: string;
    subject: string;
    phone: string;
    location: string;
    service_year: string;
    invitation_sent: boolean;
}[];

  total:number;
  invitation_sent:number;

  constructor()
  {
    this.teachers2 = teachers;

    this.total = this.teachers2.length;
    this.invitation_sent = this.teachers2.filter( x => 
                    x.invitation_sent).length;

  }

  ngOnInit(): void {

    this.dtOptions1 = {
      pagingType: "full_numbers",
      pageLength: 25,
      order: [[0, 'asc']]
    }

   
  }

  exportExcel(): void
  {
    /* pass here the table id */
    const ws: XLSX.WorkSheet =XLSX.utils.json_to_sheet(this.teachers2);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }
}
