//this service is used to transfer data from any component to login component

import { Injectable } from '@angular/core';

@Injectable()
export class MediumToManageEntryService {
  private post:any;
  constructor() {
    this.post = {
      current:null,
      default:null
    }
  }

  setPost(post:any){
    this.post.current = post;
  };




  /*
    returns the current title from the post object
    set current post with the default one.
    basically its like a flash message. which can only be used once.
   */
  getPost(){
    let post = this.post.current;
    this.post.current = this.post.default;
    return post;
  }

}
