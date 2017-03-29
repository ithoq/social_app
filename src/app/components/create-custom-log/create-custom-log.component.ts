import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {AppService} from "../../app.service";
import {Timeline} from "../../models/Timeline";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {TimelineService} from "../../services/timeline.service";
import {Post} from "../../models/Post";
import {EntryService} from "../../services/entry.service";

declare var $:any;
declare var LZString:any;

@Component({
  selector: 'app-create-custom-log',
  templateUrl: './create-custom-log.component.html',
  styleUrls: ['./create-custom-log.component.css']
})

export class CreateCustomLogComponent implements OnInit {

  public timelines:any = [];
  public entries:Array<Timeline> = [];
  public settings:any = null;
  public modes = [];
  public types = [];
  public tags:any = [
    'angry', 'blah', 'brilliant','calm'
  ];

  public selectedModes:any = ['blah'];
  public seletedTimelines:any = [];
  public selectedTypes:any = [];
  public selectedTags:any = ['blah'];
  constructor(
      private auth:AuthService,
      public app:AppService,
      public route:ActivatedRoute,
      public location:Location,
      public router:Router,
      public timelineService:TimelineService,
      public entryService:EntryService
  ) {
    this.types = this.app.entryContentCategories;
    this.modes = this.app.entryContentModes;
  }

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

  passedThroughTimelinesFilter(settingsTimelines, entryTimelines){
    let passed:boolean = false;
    for(let t_id of settingsTimelines){
      if(this.app.property_in_array('Id', t_id, entryTimelines)){
        passed = true;
      }
    }
    return passed;
  }

  passedThroughTypesFilter(settingsTypes, entryTypes){
    let passed:boolean = false;
    let entryTypesArr:Array<any> = entryTypes.split(',');
    for(let t_id of settingsTypes){
      if(this.app.in_array(t_id, entryTypesArr)){
        passed = true;
      }
    }
    return passed;
  }
  passedThroughModesFilter(settingsModes, entryModes){
    let passed:boolean = false;
    let entryModesArr:Array<any> = entryModes.split(',');
    for(let t_id of settingsModes){
      if(this.app.in_array(t_id, entryModesArr)){
        passed = true;
      }
    }
    return passed;
  }

  passedThroughDatesFilter(fromDate:string, toDate:string, entry:Post):boolean{
    let from = (fromDate != '')? new Date(fromDate): new Date('01/01/1971');
    let entryFrom = new Date(entry.DateStart);
    if(toDate == '')
      return (entryFrom >= from);
    else{
      let to = new Date(toDate);
      return (entryFrom >= from && entryFrom <= to);
    }
  }

  filterThroughEntries(entries:Array<Post>, settings:any):Array<Post>{
    let filteredEntries:Array<Post> = [];
    for(let entry of entries){
      let filtrationTestPassed:boolean = false;
      if(
          ((settings.timelines.length > 0?this.passedThroughTimelinesFilter(settings.timelines, entry.Timelines):true))
          && this.passedThroughDatesFilter(settings.fromDate, settings.toDate, entry)
          && ((settings.types.length > 0?this.passedThroughTypesFilter(settings.types, entry.Type):true))
          && ((settings.modes.length > 0?this.passedThroughModesFilter(settings.modes, entry.Mode):true))
      ){
        filtrationTestPassed = true;
      }

      if(filtrationTestPassed){
        filteredEntries.push(entry);
      }
    }
    return filteredEntries; //TODO: apply filteres here.
  }

  getUniquePosts(entries:Array<Post>):Array<Post>{
    let uniquePosts:Array<Post> = [];
    for(let entry of entries){
      if(!this.app.property_in_array('EntryId',entry.EntryId, uniquePosts)){
        uniquePosts.push(entry);
      }
    }
    return uniquePosts;  //TODO: niquie these posts.
  }

  getFinalizedEntries():Array<Post>{
    let timelines:Array<Timeline> = this.timelineService.getAllTimelinesWithEntries();
    let entries:Array<Post> = [];
    for(let timeline of timelines){
      let filteredEntries:Array<Post> = this.filterThroughEntries(timeline.Entries, this.settings);
      for(let entry of filteredEntries){
        entries.push(entry);
      }
    }
    return this.entryService.sortEntriesByDate(this.getUniquePosts(entries));
  }

  createCustomTimeline(){
    let timeline:Timeline = new Timeline();
    timeline.CreatedByUser = this.auth.currentUser.FirstName+' '+this.auth.currentUser.LastName;
    timeline.CreatedByUserId = this.auth.currentUser.UserId;
    timeline.Name = 'Custom Log';
    timeline.Entries = this.getFinalizedEntries();
    return timeline;
  }

  viewCustomLog($event){
    let customTimeline:Timeline = this.createCustomTimeline();
    localStorage.setItem('custom_log',LZString.compress(JSON.stringify(customTimeline)));
    this.router.navigate(['/log/custom'])
  }

  createSettings(){
    let settings = {
      modes:this.selectedModes,
      tags:this.selectedTags,
      types:this.selectedTypes,
      timelines:this.seletedTimelines,
      fromDate:$('#from-date').val(),
      toDate:$('#to-date').val()
    };
    localStorage.setItem('custom_log_settings',JSON.stringify(settings));
  }
  ngOnInit() {
    this.createSettings();
    this.route.data
        .subscribe((data: { entries: Array<Timeline> }) => {
          this.entries = data.entries;
          this.timelines = this.auth.getUser().timelines;
          this.settings = JSON.parse(localStorage.getItem('custom_log_settings'));
          if(this.settings != null) {
            this.selectedModes = this.settings.modes;
            this.selectedTypes = this.settings.types;
            this.selectedTags = this.settings.tags;
            this.seletedTimelines = this.settings.timelines;
            $('#from-date').val(this.settings.fromDate);
            $('#to-date').val(this.settings.toDate);
          }
        }, (error)=>{});
    /*---------------------------------*/
  }

  ngAfterViewInit(){
    $('.datepicker').datepicker();
  }

  ngDoCheck() {
    this.createSettings();
  }

}
