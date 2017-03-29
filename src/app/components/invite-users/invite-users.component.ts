import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ActivatedRouteSnapshot} from "@angular/router";
import {UsersService} from "../../services/users.service";
import {Response} from "@angular/http";
import {AppService} from "../../app.service";
import {AuthService} from "../../services/auth.service";
import {NgForm} from "@angular/forms";
import {TimelineService} from "../../services/timeline.service";

declare var $:any;
@Component({
  selector: 'app-invite-users',
  templateUrl: './invite-users.component.html',
  styleUrls: ['./invite-users.component.css']
})
export class InviteUsersComponent implements OnInit {

  public searchedUsers = [];
  public timeline:any = null;
  public email:any = '';
  public InviteMessage:string = '';
  public timelineId:string = '';
  constructor(private timelineService:TimelineService,
              private route:ActivatedRoute,
              private router:Router,
              private users:UsersService,
              private appService:AppService,
              private auth:AuthService
  ) { }
  public selectedUsers = [];

  invite(form:NgForm){
    let users = this.selectedUsers.join(',');
    let emails = form.value.email;
    if(users == '' && emails == ''){
      this.appService.show_error_popup('please select atleast one user or enter an email address.');
    }else{
      this.timelineService.inviteUsers(this.timeline.Id,users,emails,this.InviteMessage).subscribe((data:Response)=>{
        this.appService.show_success_popup('invitation sent successfully');
        this.router.navigate(['/manage-logs']);
      });
    }
  }
  previewEmail(){
    if(this.selectedUsers.length == 0 && this.email == ''){
      this.appService.show_error_popup('You have to choose an email or a user.');
    }else{
      localStorage.setItem('emails_userids_of_inviting_user', JSON.stringify({users:this.selectedUsers,emails:this.email}));
      this.router.navigate(['log/'+this.timelineId+'/invite-users/preview-email']);
    }
  }
  ngOnInit() {
    let invite_users_multi_select = $('.invite-users-multi-select');
    invite_users_multi_select.select2({
      ajax: {
        url: (params)=>{
          return this.appService.api_end_point+'userSearch/'+this.auth.get_session_token()+"/&SearchFor="+params.term;
        },
        dataType: 'json',
        delay: 250,
        data: function (params) {
          return {};
        },
        processResults: function (data, params) {
          params.page = params.page || 1;

          let users = [];
          $.each(data.payload.Users,function (index,user) {
            user.id = user.UserId;
            users.push(user);
          });
          return {
            //results: data.payload.Users,
            results: users,
            pagination: {
              more: (params.page * 30) < data.total_count
            }
          };
        },
        cache: true
      },
      escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
      minimumInputLength: 1,
      templateResult: function (repo) {
        return "<div class='select2-result-repository__title'>" + repo.Nickname+', '+repo.FirstName +' '+ repo.LastName+', '+repo.address+ "</div>";
      }, // omitted for brevity, see the source of this page
      templateSelection: function (repo) {
        return repo.FirstName +' '+ repo.LastName;
      } // omitted for brevity, see the source of this page
    });
    invite_users_multi_select.on("select2:select", (e) => {
      this.selectedUsers.push(e.params.data);
    });
    invite_users_multi_select.on("select2:unselect", (e) => {
      var index = this.selectedUsers.indexOf(e.params.data.UserId);
      if (index > -1) {
        this.selectedUsers.splice(index, 1);
      }
    });

    this.route.data
        .subscribe((data: { log: any }) => {
          if(data.log == null){this.router.navigate(['/manage-logs']); }
          this.timeline = data.log;
        }, (error)=>{});
    this.route.params
        .map(params => params['id'])
        .subscribe((timelineId) => {
          this.timelineId = timelineId;
        });
  }

}
