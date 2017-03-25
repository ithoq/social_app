import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {UsersService} from "../../services/users.service";
import {Response} from "@angular/http";
import {UserStuff} from "../../models/UserStuff";
import {AppService} from "../../app.service";

@Component({
  selector: 'app-create-managed-user',
  templateUrl: './create-managed-user.component.html',
  styleUrls: ['./create-managed-user.component.css']
})
export class CreateManagedUserComponent implements OnInit {

  public formBusy:boolean;
  public title:string;
  constructor(public router:Router, public auth:AuthService, public usersService:UsersService, public app:AppService) {
    this.title = 'Create Managed Profile';
    this.formBusy = false;
  }

  ngOnInit() {
  }

  profileCreated(event){
    this.usersService.getUserTimelinesAndStuff().subscribe((data:Response)=>{
      let mapedData = data.json().payload;
      let userStuff = new UserStuff(mapedData.User, mapedData.Timelines, mapedData.ManagedUsers);
      this.auth.setUser(JSON.stringify(userStuff));
      this.app.show_success_popup('Managed profile created successfully');
      this.formBusy = false;
      this.router.navigate(['/manage-profiles']);
    });
  }
  profileCreating(event){
    this.formBusy = true;
  }
}
