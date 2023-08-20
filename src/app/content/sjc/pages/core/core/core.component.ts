import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent {
  title:any;

  routeCommittee:{[key:string] : string;} = {
    "core" : "Core Committee",
    "event-management" : "Event Management Sub Committee",
    "cultural" : "Cultural Sub Committee" ,
    "finance" :     "Finance Sub Committee" ,
    "literary" :     "Literary Sub Committee" ,
    "reception" :     "Reception Sub Committee" ,
    "food-catering" :     "Food & Catering Sub Committee" ,
    "health-wellness" :     "Health & Wellness Sub Committee" ,
    "transport-accomodation" :     "Transport & Accommodation Sub Committee" ,
    "media-publicity" :     "Media & Publicity Sub Committee" ,
    "sports" :     "Sports Sub Committee" ,
    "audit" :     "Audit Sub Committee" ,
    "plantation" :     "Plantation Sub Committee" ,
    "legal" :     "Legal Sub Committee" ,
    "it" :     "IT Sub Committee" ,


  };


  constructor(private router: Router)
  {
    this.title = this.routeCommittee[router.url.replace("/alumni/","")];
  }
}
