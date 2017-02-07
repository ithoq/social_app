import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {AuthService} from '../../services/auth.service';
import {MediumToLoginService} from '../../services/medium-to-login.service';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from "../../models/User";

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
      this.auth.attempt(form.value).subscribe(
          (data:Response) => {
              /*
               saving the authenticated user in the localStorage
               */
              let user = new User();
              let updatedUser = data.json().payload.User;
              for (var property in updatedUser) {
                  user[property] = updatedUser[property];
              }
              this.auth.setUser(JSON.stringify({profile:user,timelines:data.json().payload.Timelines}));
              if(this.auth.getUser().timelines != null){
                  this.router.navigate(['/log/'+this.auth.getUser().timelines[0].Id]);
              }
              else
                  this.router.navigate(['manage-profile']);
          },
          (e) => {
              this.errors = (e.json()['error_message'] != undefined)?e.json()['error_message']:'Something went wrong with the server or may be you internet connection is lost. please try a few moments later.';
          }
      );
  }

  ngOnInit() {
    //this.contact = this.route.snapshot.data['contact'];
  }
}
