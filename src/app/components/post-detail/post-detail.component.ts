import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {MediumToManageEntryService} from "../../services/medium-to-manage-entry.service";
import {ManageEntryComponent} from "../manage-entry/manage-entry.component";
import {AddContentBtnComponent} from "../add-content-btn/add-content-btn.component";
import {HeaderComponent} from "../header/header.component";

declare var $:any;
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
    @ViewChild(AddContentBtnComponent) addContentBtnComponent;
    @ViewChild(HeaderComponent) headerComponent;
  public post:any;
  public user:any;
  public bestSelfRating:any = 0;
  constructor(
      private route:ActivatedRoute,
      private router:Router,
      private auth:AuthService,
      private mediumToManageEntry:MediumToManageEntryService
  ) {
    this.user = this.auth.getUser().profile;
  }
    updatePost(event){
      console.log(event);
        let post = this.post;
        for (var property in event.data) {
            post[property] = event.data[property];
        }
        localStorage.setItem('post',JSON.stringify(post));
        this.post = post;
    }

    ngOnInit() {
        this.route.data
            .subscribe((data: { post: any }) => {
                if(data.post == null){
                    this.router.navigate(['/log/custom']);
                }else{
                    this.post = data.post;
                    let title = this.post.DateStart.split(' ')[0]+
                        ' ' +this.post.DateEnd.split(' ')[0];
                    this.headerComponent.title = title;
                    if(this.auth.currentUser.UserId == this.post.UserId){
                        this.addContentBtnComponent.content = 'Edit Post';
                        this.mediumToManageEntry.setPost(data.post);
                    }
                }
            }, (error)=>{});
    }

    ngAfterViewInit(){
        //$(document).trigger('ready');
    }

}
