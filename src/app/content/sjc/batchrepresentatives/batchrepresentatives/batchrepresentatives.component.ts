import { Component, OnInit } from '@angular/core';
import { batchRepresentatives } from 'src/assets/docs/batchrepresentatives';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-batchrepresentatives',
  templateUrl: './batchrepresentatives.component.html',
  styleUrls: ['./batchrepresentatives.component.css']
})
export class BatchrepresentativesComponent implements OnInit{
  dtOptions:DataTables.Settings = {}

  fileName= 'JNV Nalbari Silver Jubilee - Batch Representatives.xlsx';

  brs:{
    Batch: string;
    Phone: string;
    Name: string;
    Id: string;
}[];

  constructor()
  {
    this.brs = batchRepresentatives;
  }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 25,
      order: [[0, 'asc']]
    }

   
  }

  exportExcel(): void
  {
    /* pass here the table id */
    const ws: XLSX.WorkSheet =XLSX.utils.json_to_sheet(this.brs);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }
}
