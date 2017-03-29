import { Component, OnInit } from '@angular/core';
import {RightContentService} from "../../services/right-content.service";

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit {

  constructor(private rightContentService:RightContentService) { }

  ngOnInit() {
  }

  goBack(){
    window.history.back();
  }

}
