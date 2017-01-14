import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {AuthService} from '../../services/auth.service';
import { Http, Response } from '@angular/http';
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {MediumToPasswordResetPromptService} from '../../services/medium-to-password-reset-prompt.service';

@Component({
  selector: 'sa-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {
  public errors:any;
  constructor(
    private auth: AuthService, private appService:AppService,
     private http: Http, private router: Router, private route: ActivatedRoute,
     private mediumToPasswordResetPromptService : MediumToPasswordResetPromptService
   ) { };
  sendPasswordResetLink(form:NgForm){
      this.http.get(this.appService.api_end_point+'userPassReset/'+this.auth.get_session_token()+'/&Email='+form.value.email).subscribe(
          (data:Response) => {
              /*
               giving the permissions to user so that
               he can access password reset prompt message
               */
              this.mediumToPasswordResetPromptService.setAccessable(true);
              this.mediumToPasswordResetPromptService.setEmail(form.value.email);
              this.router.navigate(['pass-reset']);
          },
          (e) => {
              this.errors = e.json()['error_message'];
              console.log(e.json())
          }
      );
  };

  ngOnInit() {};
}
