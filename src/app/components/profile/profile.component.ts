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
import {UploadedFile} from "../../models/UploadedFile";

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
    'cream','creamsicleorange','forestgreen','graywhale','lemonyellow','mintgreen',
    'bloodorange', 'pinkrose','plum', 'raspberry', 'seagreen', 'skyblue', 'slateblue'
  ];
  public selectedImage:any = null;
  public selectedThumbnail:any = '';
  public newUser:any = {email:'', password:''};

  public color_picker_modal_id = '';
  public photo_chooser_id = '';
  public uploadedFile:UploadedFile = null;
  public uploadingFile:boolean = false;
  public rightActionTitle:string = 'Save';
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
    return this.rightActionTitle;
  }
  setAction(action='save'){
    this.rightActionTitle = action;
  }
  goToEditPage(){
    localStorage.setItem('viewUserProfile',JSON.stringify(this.user));
    this.router.navigate(['/profile/'+this.user.UserId+'/edit']);
  }
  enterEditMode(){
    this.editMode = true;
  }
  exitEditMode(){
    this.editMode = false;
  }
  submitForm(){
    $('#submit-profile').click();
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
      ManagedByUserName: ((this.getUser().UserId == this.auth.currentUser.UserId)?
                            inputData.FirstName+' '+inputData.LastName:
                            this.auth.currentUser.FirstName+' '+this.auth.currentUser.LastName),
      ManagedByUserNickName: ((this.getUser().UserId == this.auth.currentUser.UserId)?
                                inputData.NickName:
                                this.auth.currentUser.Nickname),
    };
    if(this.uploadedFile != null){
      profileData['ImageId'] = this.uploadedFile.Id;
      //TODO: set uploaded file id in profileData object;
    }
    let newAcountData = {
      Email:'',
      Pass:'',
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
      console.log(profileData);
      this.userService.updateSettings(this.managedProfile, this.getUser().UserId, profileData).subscribe((data:Response)=>{
        if(!this.manualControls){
          this.formBusy = false;
          this.exitEditMode();
        }
        let updatedUser:any = data.json().payload.User;
        let mapedUser = this.appService.map(updatedUser, new User());
        if(this.uploadedFile != null){
            mapedUser.ImageURL = this.uploadedFile.FileURL;
            mapedUser.ThumbURL = this.uploadedFile.ThumbURL;
        }
        this.setUser(mapedUser);

        this.profileUpdated.emit({
          user:this.getUser()
        });
      },(error) => {
        this.someThingWentWrong.emit({
          error:{msg:'some thing went wrong with the server'}
        });
        if(!this.manualControls){
          this.formBusy = false;
          this.appService.show_error_popup('some thing went wrong with the server please try again.');
        }
      });
    }, (error)=>{
      this.appService.show_error_popup(error);
    });
  }

  loggedInUsrCanEdit(){
      return (this.auth.currentUser.UserId == this.getUser().UserId || this.newAccount || this.auth.currentUser.UserId == this.getUser().ManagedByUserId);
  }

  filesSelected(event){
    if(event.target.files.length > 0){
      this.selectedImage = event.target.files[0];
      if(this.selectedImage.type == 'image/jpeg'){
        this.uploadingFile = true;
        let files = new FormData();
        files.append('Image', event.target.files[0]);
        this.userService.uploadUserImage(files, function (evt) {}).subscribe((files:Array<UploadedFile>)=>{
          this.uploadedFile = files[0];
          this.selectedThumbnail = this.uploadedFile.ThumbURL;
          this.uploadingFile = false;
        });
      }else{
        this.appService.show_error_popup('only jpeg images are allowed');
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
    if(this.newAccount){
      this.managedProfile = true;
    }
    let managedUsers:Array<User> = _.cloneDeep(this.auth.getUser().managedUsers);
    for(let managedUser of managedUsers){
      if(managedUser.UserId == this.getUser().UserId){
        this.managedProfile = true;
      }
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

  colorPicked(event){
    $('#'+this.color_picker_modal_id).modal('hide');
  }

}
