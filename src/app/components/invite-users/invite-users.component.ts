import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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
  constructor(private timelineService:TimelineService ,private route:ActivatedRoute, private router:Router, private users:UsersService, private appService:AppService, private auth:AuthService) { }
  public selectedUsers = [];

  invite(form:NgForm){
    let users = this.selectedUsers.join(',');
    let emails = form.value.email;
    this.timelineService.inviteUsers(this.timeline.Id,users,emails).subscribe((data:Response)=>{
      alert('invitation sent successfully');
      this.router.navigate(['/manage-logs']);
    });
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
        return "<div class='select2-result-repository__title'>" + repo.FirstName +' '+ repo.LastName+ "</div>";
      }, // omitted for brevity, see the source of this page
      templateSelection: function (repo) {
        return repo.FirstName +' '+ repo.LastName;
      } // omitted for brevity, see the source of this page
    });
    invite_users_multi_select.on("select2:select", (e) => {
      this.selectedUsers.push(e.params.data.UserId);
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
          this.timeline = data.log.json().payload;
        }, (error)=>{});
  }

}
