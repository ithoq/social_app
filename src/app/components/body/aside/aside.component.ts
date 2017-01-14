import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {Response} from "@angular/http";

@Component({
  selector: 'sa-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  constructor(private auth: AuthService, private appRouter: Router) { }

  ngOnInit() {
  }


  logout(){
    this.auth.logout().subscribe(
      (response: Response)=>{
        console.log('loggedout');
        this.appRouter.navigate(['login']);
      },
      (error)=>{}
    );
  }

}
