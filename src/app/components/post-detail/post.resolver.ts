/**
 * Created by officeaccount on 11/01/2017.
 */

import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {TimelineService} from "../../services/timeline.service";
import {AppService} from "../../app.service";
import {MediumToPostDetailService} from "../../services/medium-to-post-detail.service";

@Injectable()
export class PostResolver implements Resolve<any> {
    constructor(
        private appService:AppService,
        private auth:AuthService,
        private timelineService:TimelineService,
        private route:ActivatedRoute,
        private router:Router,
        private mediumToPostDetail:MediumToPostDetailService
    ) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any>|any {
        let mediumToPostDetail = this.mediumToPostDetail;
        return new Promise(function(resolve, reject){
            resolve(mediumToPostDetail.getPost());
        });
    }
}