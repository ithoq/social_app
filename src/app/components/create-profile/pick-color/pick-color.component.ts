import { Component, OnInit } from '@angular/core';
import {ProfileManagementService} from "../../../services/profile-management.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'sa-pick-color',
  templateUrl: './pick-color.component.html',
  styleUrls: ['./pick-color.component.css']
})
export class PickColorComponent implements OnInit {

  public colors:any = [
      'aquamarine',
      'beachblue',
      'bloodred',
      'brownbear',
      'chai',
      'cream',
      'creamsicleorange',
      'pinkrose',
      'plum',
      'bloodred',
      'brownbear',
      'cream'

  ];
  constructor(private profileService:ProfileManagementService, private router:Router, private _location:Location) { }

  clicked(color:any){
    this.profileService.setColor(color);
      this._location.back();
    //this.router.navigate(['manage-profile']);
  }

  ngOnInit() {}

}
