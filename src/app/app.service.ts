import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import {EntryCategory} from "./models/EntryCategory";
import {Timeline} from "./models/Timeline";
@Injectable()
export class AppService {

  api_end_point = 'http://api-social.apptazer.com/api/';
  domain = 'http://dev1-social.apptazer.com/';
  default_user_profile_pic = '';
  public entryContentCategories:Array<EntryCategory> = [];
  constructor() {
    this.default_user_profile_pic = this.domain+'/assets/img/profile-photos/profile-default.png';
    this.setDefaultEntryCategories();
  }

  private setDefaultEntryCategories(){
    this.entryContentCategories = [
      new EntryCategory('Place', 'icon-places-big.png', 'A place that is important to you, where you live or have lived, where you’ve gone, a place that matters a lot to you.'),
      new EntryCategory('Learning', 'icon-learning-big.png', 'Your school(s), for sure, but also a class that you’ve loved, a camp, a project, your subjects, a skill, a trade. Important teachers, inspiring ideas, and anything else that would go into a portfolio of your brain and your abilities can be included here!'),
      new EntryCategory('Health', 'icon-health-big.png', 'Anything that would go in your health file. Next time you need to remember when you had your last tetanus shot, you’ll have it right here! When did you break your arm or have your appendix removed? If you got a diagnosis or started a new medicine, add it. But also here’s a great place to note health solutions - what practices, tools, medicines, and life-changes you’ve tried so you can track them and see how they’ve worked for you over time.'),
      new EntryCategory('Fitness', 'icon-fitness-big.png', 'Your history of physical fitness. You can include a sport, a sporting event (a race, an award, a game), exercise - whatever has helped you stay active and fit. Also include orgs and people that are part of your fitness - a club, a coach, etc. Here’s also a great place to track any changes you’ve made that have (or not) helped you take care of your body as well as any other changes that have impacted your physical fitness.'),
      new EntryCategory('Celebration', 'icon-celebration-big.png', ''),
      new EntryCategory('Faves', 'icon-faves-big.png', ''),
      new EntryCategory('Purpose', 'icon-world-big.png', ''),
      new EntryCategory('People', 'icon-images-big.png', 'Your family, close friends, mentors, and other people (or pets!) who’ve been important to you.'),
      new EntryCategory('Bigs', 'logo.png', 'The “big” memories, experiences, decisions, and moments that, if you were to write your life story, need to be told.'),
      new EntryCategory('Other', 'icon-growth-big.png', ''),
    ];
  }
  //generate a random hashed string
  s4(){
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
  }
  unique_id(){
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
        this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }

  //TODO: replace all manual mapings in the project by this function.
  map(object:any, target:any){
    object = _.cloneDeep(object);
    target = _.cloneDeep(target);
    for (var property in object) {
      target[property] = object[property];
    }
    return target;
  }

  mapCollection(collection:Array<any>, target:any){
    let mapedCollection:Array<any> = [];
    for(var object of collection){
      mapedCollection.push(this.map(object, target))
    }
    return mapedCollection;
  }

  in_array(key:any , stack:Array<any>){
    stack = _.cloneDeep(stack);
    for(let stackItem of stack){
      if(stackItem == key)
        return true;
    }
    return false;
  }

  property_to_array(property:string, stack:Array<any>){
    stack = _.cloneDeep(stack);
    let arr:Array<any> = [];
    for(let stackItem of stack){
      arr.push(stackItem[property]);
    }
    return arr;
  }

  property_in_array(property:any, value:any, stack:Array<any>){
    stack = _.cloneDeep(stack);
    for(let stackItem of stack){
      if(stackItem[property] == value)
        return true;
    }
    return false;
  }

  find_obj_by_prop(property:any, value:any, stack:Array<any>){
    stack = _.cloneDeep(stack);
    for(let stackItem of stack){
      if(stackItem[property] == value)
        return stackItem;
    }
    return null;
  }

  find_objs_by_prop(property:any, value:any, stack:Array<any>){
    let found_objs:Array<any> = [];
    stack = _.cloneDeep(stack);
    for(let stackItem of stack){
      if(stackItem[property] == value)
        found_objs.push(stackItem);
    }
    return found_objs;
  }

  remove_obj_by_property(property:string, value:string, stack:Array<any>):any{
    stack = _.cloneDeep(stack);
    let updatedStack:Array<Timeline> = [];
    for(let stackItem of stack){
      if(stackItem[property] != value)
        updatedStack.push(stackItem);
    }
    return updatedStack;
  }

  array_unique_merge(array1, array2, unique_property){
    let merged = array1.concat(array2);
    //return merged;
    let unique_array = [];
    for(let obj of merged){
      unique_array = this.remove_obj_by_property(unique_property, obj[unique_property],unique_array);
      unique_array.push(obj);
    }
    return unique_array;
  }
}
