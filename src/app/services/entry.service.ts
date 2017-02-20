import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AppService} from "../app.service";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {UploadedFile} from "../models/UploadedFile";

declare var $:any;
declare var window:any;

@Injectable()
export class EntryService {
    constructor(private http:Http,  private appService:AppService, private auth:AuthService) { }

    addEntry(entry, files={}){
        let querystr = "";
        for(let propertyName in entry) {
            querystr+= '&'+propertyName+'='+entry[propertyName];
        }
        return this.http.post(this.appService.api_end_point+'entryAdd/'+this.auth.get_session_token()+"/"+querystr, files);
    }
    updateEntry(entry_id, entry, files={}){
        let querystr = "";
        for(let propertyName in entry) {
            querystr+= '&'+propertyName+'='+entry[propertyName];
        }
        return this.http.post(this.appService.api_end_point+'entryUpdate/'+this.auth.get_session_token()+"/&EntryId="+entry_id+querystr, files);
    }

    uploadImages(files:any = {}, progress:any=null){
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
                    xhr.upload.addEventListener("progress", progress, false)
                    return xhr;
                },
            });
        });
    }
}
