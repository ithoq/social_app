import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {Response} from "@angular/http";
import {TimelineService} from "../../../services/timeline.service";

@Component({
  selector: 'sa-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  public user;
  public timelines:any;
  constructor(private auth: AuthService, private appRouter: Router, private timelineService:TimelineService) {
      this.timelines = this.auth.getUser().timelines;
      this.user = this.auth.getUser().profile;
  }

  ngOnInit() {
  }


  logout(){
    this.auth.logout().subscribe(
      (response: Response)=>{
        this.appRouter.navigate(['login']);
      },
      (error)=>{}
    );
  }

}
