import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AppService} from "../app.service";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {UploadedFile} from "../models/UploadedFile";

declare var $:any;
declare var window:any;

@Injectable()
export class UsersService {

    constructor(private http:Http, private appService:AppService, private auth:AuthService) { }

    register(user){
        return this.http.get(this.appService.api_end_point+'userRegister/'+this.auth.get_session_token()+'/&Email='+user.email+'&Pass='+user.password+'');
    }

    createManagedUser(user:any, managedById:any){
        let querystr = "";
        for(let propertyName in user) {
            querystr+= '&'+propertyName+'='+user[propertyName];
        }
        return this.http.get(this.appService.api_end_point+'userRegister/'+this.auth.get_session_token()+"/&ManagedById="+managedById+querystr);
    }
    
    updateSettings(managedProfile:boolean, userId:string, settings:any, image=null){
        let querystr = "";
        for(let propertyName in settings) {
            querystr+= '&'+propertyName+'='+settings[propertyName];
        }
        return this.http.post(this.appService.api_end_point+'userSettings/'+this.auth.get_session_token()+"/&"+((managedProfile)?"ManageUserId":'UserId')+"="+userId+''+querystr, image);
    }

    searchByKeyword(keyword = "")
    {
        return this.http.get(this.appService.api_end_point+'userSearch/'+this.auth.get_session_token()+"/&SearchFor="+keyword);
    }

    getUserTimelinesAndStuff(){
        return this.http.get(this.appService.api_end_point+'userSignin/'+this.auth.get_session_token());
    }

    findMangedUserById(userId:String)
    {
        if(userId == this.auth.getUser().profile.UserId) {
            return this.auth.getUser().profile;
        }

        for(var user of this.auth.getUser().managedUsers){
            if(user.UserId == userId){
                return user;
            }
        }
        return null;

    }

    uploadUserImage(files:any = {}, progress:any=null){
        return new Observable(observable=>{
            $.ajax({
                method: 'POST',
                url: 'http://api-social.apptazer.com/api/entryFileUpload/ses012617-02d0ceae14c66a181ef92dd099e3aadb',
                dataType: 'json',
                data:files,
                processData: false, // Don't process the files
                contentType: false, // Set content type to false
                success: (data)=>{
                    let Files:Array<UploadedFile> = [];
                    for (let file of data.payload.Files){
                        Files.push(this.appService.map(file, new UploadedFile()))
                    }
                    observable.next(Files);
                },
                error:(error)=>{
                    observable.next({data:error});
                },
                xhr: ()=>{
                    var xhr = new window.XMLHttpRequest();
                    xhr.upload.addEventListener("progress", progress, false);
                    return xhr;
                },
            });
        });
    }
}
