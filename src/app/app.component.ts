import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router, NavigationStart} from "@angular/router";
import {RightContentService} from "./services/right-content.service";

@Component({
  selector: 'sa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public rightContent:RightContentService;
  constructor(private auth:AuthService, private router:Router, private rightc:RightContentService){
    this.rightContent = rightc;
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        this.rightContent.aside_in = false;
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }
}
