import {Component, OnInit, Inject} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {EntryService} from "../../services/entry.service";
import {Response} from "@angular/http";
import {MapsAPILoader} from "angular2-google-maps/core";

declare var noUiSlider: any;
declare var wNumb: any;
declare var $: any;
declare var foooo:any;
declare var initMap;
declare var google;
@Component({
    selector: 'sa-add-entry',
    templateUrl: './add-entry.component.html',
    styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
    /* external libs */
    noUiSlider: any;
    wNumb: any;
    $:any;
    /*****************/

    /* map api */
    title: string = 'My first angular2-google-maps project';
    lat: number = 51.678418;
    lng: number = 7.809007;
    /* ----------------------- */

    tags = ['a'];

    public modes = [
        {value:'Angry',img:'emoji-angry.png'},
        {value:'Blah',img:'emoji-blah.png'},
        {value:'Brilliant',img:'emoji-brilliant.png'},
        {value:'Calm',img:'emoji-calm.png'},
        {value:'Confident',img:'emoji-confident.png'},
        {value:'Confused',img:'emoji-confused.png'},
        {value:'Cool',img:'emoji-cool.png'},
        {value:'Down',img:'emoji-down.png'},
        {value:'Embarrassed',img:'emoji-embarrassed.png'}
    ];
    public types = [
        {value:'Place',img:'icon-places-big.png', desc:'description'},
        {value:'Learning',img:'icon-learning-big.png', desc:'description'},
        {value:'Work',img:'icon-work-big.png', desc:'description'},
        {value:'Health',img:'icon-health-big.png', desc:'description'},
        {value:'Fitness',img:'icon-fitness-big.png', desc:'description'},
        {value:'Celebration',img:'icon-celebration-big.png', desc:'description'},
        {value:'Faves',img:'icon-faves-big.png', desc:'description'},
        {value:'Purpose',img:'icon-world-big.png', desc:'description'},
        {value:'People',img:'icon-images-big.png', desc:'description'},
        {value:'Bigs',img:'logo.png', desc:'description'},
        {value:'Other',img:'add.png', desc:'description'}
    ];
    public someRange;
    public timelines = [];
    public seletedTimelines = [];
    public selectedTypes = [];
    public selectedModes = [];
    public showDefinitions = false;
    public BestSelfRating:any;
    public CloseToOthers:any;
    constructor(private auth:AuthService, private entryService:EntryService,private _loader: MapsAPILoader) {
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
                this.lat = place.geometry.location.lat();
                this.lng = place.geometry.location.lng();
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

    create(form:NgForm){
        let data = form.value;
        if (data.Name == ''){
            alert('Post Title is required');
        }else if(this.seletedTimelines.length <=0){
            alert('please select atleast one timeline')
        }else if(this.selectedTypes.length <=0){
            alert('please select atleast one Type')
        }else if(data.DateStart <=0){
            alert('please select Start Date')
        }else{
            data.TimelineId = this.seletedTimelines.join(',');
            data.Mode = this.selectedModes.join(',');
            data.Type = this.selectedTypes[0];
            data.Tags = $('#what-tags-input').val();
            console.log(data);
            this.entryService.addEntry(data).subscribe(
                (data:Response)=>{
                    alert('Post Created Successfully!')
                },(error) => {
                    alert(error.json().error_message);
                }
            );
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

    ngAfterContentInit(){
        this.autocomplete();
    }

  ngOnInit() {
      var best_self_slider = document.getElementById('test_slider');
      noUiSlider.create(best_self_slider,{
          start   : [ 0 ],
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

    /*   ------    ------      ----- ----- -----*/

      var close_to_others_slider = document.getElementById('close_to_others_slider');
      noUiSlider.create(close_to_others_slider,{
          start   : [ 0 ],
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

    ngAfterViewInit() {
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
    }

    initMap(){
        var input = document.getElementById('pac-input');
        var autocomplete = new google.maps.places.Autocomplete(input);
    }

    onTagsChange(){

    }
    onTagsAdded(){

    }
    onTagRemoved(){

    }
}
