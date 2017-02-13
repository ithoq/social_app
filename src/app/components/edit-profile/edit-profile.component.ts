import { Component, OnInit } from '@angular/core';
import {User} from "../../models/User";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  public user:User = null;
  constructor(private route:ActivatedRoute,private location:Location) { }

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
