import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cultural',
  templateUrl: './cultural.component.html',
  styleUrls: ['./cultural.component.css']
})
export class CulturalComponent {
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
