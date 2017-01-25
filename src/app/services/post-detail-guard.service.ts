// this service is a guard which protect routes from unauthenticated users.

import { Injectable } from '@angular/core';
import { CanActivate,Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from './auth.service';
import {MediumToPostDetailService} from "./medium-to-post-detail.service";

@Injectable()
export class PostDetailGuardService implements CanActivate{

  private auth: AuthService;
  private router: Router;
  private currentRoute: ActivatedRoute;

  constructor(
    private authService: AuthService,
    private appRouter: Router,
    private activatedRoute: ActivatedRoute,
    private mediumToPostDetailService:MediumToPostDetailService
  ){
    this.auth = authService;
    this.router = appRouter;
    this.currentRoute = activatedRoute;
  }

  canActivate(){
    let post = this.mediumToPostDetailService.getPost();
    if(post == null){
      if(this.auth.getUser().timelines.length > 0)
        this.router.navigate(['/log/'+this.auth.getUser().timelines[0].Id]);
      else
        this.router.navigate(['/manage-profile']);
    }else{
      this.mediumToPostDetailService.setPost(post);
      return true;
    }
  }
}
