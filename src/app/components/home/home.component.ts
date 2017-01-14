import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Response} from '@angular/http';
import { Router } from '@angular/router';
import {RightContentService} from "../../services/right-content.service";
declare var $:any;
@Component({
  selector: 'sa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  $:any;
  constructor(private auth: AuthService, private appRouter: Router, private rightContent:RightContentService) {
    this.$ = $;
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

  asideToggle(){
    this.rightContent.aside_in = !this.rightContent.aside_in;
  }
  ngOnInit() {
    console.log(this.auth.getUser());
  }

}
