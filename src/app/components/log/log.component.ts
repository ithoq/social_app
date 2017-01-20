import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
    public timeline = null;
  constructor(private route:ActivatedRoute, private router:Router) {

  }

  ngOnInit() {
      this.route.data
          .subscribe((data: { log: any }) => {
              if(data.log == null){ this.router.navigate(['/home']); }
              this.timeline = data.log.json().payload;
          }, (error)=>{});
  }

}
