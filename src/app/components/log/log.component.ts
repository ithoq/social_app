import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MediumToPostDetailService} from "../../services/medium-to-post-detail.service";

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
    public timeline = null;
  constructor(private route:ActivatedRoute, private router:Router, private mediumToPostDetail:MediumToPostDetailService) {

  }

    showDetail(entry:any){
        this.mediumToPostDetail.setPost(entry);
        this.router.navigate(['/post/'+entry.EntryId]);
    }

  ngOnInit() {
      this.route.data
          .subscribe((data: { log: any }) => {
              if(data.log == null){ this.router.navigate(['/home']); }
              this.timeline = data.log.json().payload;
          }, (error)=>{});
  }
}
