import {Component, OnInit, ViewChild} from '@angular/core';
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
    @ViewChild('managedProfile') managedProfile;
  public user:User = null;
  public title:string = '';
  constructor(private route:ActivatedRoute,private location:Location, public app:AppService) { }


    saveUser(){
        this.managedProfile.submitForm();
    }

  ngOnInit() {
    this.route.data
        .subscribe((data: { user: any }) => {
          if(data.user == null){
              this.app.show_error_popup('no user found.');
              this.location.back();
          }
          this.user = data.user;
          this.managedProfile.setAction('');
          this.title = 'Edit Profile'
        }, (error)=>{});
  }
}
