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
      new EntryCategory('Place', 'icon-places-big.png', 'Lorem ipsum dolor sit amet'),
      new EntryCategory('Learning', 'icon-learning-big.png', 'Lorem ipsum dolor sit amet'),
      new EntryCategory('Health', 'icon-health-big.png', 'Lorem ipsum dolor sit amet'),
      new EntryCategory('Fitness', 'icon-fitness-big.png', 'Lorem ipsum dolor sit amet'),
      new EntryCategory('Celebration', 'icon-celebration-big.png', 'Lorem ipsum dolor sit amet'),
      new EntryCategory('Faves', 'icon-faves-big.png', 'Lorem ipsum dolor sit amet'),
      new EntryCategory('Purpose', 'icon-world-big.png', 'Lorem ipsum dolor sit amet'),
      new EntryCategory('People', 'icon-images-big.png', 'Lorem ipsum dolor sit amet'),
      new EntryCategory('Bigs', 'logo.png', 'Lorem ipsum dolor sit amet'),
      new EntryCategory('Other', 'icon-growth-big.png', 'Lorem ipsum dolor sit amet'),
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
      unique_array = this.remove_obj_by_property(unique_property, obj[unique_property],unique_array)
      unique_array.push(obj);
    }
    return unique_array;
  }
}
