import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {AuthService} from '../../services/auth.service';
import {MediumToLoginService} from '../../services/medium-to-login.service';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'sa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private auth:AuthService;
  private appService: AppService;
  private http: Http;
  private router: Router;
  public errors:any;
  public title:any;
  constructor(
    private authenticator: AuthService, private rootService:AppService,
     private httpService: Http, appRouter: Router, private route: ActivatedRoute,
     private mediumToLogin:MediumToLoginService
   ) {
      this.auth = authenticator;
      this.appService = rootService;
      this.http = httpService;
      this.router = appRouter;
      this.title = this.mediumToLogin.getTitle();
  }

  attempt(form:NgForm){
    this.auth.grab_app_key().subscribe((app_key)=>{
      this.auth.set_app_token(app_key);
      this.http.get(this.appService.api_end_point+"getSession/&AppKey="+app_key).subscribe(
        (data:Response) => {
          let session_token = data.json().payload.SessionToken;
          this.auth.set_session_token(session_token);
          this.http.get(this.appService.api_end_point+'userSignin/'+session_token+'/&Email=&Username='+form.value.username+'&Pass='+form.value.password).subscribe(
            (data:Response) => {
              this.auth.setUser(data.json().payload);
              this.router.navigate(['home']);
            },
            (e) => {
              this.errors = (e.json()['error_message'] != undefined)?e.json()['error_message']:'Something went wrong with the server or may be you internet connection is lost. please try a few moments later.';
              console.log(e.json())
            }
          );
        }
      );
    });
  }

  ngOnInit() {
    //this.contact = this.route.snapshot.data['contact'];
  }
}
