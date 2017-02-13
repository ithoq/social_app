import { Injectable } from '@angular/core';
import { CanActivate,Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class ProfileCreatedGuardService implements CanActivate{

  private auth: AuthService;
  private router: Router;
  private currentRoute: ActivatedRoute;

  constructor(
    private authService: AuthService,
    private appRouter: Router,
    private activatedRoute: ActivatedRoute
  ){
    this.auth = authService;
    this.router = appRouter;
    this.currentRoute = activatedRoute;
  }

  canActivate(){
    if(this.auth.getUser().timelines.length == 0){
      this.router.navigate(['create-profile']);
      return false;
    }
    return true;
  }
}
