import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  @HostListener('contextmenu', ['$event'])
  onRightClick(event: { preventDefault: () => void; }) {
    event.preventDefault();
  }
}
