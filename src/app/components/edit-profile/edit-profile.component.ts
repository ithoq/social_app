import { Component, OnInit } from '@angular/core';
import {User} from "../../models/User";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {AppService} from "../../app.service";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  public user:User = null;
  constructor(private route:ActivatedRoute,private location:Location, public app:AppService) { }

  ngOnInit() {
    this.route.data
        .subscribe((data: { user: any }) => {
          if(data.user == null){
              this.app.show_error_popup('no user found.');
              this.location.back();
          }
          this.user = data.user;
          console.log(this.user);
        }, (error)=>{});
  }
}
