import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-manage-logs',
  templateUrl: './manage-logs.component.html',
  styleUrls: ['./manage-logs.component.css']
})
export class ManageLogsComponent implements OnInit {

  private timelines:any = [];
  public user:any;
  constructor(private auth:AuthService, private route:ActivatedRoute) {
    //this.timelines = this.auth.getUser().timelines;
    this.user = this.auth.getUser().profile;
  }

  ngOnInit() {
    console.log('hi');
    this.route.data
        .subscribe((data: { logs: any }) => {
          this.timelines = data.logs.json().payload;
        }, (error)=>{});
  }

}
