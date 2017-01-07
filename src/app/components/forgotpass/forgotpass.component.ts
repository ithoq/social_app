import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {AuthService} from '../../services/auth.service';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {MediumToLoginService} from '../../services/medium-to-login.service';
import {MediumToPasswordResetPromptService} from '../../services/medium-to-password-reset-prompt.service';

@Component({
  selector: 'sa-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {
  private auth:AuthService;
  private appService: AppService;
  private http: Http;
  private router: Router;
  public errors:any;
  public user:any;
  constructor(
    private authenticator: AuthService, private rootService:AppService,
     private httpService: Http, appRouter: Router, private route: ActivatedRoute,
     private mediumToLogin:MediumToLoginService,
     private mediumToPasswordResetPromptService : MediumToPasswordResetPromptService
   ) {
      this.auth = authenticator;
      this.appService = rootService;
      this.http = httpService;
      this.router = appRouter;
      this.user = {
        email:'',
        password:''
      };
  };
  sendPasswordResetLink(form:NgForm){
    this.http.get('http://api-social.apptazer.com/api/userPassReset/ses09812098312/&email='+form.value.email).subscribe(
      (data:Response) => {
        this.mediumToPasswordResetPromptService.setAccessable(true);
        this.router.navigate(['pass-reset']);
      },
      (e) => {
        this.errors = e.json()['error-message'];
        console.log(e.json())
      }
    );
  };

  ngOnInit() {
    //this.contact = this.route.snapshot.data['contact'];
  };
}
