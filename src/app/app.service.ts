import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  api_end_point = 'http://api-social.apptazer.com/api/';
  domain = 'http://dev1-social.apptazer.com/';
  default_user_profile_pic = '';
  constructor() {
    this.default_user_profile_pic = this.domain+'/assets/img/profile-photos/profile-default.png';
  }

}
