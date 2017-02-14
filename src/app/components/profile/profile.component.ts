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
  @Input() newAccount:boolean;
  @Input() title:string;
  @Input() managedProfile:boolean;


  public colors:any = [
    'aquamarine','beachblue','bloodred','brownbear','chai',
    'cream','creamsicleorange','pinkrose','plum','bloodred','brownbear',
    'cream'
  ];
  public selectedImage:any = null;
  public selectedThumbnail:any = '';
  public newUser:any = {email:'', password:''};

  public color_picker_modal_id = '';
  public photo_chooser_id = '';
  constructor(
      private userService:UsersService,
      private timelineService:TimelineService,
      private entrySerice:EntryService,
      public auth:AuthService,
      private router:Router,
      private profileManagementService:ProfileManagementService,
      private http:Http,
      public appService:AppService,
      public users: UsersService
  ) {
    this.user = new User();
    this.editMode = false;
    this.manualControls = false;
    this.formBusy = false;
    this.newAccount = false;
    this.title = 'Profile';
    this.managedProfile = false;
  }

  getTitle(){
    return this.title;
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
    let profileData = {
      FirstName: inputData.FirstName,
      LastName: inputData.LastName,
      NickName: inputData.NickName,
      DateBirthDay: $('.datepicker').val(),
      address:inputData.address,
      Color:inputData.Color,
      ManagedByUserId:this.auth.currentUser.UserId,
      ManagedByUserName: this.auth.currentUser.FirstName+' '+this.auth.currentUser.LastName,
      ManagedByUserNickName: this.auth.currentUser.Nickname
    };
    let newAcountData = {
      Email:inputData.email,
      Pass:inputData.password,
      Username:''
    };

    let createProfile = new Promise((resolve, reject)=>{
      if(this.newAccount){
        this.users.createManagedUser(newAcountData, this.auth.currentUser.UserId).subscribe((data:Response)=>{
          this.user.UserId = data.json().payload.UserId;
          resolve(true);
        }, (e)=>{
          let error = (e.json()['error_message'] != undefined)?e.json()['error_message']:'Something went wrong with the server or may be you internet connection is lost. please try a few moments later.';
          reject(error);
        });
      }else{
        resolve(true);
      }
    });

    createProfile.then((_promise_data)=>{
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
      this.userService.updateSettings(this.managedProfile, this.getUser().UserId, profileData, image).subscribe((data:Response)=>{
        if(!this.manualControls){
          this.formBusy = false;
          this.exitEditMode();
        }

        let updatedUser = data.json().payload.User;
        this.setUser(this.appService.map(updatedUser, new User()));

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
    }, (error)=>{
      alert(error);
    });
  }

  loggedInUsrCanEdit(){
      return (this.auth.currentUser.UserId == this.getUser().UserId || this.newAccount || this.auth.currentUser.UserId == this.getUser().ManagedByUserId);
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

  chooseFile(event){
    jQuery('#'+this.photo_chooser_id).click();
  }

  ngOnInit() {
    this.color_picker_modal_id = 'color-picker-'+this.appService.unique_id();
    this.photo_chooser_id = 'profile-img-chooser-'+this.appService.unique_id();
    this.user = _.cloneDeep(this.user);
    if(this.newAccount)
      this.managedProfile = true;
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

  colorPicked(event){
    $('#'+this.color_picker_modal_id).modal('hide');
  }

}
