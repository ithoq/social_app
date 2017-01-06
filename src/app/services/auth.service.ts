import { Injectable , OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AppService} from '../app.service';
import {Http, Response} from '@angular/Http';

@Injectable()
export class AuthService implements OnInit{
  private app_token = '';
  private session_token = '';
  private user:any ;
  private localStorage: any;
  constructor(private appService:AppService) {
    //this.localStorage = ls;
  }

  getUser() {
    return this.user;
  }

    get_app_token(){
      return localStorage.getItem('app_token');
    };
      set_app_token(token){
        localStorage.setItem('app_token',token);
        this.app_token = token;
      };

    get_session_token(){
      return localStorage.getItem('session_token');
    };
      set_session_token(token){
        localStorage.setItem('session_token',token);
        this.session_token = token;
      };

  authenticated(){
    return (this.get_session_token() != null);
  }

  attempt(){
    //return this.http.get(this.appService.api_end_point+'userSignin/ses09812098312/&email=test@yahoo.com&username=test&pass=test');

    return new Observable(observable=>{
      setTimeout(function(){observable.next({
        ver: "1.1",
        cmd: "userSignin",
        t: "1483643656",
        success: "true",
	      payload: {
          firstName:"",
          lastName:"",
          email:"test3@yahoo.com",
          userId:"usr6tFNst5ZjFj6EvAgcHc2",
          color:"",
          timelines:[]
        }
      })}, 1000);
    });
  }

  logout(){
    return new Observable(observable => {
      localStorage.removeItem('session_token');
      observable.next({success:"true"});
    });
  };

  ngOnInit(){
    //this.foo = this.attempt();
  }
}
