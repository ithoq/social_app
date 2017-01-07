import { Injectable } from '@angular/core';

@Injectable()
export class MediumToPasswordResetPromptService {
  private accessable:any;
  constructor() {
    this.accessable = {
      current:false,
      default:false
    }
  }
  setAccessable(accessable:any){
    this.accessable.current = accessable;
  };
  getAccessable(){
    let accessable = this.accessable.current;
    this.accessable.current = this.accessable.default;
    return accessable;
  }

}
