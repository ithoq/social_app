import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {Response, Http} from "@angular/http";
import {TimelineService} from "../../services/timeline.service";
import {EntryService} from "../../services/entry.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ProfileManagementService} from "../../services/profile-management.service";
import {AppService} from "../../app.service";
import {Post} from "../../models/Post";
import {User} from "../../models/User";

declare var $:any;

@Component({
    selector: 'sa-create-profile',
    templateUrl: './create-profile.component.html',
    styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
    public user:any = null;
    public selectedImage:any = null;
    public selectedThumbnail:any = '';
    public formBusy:boolean = false;
    public editMode:boolean = false;
    constructor(
        private userService:UsersService,
        private timelineService:TimelineService,
        private entrySerice:EntryService,
        private auth:AuthService,
        private router:Router,
        private profileManagementService:ProfileManagementService,
        private http:Http,
        public appService:AppService
    ) {
        let profileData = this.profileManagementService.getProfileData();
        if(profileData != null){
            this.user = profileData.user;
            this.user.Color = this.profileManagementService.getColor();
            this.selectedThumbnail = profileData.selectedThumbnail;
            this.selectedImage = profileData.selectedImage;
            this.user.DateBirthDay = profileData.DateBirthDay;
        }else{
            this.user = this.auth.getUser().profile;
        }
    }

    getTitle(){
        if(this.auth.getUser().timelines == null)
            return 'Create';
        return 'Edit';
    }

    getAction(){
        if(this.auth.getUser().timelines == null)
            return 'Add';
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
        this.formBusy = true;
        this.userService.updateSettings(inputData, image).subscribe((data:Response)=>{
            let updatedUser = data.json().payload.User;
            for (var property in updatedUser) {
                this.user[property] = updatedUser[property];
            }
            this.auth.setUser(JSON.stringify({profile:this.user,timelines:this.auth.getUser().timelines}));
            if(this.auth.getUser().timelines == null){
                this.timelineService.create({Name:'My Private Timeline'}).subscribe((data:Response)=>{

                    let user = this.auth.getUser();
                    user.timelines = [{Id:data.json().payload.TimelineId,Name:'My Private Timeline'}];
                    this.auth.setUser(JSON.stringify(user));

                    let entry = new Post();
                    entry.DateStart = inputData.DateBirthDay;
                    entry.Type = 'Celebration';
                    entry.Name = 'Birthday added';
                    entry['TimelineId'] = data.json().payload.TimelineId;
                    //adding the first entry
                    let querystr = "";
                    for(let propertyName in entry) {
                        querystr+= '&'+propertyName+'='+entry[propertyName];
                    }
                    this.http.get(this.appService.api_end_point+'entryAdd/'+this.auth.get_session_token()+"/"+querystr).subscribe((data:Response)=>{
                        this.formBusy = false;
                        this.exitEditMode();
                        this.router.navigate(['/log/'+this.auth.getUser().timelines[0].Id]);
                    });
                },(error) => {
                    this.formBusy = false;
                });
            }else{
                this.formBusy = false;
                this.exitEditMode();
            }

        },(error) => {
            this.formBusy = false;
            alert('some thing went wrong with the server please try again.');
        });
    }

    loggedInUsrCanEdit(user:User){
        return (this.auth.currentUser.UserId == user.UserId);
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
        let user = this.auth.currentUser;
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

    }

    ngAfterViewInit(){
        $('.datepicker').datepicker();
    }

}
