import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-manage-logs',
  templateUrl: './manage-logs.component.html',
  styleUrls: ['./manage-logs.component.css']
})
export class ManageLogsComponent implements OnInit {

  private timelines:any = [];
  public user:any;
  constructor(private auth:AuthService) {
    this.timelines = this.auth.getUser().timelines;
    this.user = this.auth.getUser().profile;
  }

  ngOnInit() {

  }

}
