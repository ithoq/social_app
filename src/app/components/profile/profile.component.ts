import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {User} from "../../models/User";
import {UsersService} from "../../services/users.service";
import {TimelineService} from "../../services/timeline.service";
import {EntryService} from "../../services/entry.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ProfileManagementService} from "../../services/profile-management.service";
import {Http, Response} from "@angular/http";
import {AppService} from "../../app.service";
import {NgForm} from "@angular/forms";
import * as _ from "lodash";

declare var $:any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Output() profileUpdating = new EventEmitter();
  @Output() profileUpdated = new EventEmitter();
  @Output() enteringEditingMode = new EventEmitter();
  @Output() exitingEditingMode = new EventEmitter();
  @Output() someThingWentWrong = new EventEmitter();
  @Input() user: User;
  @Input() editMode:boolean;
  @Input() manualControls:boolean; //used to control loaders etc by parent component
  @Input() formBusy:boolean;

  public selectedImage:any = null;
  public selectedThumbnail:any = '';
  constructor(
      private userService:UsersService,
      private timelineService:TimelineService,
      private entrySerice:EntryService,
      public auth:AuthService,
      private router:Router,
      private profileManagementService:ProfileManagementService,
      private http:Http,
      public appService:AppService
  ) {
    this.user = new User();
    this.editMode = false;
    this.manualControls = false;
    this.formBusy = false;
  }

  getTitle(){
    return 'Profile';
  }

  getAction(){
    return 'Save';
  }

  enterEditMode(){
    this.editMode = true;
  }
  exitEditMode(){
    this.editMode = false;
  }
  createProfile(form:NgForm){
    let inputData = form.value;
    inputData.DateBirthDay = $('.datepicker').val();
    let image = null;
    if(this.selectedImage != null){
      image = new FormData();
      image.append('Image', this.selectedImage);
    }

    if(!this.manualControls)
      this.formBusy = true;

    this.profileUpdating.emit({
      data:form.value
    });
    this.userService.updateSettings(this.getUser().UserId, inputData, image).subscribe((data:Response)=>{
        if(!this.manualControls){
          this.formBusy = false;
          this.exitEditMode();
        }

        let user = _.cloneDeep(this.getUser());
        let updatedUser = data.json().payload.User;
        for (var property in updatedUser) {
          user[property] = updatedUser[property];
        }
        this.setUser(user);
        this.profileUpdated.emit({
          user:this.getUser()
        });
    },(error) => {
      this.someThingWentWrong.emit({
        error:{msg:'some thing went wrong with the server'}
      });
      if(!this.manualControls){
        this.formBusy = false;
        alert('some thing went wrong with the server please try again.');
      }
    });
  }

  loggedInUsrCanEdit(){
      return (this.auth.currentUser.UserId == this.getUser().UserId);
  }

  filesSelected(event){
    if(event.target.files.length > 0){
      this.selectedImage = event.target.files[0];
      if(this.selectedImage.type == 'image/jpeg'){
        let reader = new FileReader();
        reader.onload = (e:any)=>{
          this.selectedThumbnail = e.target.result;
        };
        reader.readAsDataURL(this.selectedImage);
      }else{
        alert('only jpeg images are allowed');
      }

    }
  }

  chooseColor(form:NgForm){
    let user = this.getUser();
    for (var property in form.value) {
      user[property] = form.value[property];
    }
    let data = {
      user:user,
      selectedImage: this.selectedImage,
      selectedThumbnail:this.selectedThumbnail,
      DateBirthDay : $('.datepicker').val()
    };
    this.profileManagementService.setProfileData(data);
    this.profileManagementService.setAllowColorChooser(true);
    this.router.navigate(['pick-color']);
  }

  chooseFile(){
    jQuery('#profile-img-chooser').click();
  }

  ngOnInit() {
    let profileData = this.profileManagementService.getProfileData();
    if(profileData != null){
      this.enterEditMode();
      this.user = profileData.user;
      this.user.Color = this.profileManagementService.getColor();
      this.selectedThumbnail = profileData.selectedThumbnail;
      this.selectedImage = profileData.selectedImage;
      this.user.DateBirthDay = profileData.DateBirthDay;
    }
  }

  ngAfterViewInit(){
    $('.datepicker').datepicker();
  }

  setUser(user:User){
    this.user = user;
  }
  getUser(){
    return this.user;
  }

}
