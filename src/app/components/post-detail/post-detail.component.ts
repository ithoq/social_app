import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {MediumToManageEntryService} from "../../services/medium-to-manage-entry.service";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  public post:any;
  public user:any;
  constructor(private route:ActivatedRoute, private router:Router, private auth:AuthService, private mediumToManageEntry:MediumToManageEntryService) {
    this.user = this.auth.getUser().profile;
  }

  ngOnInit() {
    this.route.data
        .subscribe((data: { post: any }) => {
          if(data.post == null){
            this.router.navigate(['/home']);
          }
          this.post = data.post;
          this.mediumToManageEntry.setPost(data.post);
        }, (error)=>{});
  }

}
