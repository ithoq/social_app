import {Component, OnInit, Inject, Output, ChangeDetectorRef, EventEmitter, Input} from '@angular/core';
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

    public modes = [
        {value:'angry',img:'emoji-angry.png'},
        {value:'blah',img:'emoji-blah.png'},
        {value:'brilliant',img:'emoji-brilliant.png'},
        {value:'calm',img:'emoji-calm.png'},
        {value:'confident',img:'emoji-confident.png'},
        {value:'confused',img:'emoji-confused.png'},
        {value:'cool',img:'emoji-cool.png'},
        {value:'down',img:'emoji-down.png'},
        {value:'embarrassed',img:'emoji-embarrassed.png'}
    ];

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
        this.timelines = this.auth.getUser().timelines;
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
        this.entryService.updateEntry(this.existingEntry.EntryId, {Delete:true}).subscribe(
            (data:Response)=>{ //TODO: push these changes to local storage
                this.timelineService.removeEntriesFromTimelines(
                    this.app.property_to_array('Id', this.auth.getUser().timelines), [this.existingEntry.EntryId]);
                alert('Post Deleted Successfully!');
                this.rightContentService.aside_in = false;
                if(this.auth.getUser().timelines.length > 0)
                    this.router.navigate(['/log/'+this.auth.getUser().timelines[0].Id]);
                else
                    this.router.navigate(['/create-profile']);
            },(error) => {
                console.log(error.json().error_message);
            }
        );
    }

    removeImage(image_id){
        this.uploadedFiles = this.app.remove_obj_by_property('Id',image_id,this.uploadedFiles);
        this.uploadedFileIds = this.app.property_to_array('Id', this.uploadedFiles).join(',');
        this.existingFiles = this.app.remove_obj_by_property('Id', image_id, this.existingFiles);
        this.removedFileIds += image_id;
    }

    filesSelected(event){
        this.uploadingFiles = true;
        let files = new FormData();
        // operation starts here.....
        $.each(event.target.files, function(key, value){
            files.append('Image'+(key+1), value);
        });

        this.entryService.uploadImages(files, function (evt) {
            if (evt.lengthComputable) {
                let percentComplete:any = (evt.loaded / evt.total)*100;
                console.log(percentComplete);
            }
        }).subscribe((files:Array<UploadedFile>)=>{
            this.uploadedFiles = files;
            this.uploadedFileIds = this.app.property_to_array('Id', files).join(',');
            //this.selectedFiles = this.app.array_unique_merge(this.existingFiles, this.uploadedFiles, 'Id');
            this.uploadingFiles = false;
        });
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
    create(form:NgForm, event){
        if(this.uploadingPost) return false;
        if(this.uploadingFiles){
            alert('please wait until your files are being uploaded.');
            return false;
        }
        let data = form.value;
        console.log(data);
        if (data.Name == ''){
            alert('Post Title is required');
        }else if(this.seletedTimelines.length <= 0){
            alert('please select atleast one timeline')
        }else if(this.selectedTypes.length <= 0){
            alert('please select atleast one Type')
        }else if($('#new-post-start-date').val() == ''){
            alert('please select Start Date')
        }else{
            this.uploadingPost = true;
            data.TimelineId = this.seletedTimelines.join(',');
            data.Mode = this.selectedModes.join(',');
            data.Type = this.selectedTypes.join(',');
            data.WhatTags = $('#what-tags-input').val();
            data.WhoTags = $('#who-tags-input').val();
            data.YouTags = $('#you-tags-input').val();
            data.Location = this.location;
            data.DateStart = $('#new-post-start-date').val();
            data.DateEnd = $('#new-post-end-date').val();
            data.Lat = this.lat;
            data.Lng = this.lng;
            data.AddFileIds = this.uploadedFileIds;
            //TODO: add functionality to create a post for a managed user.

            if(this.existingEntry != null){
                data.DeleteFileIds = this.removedFileIds;
                this.entryService.updateEntry(this.existingEntry.EntryId, data).subscribe(
                    (response:Response)=>{
                        let uploadedEntry:any = _.cloneDeep(data);
                        uploadedEntry.EntryId = this.existingEntry.EntryId;
                        uploadedEntry.User = this.auth.currentUser.FirstName+' '+this.auth.currentUser.LastName;
                        uploadedEntry.UserId = this.auth.currentUser.UserId;
                        uploadedEntry.Files = this.app.array_unique_merge(this.existingFiles, this.uploadedFiles, 'Id');
                        let updatedEntry:Post = this.mapUpdatedEntryData(uploadedEntry);
                        this.updateEntryInLocalStorage(updatedEntry);
                        this.uploadingPost = false;
                        this.entryupdated.emit({data:updatedEntry});
                        alert('Post Updated Successfully!');
                        this.rightContentService.aside_in = false;
                    },(error) => {
                        alert(error.json().error_message);
                    }
                );
            }else{
                this.entryService.addEntry(data).subscribe(
                    (response:any)=>{
                        let uploadedEntry:any = _.cloneDeep(data);
                        uploadedEntry.EntryId = response.json().payload.EntryId;
                        uploadedEntry.User = this.auth.currentUser.FirstName+' '+this.auth.currentUser.LastName;
                        uploadedEntry.UserId = this.auth.currentUser.UserId;
                        uploadedEntry.Files = this.uploadedFiles;
                        let updatedEntry:Post = this.mapUpdatedEntryData(uploadedEntry);
                        this.updateEntryInLocalStorage(updatedEntry);
                        this.uploadingPost = false;
                        this.entrycreated.emit({data:this.seletedTimelines});
                        alert('Post Created Successfully!');
                        this.rightContentService.aside_in = false;
                    },(error) => {
                        this.uploadingPost = false;
                        alert('some thing went wrong with the server. please try again.')
                    }
                );
            }
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
            this.postDateEnd = this.existingEntry.DateEnd;
            this.postDateStart = this.existingEntry.DateStart;
            this.postLocation = this.existingEntry.Location;
            this.postWhatelse = this.existingEntry.WhatElse;
            this.lat = this.existingEntry.Lat;
            this.lng = this.existingEntry.Lng;
            if(this.existingEntry.Timelines != undefined){
                for(let i = 0; i<this.existingEntry.Timelines.length; i++){
                    this.seletedTimelines.push(this.existingEntry.Timelines[i].Id);
                }
            }
            this.selectedModes = this.existingEntry.Mode.split(',');
            this.whatTags = this.existingEntry.WhatTags.split(',');
            this.whoTags = this.existingEntry.WhoTags.split(',');
            this.youTags = this.existingEntry.YouTags.split(',');
            this.existingFiles = this.existingEntry.Files;
        }
    }
  ngOnInit() {
        //setting up existing entry if on edit mode
      this.setExistingPost(this.mediumToManageEntry.getPost());
      //this.seletedTimelines = this.seletedTimelines.concat(this.mediumToManageEntry.getTempPostTimelines());
      /*---------------------------------------------------*/

      var best_self_slider = document.getElementById('test_slider');
      noUiSlider.create(best_self_slider,{
          start   : [ this.postBestSelf ],
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
      }).on('update', ( values, handle ) =>{
          this.BestSelfRating = values[handle];
      });

    /*------ ------ ----- ----- -----*/
      var close_to_others_slider = document.getElementById('close_to_others_slider');
      noUiSlider.create(close_to_others_slider,{
          start   : [ this.postCloseToOthers ],
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
      }).on('update', ( values, handle ) =>{
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
                alert('Please select atleast 1 content type.');
                return false;
            }
            if(this.seletedTimelines.length == 0){
                alert('Please select atleast 1 timeline.');
                return false;
            }
        }else if(step == 2){
            if(this.postName == ''){
                alert('Please enter a title for the post.');
                return false;
            }
            if($("#new-post-start-date").val() == ''){
                alert('please select atleast start date');
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

    movedToNextSlide(){
        setTimeout(() => {
            this.showmap = true;
        },500);
    }

    initMap(){
        var input = document.getElementById('pac-input');
        var autocomplete = new google.maps.places.Autocomplete(input);
    }
}
