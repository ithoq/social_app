import { Component, OnInit } from '@angular/core';
import {RightContentService} from "../../services/right-content.service";

@Component({
  selector: 'app-add-content-btn',
  templateUrl: './add-content-btn.component.html',
  styleUrls: ['./add-content-btn.component.css']
})
export class AddContentBtnComponent implements OnInit {

  constructor(private rightContent:RightContentService) { }

  public content:any = 'Add Content';
  asideToggle(){
    this.rightContent.aside_in = !this.rightContent.aside_in;
  }

  ngOnInit() {
  }

}
