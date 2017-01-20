import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {TimelineService} from "../../services/timeline.service";
import {Response} from "@angular/http";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-create-log',
  templateUrl: './create-log.component.html',
  styleUrls: ['./create-log.component.css']
})
export class CreateLogComponent implements OnInit {

  constructor(private timelineService:TimelineService, private router:Router, private auth:AuthService) { }

  create(form:NgForm){
    this.timelineService.create({Name:form.value.Name}).subscribe((data:Response)=>{
        let user = this.auth.getUser();
        user.timelines.push({Id:data.json().payload.TimelineId,Name:form.value.Name});
        this.timelineService.setUserTimelines(user.timelines);
        this.auth.setUser(JSON.stringify(user));
        this.router.navigate(['manage-logs']);
    });
  }

  ngOnInit() {
  }

}
