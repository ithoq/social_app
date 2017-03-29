import { Component, OnInit } from '@angular/core';
import {RightContentService} from "../../services/right-content.service";

@Component({
  selector: 'app-right-aside-closer',
  templateUrl: './right-aside-closer.component.html',
  styleUrls: ['./right-aside-closer.component.css']
})
export class RightAsideCloserComponent implements OnInit {

  constructor(private rcs:RightContentService) { }

  close(){
    this.rcs.aside_in = false;
  }
  ngOnInit() {
  }

}
