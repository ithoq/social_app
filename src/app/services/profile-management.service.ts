import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";

@Injectable()
export class ProfileManagementService  implements CanActivate{

  private color:any;
  private allowColorChooser:any;
  private profileData:any;
  constructor(private router:Router) {
    this.allowColorChooser = {
      current:false,
      default:false
    };
    this.color = {
      current:null,
      default:null
    }
    this.profileData = {
      current:null,
      default:null
    }
  }

  setAllowColorChooser(value:any){
    this.allowColorChooser.current = value;
  };

  /*
   returns the current title from the title object
   set current title with the default one.
   basically its like a flash message. which can only be used once.
   */
  getAllowColorChooser(){
    let value = this.allowColorChooser.current;
    this.allowColorChooser.current = this.allowColorChooser.default;
    return value;
  }

  setColor(value:any){
    this.color.current = value;
  };

  /*
   returns the current title from the title object
   set current title with the default one.
   basically its like a flash message. which can only be used once.
   */
  getColor(){
    let value = this.color.current;
    this.color.current = this.color.default;
    return value;
  }

  setProfileData(value:any){
    this.profileData.current = value;
  };

  /*
   returns the current title from the title object
   set current title with the default one.
   basically its like a flash message. which can only be used once.
   */
  getProfileData(){
    let value = this.profileData.current;
    this.profileData.current = this.profileData.default;
    return value;
  }

  canActivate(){
    if(!this.getAllowColorChooser()){
      this.router.navigate(['create-profile']);
    }else{
      return true;
    }
  }
}
