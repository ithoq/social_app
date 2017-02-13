import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../../models/User";
import {Location} from "@angular/common";

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  public user:User = null;
  constructor(private route:ActivatedRoute, private location:Location) { }

  ngOnInit() {
    this.route.data
        .subscribe((data: { user: any }) => {
          if(data.user == null){
              alert('no user found');
              this.location.back();
          }
          this.user = data.user;
        }, (error)=>{});
  }

}
