import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AppService} from "../../app.service";
import {TimelineService} from "../../services/timeline.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-email-preview',
  templateUrl: './email-preview.component.html',
  styleUrls: ['./email-preview.component.css']
})
export class EmailPreviewComponent implements OnInit {

  public userStuff:any = null;
  public timelineId:any = null;
  public sending:boolean = false;
  constructor(
      private router:Router,
      private appService:AppService,
      private timelineService:TimelineService,
      private route:ActivatedRoute
  ) { }

  sendInvite(form:NgForm){
    this.sending = true;
    let users = this.userStuff.users[0].UserId;
    let emails = this.userStuff.emails;
    this.timelineService.inviteUsers(this.timelineId,users,emails,form.value.InviteMessage).subscribe((data:Response)=>{
      this.appService.show_success_popup('invitation sent successfully');
      this.sending = false;
      this.router.navigate(['/manage-logs']);
    }, (error)=>{
      this.appService.show_error_popup('Something went wrong with the server. please try again.');
      this.sending = false;
    });
  }
  ngOnInit() {
    this.userStuff = JSON.parse(localStorage.getItem('emails_userids_of_inviting_user'));
    if (this.userStuff == null || (this.userStuff.users.length == 0 && this.userStuff.emails == '')){
      this.router.navigate(['/manage-logs'])
    }else{
      this.route.params
          .map(params => params['id'])
          .subscribe((timelineId) => {
            this.timelineId = timelineId;
          });
    }
  }

}
