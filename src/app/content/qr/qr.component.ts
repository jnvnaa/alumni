import { Component } from '@angular/core';
import { AlumnusDto } from 'src/app/api/models';
import { AlumniService } from 'src/app/services/alumni.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent {


  alumniId = Number(localStorage.getItem("userid"));
  alumni:AlumnusDto = {}

  qrfile = "";
  batchRange = "";
  constructor(private als:AlumniService)
  {
    this.als.getAlumniById(this.alumniId).subscribe( res =>
      {
        this.alumni = res;

        var b = Number(res.batch);
        if(b == 1999)
        {
          this.batchRange = (b -5) + '-' + b;
        }
        else
        {
          this.batchRange = (b -5) + '-' + (b + 2);
        }

      })

    als.getQr(this.alumniId).subscribe( res =>
      {
        this.qrfile = res.file;
      })
  }

}
