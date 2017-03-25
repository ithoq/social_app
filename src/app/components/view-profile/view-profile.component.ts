import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../../models/User";
import {Location} from "@angular/common";
import {AppService} from "../../app.service";

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  public user:User = null;
  constructor(private route:ActivatedRoute, private location:Location, public app:AppService) { }

  ngOnInit() {
    this.route.data
        .subscribe((data: { user: any }) => {
          if(data.user == null){
              this.app.show_error_popup('no user found');
              this.location.back();
          }
          this.user = data.user;
        }, (error)=>{});
  }

}
