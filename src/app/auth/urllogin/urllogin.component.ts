import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-urllogin',
  templateUrl: './urllogin.component.html',
  styleUrls: ['./urllogin.component.css']
})
export class UrlloginComponent {

  constructor(private actRoute:ActivatedRoute, private router:Router, private auth:AuthService)
  {

    if(this.actRoute.snapshot.paramMap.get('id'))
    {
       var IdentifierKey = this.actRoute.snapshot.paramMap.get('id');

       this.auth.onUrlLogin(IdentifierKey).subscribe((res:any) => {
        console.log(res);
        localStorage.setItem('token',res.token);
        localStorage.setItem('userid',res.userid);
        localStorage.setItem('name',res.name);

        router.navigate(["login"]);
       },
       error => {
         
        router.navigate(["login"]);
       });;
    }    
  }
}
