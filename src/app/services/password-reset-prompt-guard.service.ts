import { Injectable } from '@angular/core';
import { CanActivate,Router, ActivatedRoute, Params } from '@angular/router';
import {MediumToPasswordResetPromptService} from './medium-to-password-reset-prompt.service';
import {Http, Response} from '@angular/Http';

@Injectable()
export class PasswordResetPromptGuardService implements CanActivate{

  private currentRoute: ActivatedRoute;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private mediumToPasswordResetPromptService : MediumToPasswordResetPromptService
  ) { }

  canActivate(){
    if(this.mediumToPasswordResetPromptService.getAccessable()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }

}
