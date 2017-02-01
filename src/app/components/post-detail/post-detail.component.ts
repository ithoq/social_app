import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {MediumToManageEntryService} from "../../services/medium-to-manage-entry.service";
import {ManageEntryComponent} from "../manage-entry/manage-entry.component";
import {AddContentBtnComponent} from "../add-content-btn/add-content-btn.component";

declare var $:any;
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
    @ViewChild(AddContentBtnComponent) addContentBtnComponent;
  public post:any;
  public user:any;
  public bestSelfRating:any = 95;
  constructor(private route:ActivatedRoute, private router:Router, private auth:AuthService, private mediumToManageEntry:MediumToManageEntryService) {
    this.user = this.auth.getUser().profile;
  }

  ngOnInit() {
      this.addContentBtnComponent.content = 'Edit Post';
    this.route.data
        .subscribe((data: { post: any }) => {
          if(data.post == null){
              this.router.navigate(['/log/custom']);
          }else{
              this.post = data.post;
              console.log(this.post);
              this.mediumToManageEntry.setPost(data.post);
          }
        }, (error)=>{});
  }
    ngAfterViewInit(){
        //$(document).trigger('ready');
    }

}
