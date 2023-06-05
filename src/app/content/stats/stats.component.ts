import { Component, OnInit } from '@angular/core';
import { AlumniService } from 'src/app/services/alumni.service';
import { FormControl, FormGroup} from '@angular/forms';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit  {

  alumni = new FormControl('');
  alumniData:any = [];

  isAdmin:boolean = false;

  dtOptions:DataTables.Settings = {

  }

  dtTrigger:Subject<any> = new Subject<any>()

  constructor(private alumniService: AlumniService, private auth:AuthService) {

    this.isAdmin = auth.isAdmin();




  }
  ngOnInit(): void {

    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 50
    }

    this.alumniService.getAllAlumni().subscribe((res:any) => {
      console.log(res);

      this.alumniData = res;
      this.dtTrigger.next(null);
    });
  }



  sendCred(alumni:any)
  {
    if(typeof alumni.phone!='undefined' && alumni.phone)
    {

        this.alumniService.sendCred(alumni.id).subscribe(res => {
          Swal.fire(res.message);
        },
        error => {
          Swal.fire(error.error.message);
        })
      }
      else
      {
        Swal.fire("Phone number does not exists");
      }

   }


   disable(alumni:any)
   {

    Swal.fire({
      title: 'Are you sure want to delete?',
      text: 'You will not be able to recover the user!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

        this.alumniService.disable(alumni.id).subscribe(res => {
          Swal.fire("User deleted successfully");
          this.ngOnInit();
        },
        error => {
          Swal.fire(error.error.message);
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'User not deleted :)',
          'error'
        )
      }
    })
  }
}
