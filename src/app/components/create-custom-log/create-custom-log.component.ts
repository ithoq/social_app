import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-create-custom-log',
  templateUrl: './create-custom-log.component.html',
  styleUrls: ['./create-custom-log.component.css']
})
export class CreateCustomLogComponent implements OnInit {

  public timelines:any = [];
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
  public tags:any = [
    'angry', 'blah', 'brilliant','calm'
  ];



  public selectedModes:any = ['blah'];
  public seletedTimelines:any = [];
  public selectedTypes:any = [];
  public selectedTags:any = ['blah'];
  constructor(private auth:AuthService) { }

  isModeSelected(mode:any){
    if(this.selectedModes.indexOf(mode)>= 0){
      return true;
    }
    return false;
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
  isTagSelected(tag:any){
    var alreadyExists = false;
    for (let entry of this.selectedTags) {
      if(entry == tag){
        alreadyExists = true;
      }
    }
    return alreadyExists;
  }
  isTypeSelected(type:any){
    if(this.selectedTypes.indexOf(type)>= 0){
      return true;
    }
    return false;
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
  tagChanged(data:any){
    var parts = data.split(',');
    var alreadyExists = false;
    for (let entry of this.selectedTags) {
      if(entry == parts[1]){
        alreadyExists = true;
      }
    }

    if(parts[0] == 'false'){
      if(alreadyExists){
        var index = this.selectedTags.indexOf(parts[1]);
        if (index > -1) {
          this.selectedTags.splice(index, 1);
        }
      }
    }else{
      if(!alreadyExists){
        this.selectedTags.push(parts[1]);
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
  selectAllTypes(){
    this.selectedTypes = [];
    for(let i = 0 ; i < this.types.length; i++){
      this.selectedTypes.push(this.types[i].value);
    }
  }
  unselectAllTypes(){
    this.selectedTypes = [];
  }

  selectAllTags(){
    this.selectedTags = [];
    for(let i = 0 ; i < this.tags.length; i++){
      this.selectedTags.push(this.tags[i]);
    }
  }
  unselectAllTags(){
    this.selectedTags = [];
  }

  selectAllTimelines(){
    this.seletedTimelines = [];
    for(let i = 0 ; i < this.timelines.length; i++){
      this.seletedTimelines.push(this.timelines[i].Id);
    }
  }
  unselectAllTimelines(){
    this.seletedTimelines = [];
  }

  selectAllMoods(){
    this.selectedModes = [];
    for(let i = 0 ; i < this.modes.length; i++){
      this.selectedModes.push(this.modes[i].value);
    }
  }
  unselectAllMoods(){
    this.selectedModes = [];
  }

  ngOnInit() {
    this.timelines = this.auth.getUser().timelines;

    /* settings up pre selected data */
    let settings = JSON.parse(localStorage.getItem('custom_log_settings'));
    if(settings != null){
      this.selectedModes = settings.modes;
      this.selectedTypes = settings.types;
      this.selectedTags = settings.tags;
      this.seletedTimelines = settings.timelines;
    }
    /*---------------------------------*/
  }

  ngDoCheck() {
    let settings = {
      modes:this.selectedModes,
      tags:this.selectedTags,
      types:this.selectedTypes,
      timelines:this.seletedTimelines
    };
    localStorage.setItem('custom_log_settings',JSON.stringify(settings));
  }

}
