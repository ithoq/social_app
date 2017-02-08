import {Component, OnInit, Inject, Output, ChangeDetectorRef, EventEmitter} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {EntryService} from "../../services/entry.service";
import {Response} from "@angular/http";
import {MapsAPILoader} from "angular2-google-maps/core";
import {RightContentService} from "../../services/right-content.service";
import {MediumToManageEntryService} from "../../services/medium-to-manage-entry.service";
import {Router} from "@angular/router";
import {isUndefined} from "util";

declare var noUiSlider: any;
declare var wNumb: any;
declare var $: any;
declare var foooo:any;
declare var initMap;
declare var google;
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

    public types = [
        {value:'Place',img:'icon-places-big.png', desc:'Lorem ipsum dolor sit amet, maiorum ponderum consulatu ut has. Id phaedrum similique appellantur mel, ad dolorem accusamus eum, vim te graeco eruditi. Cu posse ornatus duo, qui quidam oportere ad. Agam sanctus eum id. Iisque complectitur est cu.'},
        {value:'Learning',img:'icon-learning-big.png', desc:'Prompta habemus cu mel, pri an feugait laboramus consequuntur. At eum fugit lobortis scripserit. Graeco eligendi ne est, munere deseruisse mea te, ea eros phaedrum torquatos est. In vim mazim mentitum. Mei putent maiorum in, atomorum intellegebat mea an. Te ius homero nostro, ei mea nostro feugiat conceptam, ex vis euismod alienum expetendis.'},
        {value:'Work',img:'icon-work-big.png', desc:'Luptatum platonem instr vivendo inciderint ad pro. Nobis feugait fierent cu pri. Ex eos vidisse scriptorem. Id ridens insolens moderatius has. Delicata dissentiet philosophia vis at, nec movet omnes prodesset ei.'},
        {value:'Health',img:'icon-health-big.png', desc:'Conceptam abhorreant quas ipsum decore pro no. Te usu mandamus conceptam voluptatum, vim ei erat delenit volutpat. Ei per tollit dicant, per wisi mandamus salutatus ex. At persius delectus perpetua vel.'},
        {value:'Fitness',img:'icon-fitness-big.png', desc:'Conceptam abhorreant pro no. Te usu mandamus conceptam voluptatum, vim ei erat delenit volutpat. Ei per tollit dicant, per wisi mandamus salutatus ex. At persius delectus perpetua vel.'},
        {value:'Celebration',img:'icon-celebration-big.png', desc:'Tantas lucilius facete eirmod. Ad epicurei antiopam vim. Cibo errem dissentiet ius ea, ad sed ignota insolens.'},
        {value:'Faves',img:'icon-faves-big.png', desc:'Luptatum platonem instructior id  ad pro. Nobis feugait fierent cu pri. Ex eos vidisse scriptorem. Id ridens insolens moderatius has. Delicata dissentiet philosophia vis at, nec movet omnes prodesset ei.'},
        {value:'Purpose',img:'icon-world-big.png', desc:'Tantas lucilius no vis, cu aliquid nominavi eloquentiam duo. Clita timeam duo an. Te eam postea facete eirmod. Ad epicurei antiopam vim. Cibo errem dissentiet ius ea, ad sed ignota insolens.'},
        {value:'People',img:'icon-images-big.png', desc:'Conceptam abhorreant est cu, possit reprehendunt sit at. Ius augue legimus in, sit cibo essent et, quas ipsum decore pro no. Te usu mandamus conceptam voluptatum, vim ei erat delenit volutpat. Ei per tollit dicant, per wisi mandamus salutatus ex. At persius delectus perpetua vel.'},
        {value:'Bigs',img:'logo.png', desc:'Tantas lucilius no vis, cu aliquid nominavi eloquentiam duo. Clita timeam duo an. Te eam postea facete eirmod. Ad epicurei antiopam vim. Cibo errem dissentiet ius ea, ad sed ignota insolens.'},
        {value:'Other',img:'icon-growth-big.png', desc:'Luptatum platonem instructior id nec, ea eam sale comprehensam, sit suas dicat eu. Ei mel sapientem constituto, cetero vivendo inciderint ad pro. Nobis feugait fierent cu pri. Ex eos vidisse scriptorem. Id ridens insolens moderatius has. Delicata dissentiet philosophia vis at, nec movet omnes prodesset ei.'}
    ];
    public someRange;
    public timelines = [];
    public seletedTimelines = [];
    public selectedTypes = [];
    public selectedModes = [];
    public showDefinitions = false;
    public BestSelfRating:any;
    public CloseToOthers:any;
    public location:any;
    public selectedFiles:any = [];
    public selectedFilesSrc:any = [];

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
    constructor(
        private auth:AuthService,
        private entryService:EntryService,
        private _loader: MapsAPILoader,
        private rightContentService:RightContentService,
        private chRef: ChangeDetectorRef,
        private mediumToManageEntry:MediumToManageEntryService,
        private router:Router
    ) {
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
            (data:Response)=>{
                alert('Post Deleted Successfully!');
                this.rightContentService.aside_in = false;
                if(this.auth.getUser().timelines.length > 0)
                    this.router.navigate(['/log/'+this.auth.getUser().timelines[0].Id]);
                else
                    this.router.navigate(['/manage-profile']);
            },(error) => {
                alert(error.json().error_message);
            }
        );
    }

    removeImage(index){
        let tempFiles = [];
        for(let i = 0; i< this.selectedFiles.length; i++){
            if(index != i){
                tempFiles.push(this.selectedFiles[i]);
            }
        }
        this.selectedFiles = tempFiles;
        this.selectedFilesSrc.splice(index, 1);
    }

    filesSelected(event){
        this.selectedFiles = event.target.files;
        var length = this.selectedFiles.length;
        this.selectedFilesSrc = [];
        let tempSrc = [];
        for(let i = 0; i< length; i++){
            let reader = new FileReader();
            reader.onload = function (e:any) {
               tempSrc.push(e.target.result);
            };
            reader.readAsDataURL(this.selectedFiles[i]);
        }
        this.selectedFilesSrc = tempSrc;
    }

    create(form:NgForm, event){
        if(this.uploadingPost == true) return false;
        let data = form.value;
        if (data.Name == ''){
            alert('Post Title is required');
        }else if(this.seletedTimelines.length <=0){
            alert('please select atleast one timeline')
        }else if(this.selectedTypes.length <=0){
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
            let files = new FormData();
            $.each(this.selectedFiles, function(key, value){
                files.append('Image'+(key+1), value);
            });
            if(this.existingEntry != null){
                this.entryService.updateEntry(this.existingEntry.EntryId, data, files).subscribe(
                    (response:Response)=>{
                        this.uploadingPost = false;
                        this.entryupdated.emit({data:data});
                        alert('Post Updated Successfully!');
                        this.rightContentService.aside_in = false;
                    },(error) => {
                        alert(error.json().error_message);
                    }
                );
            }else{
                this.entryService.addEntry(data,files).subscribe(
                    (data:any)=>{
                        this.uploadingPost = false;
                        this.entrycreated.emit({data:this.seletedTimelines});
                        alert('Post Created Successfully!');
                        this.rightContentService.aside_in = false;

                    },(error) => {
                        this.uploadingPost = false;
                        //alert(error.json().error_message);
                    }
                );
            }
        }

    }
    modeChanged(data:any){
        var parts = data.split(',');
        var alreadyExists = false;``
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

    setExistingPost(post:any){
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
            if(this.existingEntry.Timelines != undefined){
                for(let i = 0; i<this.existingEntry.Timelines.length; i++){
                    this.seletedTimelines.push(this.existingEntry.Timelines[i].Id);
                }
            }
            this.selectedModes = this.existingEntry.Mode.split(',');
            this.whatTags = this.existingEntry.WhatTags.split(',');
            this.whoTags = this.existingEntry.WhoTags.split(',');
            this.youTags = this.existingEntry.YouTags.split(',');
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
