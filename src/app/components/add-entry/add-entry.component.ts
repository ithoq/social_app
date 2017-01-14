import {Component, OnInit, Inject} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {EntryService} from "../../services/entry.service";
import {Response} from "@angular/http";

declare var noUiSlider: any;
declare var wNumb: any;

@Component({
    selector: 'sa-add-entry',
    templateUrl: './add-entry.component.html',
    styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  noUiSlider: any;
  wNumb: any;

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
    constructor(private auth:AuthService, private entryService:EntryService) {
        this.timelines = this.auth.getUser().timelines;
        this.seletedTimelines.push(this.timelines[0].Id);

        this.noUiSlider = noUiSlider;
        this.wNumb = wNumb;
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

        //validation form
        if (data.Name == ''){
            alert('Post Title is required');
        }else if(this.seletedTimelines.length <=0){
            alert('please select atleast one timeline')
        }else if(this.selectedTypes.length <=0){
            alert('please select atleast one Type')
        }else if(data.DateStart <=0){
            alert('please select Start Date')
        }else{
            console.log(this.seletedTimelines.join(','));
            data.TimelineId = this.seletedTimelines.join(',');
            data.Mode = this.selectedModes.join(',');
            data.Type = this.selectedTypes[0];
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
        console.log(this.selectedModes);
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
        console.log(this.selectedTypes);
    }

    foo(data:any){
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

  ngOnInit() {
    var rs_step = document.getElementById('test_slider');

    noUiSlider.create(rs_step,{
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
    }).on('update', function( values, handle ) {
      console.log(values[handle]);
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
        document.getElementById('location')
    }

}