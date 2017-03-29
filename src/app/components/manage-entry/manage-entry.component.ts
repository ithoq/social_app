import {Component, OnInit, Inject, Output, ChangeDetectorRef, EventEmitter, Input, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {EntryService} from "../../services/entry.service";
import {Response} from "@angular/http";
import {MapsAPILoader} from "angular2-google-maps/core";
import {RightContentService} from "../../services/right-content.service";
import {MediumToManageEntryService} from "../../services/medium-to-manage-entry.service";
import {Router} from "@angular/router";
import {isUndefined} from "util";
import {Post} from "../../models/Post";
import {EntryCategory} from "../../models/EntryCategory";
import {AppService} from "../../app.service";
import * as _ from 'lodash';
import {TimelineService} from "../../services/timeline.service";
import {UploadedFile} from "../../models/UploadedFile";
import {User} from "../../models/User";
import {UserStuff} from "../../models/UserStuff";
import {EntryMode} from "../../models/EntryMode";
import {create} from "domain";

declare var noUiSlider: any;
declare var wNumb: any;
declare var $: any;
declare var foooo:any;
declare var initMap;
declare var google;
declare var window:any;
declare var XMLHttpRequest:any;
@Component({
    selector: 'sa-manage-entry',
    templateUrl: './manage-entry.component.html',
    styleUrls: ['./manage-entry.component.css']
})
export class ManageEntryComponent implements OnInit {
    // Events of the components
    @Output('EntryCreated') entrycreated = new EventEmitter();
    @Output('EntryUpdated') entryupdated = new EventEmitter();
    @ViewChild('f') manageEntryForm;

    /* external libs */
    noUiSlider: any;
    wNumb: any;
    $:any;
    /*****************/

    /* map api */
    showmap:any = false;
    title: string = 'My first angular2-google-maps project';
    lat: number = 45.523111;
    lng: number = -122.672970;
    /* ---- ---- ---- ---- ---- --- */

    whatTags = [];
    whoTags = [];
    youTags = [];

    public modes:Array<EntryMode> = [];
    @Input() seletedTimelines = [];
    public types:Array<EntryCategory> = [];
    public someRange;
    public timelines = [];
    public selectedTypes = [];
    public selectedModes = [];
    public showDefinitions = false;
    public BestSelfRating:any;
    public CloseToOthers:any;
    public location:any;
    public selectedFiles:any = [];
    public existingFiles:any = [];
    public uploadedFiles:Array<UploadedFile> = [];
    public uploadedFileIds:string = '';
    public selectedFilesSrc:any = [];
    public removedFileIds:string = '';
    public existingEntry:any = null;

    public postType:any = '';
    public postName:any='';
    public postDateStart:any='';
    public postDateEnd:any='';
    public postLocation:any='';
    public postAbout:any='';
    public postWhatelse:any='';
    public postBestSelf:any=0;
    public postCloseToOthers:any=0;

    public uploadingPost:any = false;
    public uploadingFiles:boolean = false;
    public managedUsers:Array<User> = [];
    public selectedManagedUserId:string;

    public bestSelfSlider:any;
    public closeToOthersSlider:any;
    constructor(
        private auth:AuthService,
        private entryService:EntryService,
        private _loader: MapsAPILoader,
        private rightContentService:RightContentService,
        private chRef: ChangeDetectorRef,
        private mediumToManageEntry:MediumToManageEntryService,
        private router:Router,
        public app:AppService,
        public timelineService:TimelineService
    ) {
        this.types = _.cloneDeep(this.app.entryContentCategories);
        this.modes = _.cloneDeep(this.app.entryContentModes);
        let userStuff:UserStuff = this.auth.getUser();
        this.timelines = userStuff.timelines;
        this.managedUsers = userStuff.managedUsers;
        this.selectedManagedUserId = this.auth.currentUser.UserId;
        this.noUiSlider = noUiSlider;
        this.wNumb = wNumb;
        this.$ = $;
    }
    autocomplete() {
        this._loader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(document.getElementById("autocompleteInput"), {});
            google.maps.event.addListener(autocomplete, 'place_changed', () => {
                let place = autocomplete.getPlace();
                this.location = place.formatted_address;
                this.lat = place.geometry.location.lat();
                this.lng = place.geometry.location.lng();
                this.chRef.detectChanges();
            });
        });
    }

    isTimelineSelected(timeline:any){
        var alreadyExists = false;
        for (let entry of this.seletedTimelines) {
            if(entry == timeline){
                alreadyExists = true;
            }
        }
        return alreadyExists;
    }

    setSelectedTimelines(timelines:any){
        this.seletedTimelines = timelines;
    }
    deletePost(){
        if(confirm('Are you sure you want to delete this post?')){
            this.entryService.updateEntry(this.existingEntry.EntryId, {Delete:true}).subscribe(
                (data:Response)=>{ //TODO: push these changes to local storage
                    this.timelineService.removeEntriesFromTimelines(
                        this.app.property_to_array('Id', this.auth.getUser().timelines), [this.existingEntry.EntryId]);
                    this.app.show_success_popup('Post Deleted Successfully!');
                    this.rightContentService.aside_in = false;
                    if(this.auth.getUser().timelines.length > 0)
                        this.router.navigate(['/log/'+this.auth.getUser().timelines[0].Id]);
                    else
                        this.router.navigate(['/create-profile']);
                },(error) => {
                    alert(error.json().error_message);
                }
            );
        }
    }

    removeImage(image_id){
        this.uploadedFiles = this.app.remove_obj_by_property('Id',image_id,this.uploadedFiles);
        this.uploadedFileIds = this.app.property_to_array('Id', this.uploadedFiles).join(',');
        this.existingFiles = this.app.remove_obj_by_property('Id', image_id, this.existingFiles);
        this.removedFileIds += image_id;
    }

    filesSelected(event){
        if(event.target.files.length > 10){
            this.app.show_error_popup('maximum 10 images are allowed in a post');
        }else{
            this.uploadingFiles = true;
            let files = new FormData();
            // operation starts here.....
            $.each(event.target.files, function(key, value){
                files.append('Image'+(key+1), value);
            });

            this.entryService.uploadImages(files, function (evt) {
                if (evt.lengthComputable) {
                    let percentComplete:any = (evt.loaded / evt.total)*100;
                }
            }).subscribe((files:Array<UploadedFile>)=>{
                this.uploadedFiles = this.app.array_unique_merge(this.uploadedFiles,files,'Id');
                this.uploadedFileIds = this.app.property_to_array('Id', this.uploadedFiles).join(',');
                this.uploadingFiles = false;
            });
        }
    }

    mapUpdatedEntryData(data){
        data = _.cloneDeep(data);
        let updatedPost = new Post();
        updatedPost.About = data.About;
        updatedPost.BestSelfRating = data.BestSelfRating;
        updatedPost.CloseToOthers = data.CloseToOthers;
        updatedPost.DateStart = data.DateStart;
        updatedPost.DateEnd = data.DateEnd;
        updatedPost.EntryId = data.EntryId;
        updatedPost.Files = data.Files;
        updatedPost.Lat = data.Lat;
        updatedPost.Lng = data.Lng;
        updatedPost.Location = data.Location;
        updatedPost.Mode = data.Mode;
        updatedPost.Name = data.Name;
        updatedPost.Tags = data.Tags.join(',');
        for(let timelineId of data.TimelineId.split(',')){
            let timelines:Array<any> = this.auth.getUser().timelines;
            for(let existingTimeline of timelines){
                if(existingTimeline.Id == timelineId){
                    updatedPost.Timelines.push(existingTimeline);
                }
            }
        }
        updatedPost.Type = data.Type;
        updatedPost.WhatElse = data.WhatElse;
        updatedPost.WhatTags = data.WhatTags;
        updatedPost.WhoTags = data.WhoTags;
        updatedPost.YouTags = data.YouTags;
        updatedPost.User = data.User;
        updatedPost.UserId = data.UserId;
        updatedPost.TempUserId = data.TempUserId;
        //TODO: Files are not being handeled yet.
        return updatedPost;
    }

    updateEntryInLocalStorage(updatedEntry:Post){
        this.timelineService.removeEntriesFromTimelines(this.app.property_to_array('Id',updatedEntry.Timelines),[updatedEntry.EntryId])
        for(let timeline of updatedEntry.Timelines){
            this.timelineService.pushEntryInTimeline(timeline.Id, updatedEntry);
        }
        return true;
    }
    submitForm(){
        this.create(this.manageEntryForm,null);
    }
    create(form:NgForm, event){
        if(this.uploadingPost) return false;
        if(this.uploadingFiles){
            this.app.show_error_popup('please wait until your files are being uploaded.');
            return false;
        }
        let data = form.value;
        console.log(data);
        if (data.Name == ''){
            this.app.show_error_popup('Post Title is required');
        }else if(this.seletedTimelines.length <= 0){
            this.app.show_error_popup('please select atleast one timeline')
        }else if(this.selectedTypes.length <= 0){
            this.app.show_error_popup('please select atleast one Type')
        }else if($('#new-post-start-date').val() == ''){
            this.app.show_error_popup('please select Start Date')
        }else{
            this.uploadingPost = true;
            data.TimelineId = this.seletedTimelines.join(',');
            data.Mode = this.selectedModes.join(',');
            data.Type = this.selectedTypes.join(',');
            data.WhatTags = $('#what-tags-input').val();
            data.WhoTags = $('#who-tags-input').val();
            data.YouTags = $('#you-tags-input').val();
            data.Location = (this.location == undefined)?this.postLocation:this.location;
            data.DateStart = $('#new-post-start-date').val();
            data.DateEnd = $('#new-post-end-date').val();
            data.Lat = this.lat;
            data.Lng = this.lng;
            data.AddFileIds = this.uploadedFileIds;
            data.TempUserId = data.UserId;
            data.UserId = (data.UserId == this.auth.currentUser.UserId || data.UserId == null)?'':data.UserId;

            let selectedManagedUser:User =(data.UserId == '')?this.auth.currentUser: this.app.find_obj_by_prop('UserId', data.UserId, this.managedUsers);

            //TODO: add functionality to create a post for a managed user.
            if(this.existingEntry != null){
                data.DeleteFileIds = this.removedFileIds;
                this.entryService.updateEntry(this.existingEntry.EntryId, data).subscribe(
                    (response:Response)=>{
                        let uploadedEntry:any = _.cloneDeep(data);
                        uploadedEntry.EntryId = this.existingEntry.EntryId;
                        uploadedEntry.User = selectedManagedUser.FirstName+' '+selectedManagedUser.LastName;
                        // uploadedEntry.UserId = this.auth.currentUser.UserId;
                        uploadedEntry.Files = this.app.array_unique_merge(this.existingFiles, this.uploadedFiles, 'Id');
                        let updatedEntry:Post = this.mapUpdatedEntryData(uploadedEntry);
                        this.updateEntryInLocalStorage(updatedEntry);
                        this.uploadingPost = false;
                        this.entryupdated.emit({data:updatedEntry});
                        this.app.show_success_popup('Post Updated Successfully!');
                        this.rightContentService.aside_in = false;
                        $('#add-entry-form-wizard').bootstrapWizard('show',0); //reset form
                    },(error) => {
                        alert(error.json().error_message);
                    }
                );
            }else{
                this.entryService.addEntry(data).subscribe(
                    (response:any)=>{
                        let uploadedEntry:any = _.cloneDeep(data);
                        uploadedEntry.EntryId = response.json().payload.EntryId;
                        uploadedEntry.User = selectedManagedUser.FirstName+' '+selectedManagedUser.LastName;
                        // uploadedEntry.UserId = this.auth.currentUser.UserId;
                        uploadedEntry.Files = this.uploadedFiles;
                        let updatedEntry:Post = this.mapUpdatedEntryData(uploadedEntry);
                        this.updateEntryInLocalStorage(updatedEntry);
                        this.uploadingPost = false;
                        this.entrycreated.emit({data:this.seletedTimelines});
                        this.app.show_success_popup('Post Created Successfully!');
                        this.rightContentService.aside_in = false;
                        $('#add-entry-form-wizard').bootstrapWizard('show',0); //reset form
                        this.resetForm(form); //reset form
                    },(error) => {
                        this.uploadingPost = false;
                        this.app.show_error_popup('some thing went wrong with the server. please try again.')
                    }
                );
            }
        }
    }
    resetForm(form:NgForm){
        form.resetForm();
        this.selectedTypes = [];
        this.selectedModes = [];
        this.selectedFiles = [];
        this.existingFiles = [];
        this.uploadedFiles = [];
        this.bestSelfSlider.set([0]);
        this.closeToOthersSlider.set([0]);
        this.youTags = [];
        this.whatTags = [];
        this.whoTags = [];
        $("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput('removeAll');
    }

    managedUserSelected(){
        this.timelines = this.timelineService.findTimelinesOfManagedUser(this.selectedManagedUserId);
        if(this.selectedManagedUserId != this.auth.currentUser.UserId)
            this.timelines = this.app.remove_obj_by_property('Name','My Private Timeline',this.timelines);
        if(this.timelines.length > 0){
            this.setSelectedTimelines(this.timelines[0].Id);
        }
    }
    modeChanged(data:any){
        var parts = data.split(',');
        var alreadyExists = false;
        for (let entry of this.selectedModes) {
            if(entry == parts[1]){
                alreadyExists = true;
            }
        }

        if(parts[0] == 'false'){
            if(alreadyExists){
                var index = this.selectedModes.indexOf(parts[1]);
                if (index > -1) {
                    this.selectedModes.splice(index, 1);
                }
            }
        }else{
            if(!alreadyExists){
                this.selectedModes.push(parts[1]);
            }
        }
    }
    typeChanged(data:any){
        var parts = data.split(',');
        var alreadyExists = false;
        for (let entry of this.selectedTypes) {
            if(entry == parts[1]){
                alreadyExists = true;
            }
        }

        if(parts[0] == 'false'){
            if(alreadyExists){
                var index = this.selectedTypes.indexOf(parts[1]);
                if (index > -1) {
                    this.selectedTypes.splice(index, 1);
                }
            }
        }else{
            if(!alreadyExists){
                this.selectedTypes.push(parts[1]);
            }
        }
    }

    timelinesChanged(data:any){
        var parts = data.split(',');
        var alreadyExists = false;
        for (let entry of this.seletedTimelines) {
            if(entry == parts[1]){
                alreadyExists = true;
            }
        }

        if(parts[0] == 'false'){
            if(alreadyExists){
                var index = this.seletedTimelines.indexOf(parts[1]);
                if (index > -1) {
                    this.seletedTimelines.splice(index, 1);
                }
            }
        }else{
            if(!alreadyExists){
                this.seletedTimelines.push(parts[1]);
            }
        }
    }

    setExistingPost(post:Post){
        this.existingEntry = post;
        if(this.existingEntry != null){
            if(this.existingEntry.BestSelfRating != '' && this.existingEntry.BestSelfRating != undefined){
                this.postBestSelf = parseInt(this.existingEntry.BestSelfRating);
            }
            if(this.existingEntry.CloseToOthers != '' && this.existingEntry.BestSelfRating != undefined){
                this.postCloseToOthers = parseInt(this.existingEntry.CloseToOthers);
            }

            this.selectedTypes = this.existingEntry.Type.split(',');
            this.postName = this.existingEntry.Name;
            this.postAbout = this.existingEntry.About;
            this.postDateEnd = this.existingEntry.DateEnd.split(' ')[0];
            this.postDateStart = this.existingEntry.DateStart.split(' ')[0];
            this.postLocation = (this.existingEntry.Location == "undefined")?"":this.existingEntry.Location;
            this.postWhatelse = this.existingEntry.WhatElse;
            this.lat = (this.existingEntry.Location == "undefined")?45.523111:this.existingEntry.Lat;
            this.lng = (this.existingEntry.Location == "undefined")?-122.672970:this.existingEntry.Lng;
            if(this.existingEntry.Timelines != undefined){
                for(let i = 0; i<this.existingEntry.Timelines.length; i++){
                    this.seletedTimelines.push(this.existingEntry.Timelines[i].Id);
                }
            }
            this.selectedManagedUserId = this.existingEntry.UserId;
            this.selectedModes = (this.existingEntry.Mode == '')?[]:this.existingEntry.Mode.split(',');
            this.whatTags = this.existingEntry.WhatTags.split(',');
            this.whoTags = this.existingEntry.WhoTags.split(',');
            this.youTags = this.existingEntry.YouTags.split(',');
            this.existingFiles = this.existingEntry.Files;
        }
    }

    create_ui_slider(target:any, start){
        return noUiSlider.create(target,{
            start   : [ start ],
            connect : 'lower',
            step    : 1,
            range   : {
                'min': [  0 ],
                'max': [ 100 ]
            },
            format: wNumb({
                decimals: 0,
                thousand: '.',

            })
        })
    }

  ngOnInit() {
        //setting up existing entry if on edit mode
      this.setExistingPost(this.mediumToManageEntry.getPost());
      //this.seletedTimelines = this.seletedTimelines.concat(this.mediumToManageEntry.getTempPostTimelines());
      /*---------------------------------------------------*/
      this.bestSelfSlider = this.create_ui_slider(document.getElementById('test_slider'),this.postBestSelf);
      this.closeToOthersSlider = this.create_ui_slider(document.getElementById('close_to_others_slider'), this.postCloseToOthers);
      this.bestSelfSlider.on('update', ( values, handle ) =>{
          this.BestSelfRating = values[handle];
      });
      this.closeToOthersSlider.on('update', ( values, handle ) =>{
          this.CloseToOthers = values[handle];
      });
  }

    isModeSelected(mode:any){
        if(this.selectedModes.indexOf(mode)>= 0){
            return true;
        }
        return false;
    }

    isTypeSelected(type:any){
        if(this.selectedTypes.indexOf(type)>= 0){
            return true;
        }
        return false;
    }

    changeTypeOrientation(){
        this.showDefinitions = !this.showDefinitions;
    }

    validateStep(step:number):boolean{
        if(step == 1){
            if(this.selectedTypes.length == 0){
                this.app.show_error_popup('Please select atleast 1 content type.');
                return false;
            }
            if(this.seletedTimelines.length == 0){
                this.app.show_error_popup('Please select atleast 1 timeline.');
                return false;
            }
        }else if(step == 2){
            if(this.postName == ''){
                this.app.show_error_popup('Please enter a title for the post.');
                return false;
            }
            if($("#new-post-start-date").val() == ''){
                this.app.show_error_popup('please select atleast start date');
                return false;
            }
        }
        return true;
    }
    ngAfterViewInit() {
        this.autocomplete();
        $("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput();
       let add_entry_form_wizard = '#add-entry-form-wizard';
        $(add_entry_form_wizard).bootstrapWizard({
            tabClass		: 'wz-steps',
            nextSelector	: '.next',
            previousSelector	: '.previous',
            onTabClick: function(tab, navigation, index) {
                return false;
            },
            onInit : function(){
                $(add_entry_form_wizard).find('.finish').hide().prop('disabled', true);
            },
            onNext:(tab, navigation, index)=>{
                return this.validateStep(index);
            },
            onTabShow: function(tab, navigation, index) {
                var $total = navigation.find('li').length;
                var $current = index+1;
                var $percent = (index/$total) * 100;
                var wdt = 100/$total;
                var lft = wdt*index;
                var margin = (100/$total)/2;
                $(add_entry_form_wizard).find('.progress-bar').css({width:$percent+'%', 'margin': 0 + 'px ' + margin + '%'});


                // If it's the last tab then hide the last button and show the finish instead
                if($current >= $total) {
                    $(add_entry_form_wizard).find('.next').hide();
                    $(add_entry_form_wizard).find('.finish').show();
                    $(add_entry_form_wizard).find('.finish').prop('disabled', false);
                } else {
                    $(add_entry_form_wizard).find('.next').show();
                    $(add_entry_form_wizard).find('.finish').hide().prop('disabled', true);
                }
            }
        });
        $('.datepicker').datepicker();
    }

    refreshMap(){
        this.showmap = false;
        setTimeout(() => {
            this.showmap = true;
        },500);
    }
    movedToNextSlide(){
        this.refreshMap();
    }
    movedToPrevSlide(){
        this.refreshMap();
    }

    initMap(){
        var input = document.getElementById('pac-input');
        var autocomplete = new google.maps.places.Autocomplete(input);
    }
}
