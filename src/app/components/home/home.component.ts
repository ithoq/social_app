import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Response} from '@angular/http';
import { Router } from '@angular/router';
import {RightContentService} from "../../services/right-content.service";

@Component({
  selector: 'sa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /* map api */
  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  /* ----------------------- */

  constructor(private auth: AuthService, private appRouter: Router, private rightContent:RightContentService) {

  }

  logout(){
    this.auth.logout().subscribe(
      (response: Response)=>{
        this.appRouter.navigate(['login']);
      },
      (error)=>{}
    );
  }

  asideToggle(){
    this.rightContent.aside_in = !this.rightContent.aside_in;
  }
  ngOnInit() {

  }

  showmap:any = false;
  showMap(){
    this.showmap = !this.showmap;
  }

}
