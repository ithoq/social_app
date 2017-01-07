import { Injectable } from '@angular/core';

@Injectable()
export class MediumToPasswordResetPromptService {
  private accessable:any;
  private email:any;
  constructor() {
    this.accessable = { current:false, default:false }
    this.email = { current:'', default:'' }
  }
  setAccessable(accessable:any){
    this.accessable.current = accessable;
  };
  getAccessable(){
    let accessable = this.accessable.current;
    this.accessable.current = this.accessable.default;
    return accessable;
  }

  setEmail(email:any){
    this.email.current = email;
  };
  getEmail(){
    let email = this.email.current;
    this.email.current = this.email.default;
    return email;
  }

}
