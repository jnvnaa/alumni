import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-sjc',
  templateUrl: './sjc.component.html',
  styleUrls: ['./sjc.component.css']
})
export class SjcComponent {

  isAdmin = false;

  constructor(private auth:AuthService)
  {
    this.isAdmin = auth.isAdmin();
  }

}
