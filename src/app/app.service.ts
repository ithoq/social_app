import { Injectable } from '@angular/core';
import * as _ from 'lodash';
@Injectable()
export class AppService {

  api_end_point = 'http://api-social.apptazer.com/api/';
  domain = 'http://dev1-social.apptazer.com/';
  default_user_profile_pic = '';
  constructor() {
    this.default_user_profile_pic = this.domain+'/assets/img/profile-photos/profile-default.png';
  }

  //generate a random hashed string
  s4() {
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
}
