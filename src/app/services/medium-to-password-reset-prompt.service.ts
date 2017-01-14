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

  /*
    returns the current accessable from the email object
    set current accessable with the default one.
    basically its like a flash message. which can only be used once.
   */
  getAccessable(){
    let accessable = this.accessable.current;
    this.accessable.current = this.accessable.default;
    return accessable;
  }

  setEmail(email:any){
    this.email.current = email;
  };

  /*
    returns the current email from the email object
    set current email with the default one.
    basically its like a flash message. which can only be used once.
   */
  getEmail(){
    let email = this.email.current;
    this.email.current = this.email.default;
    return email;
  }

}
