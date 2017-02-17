/**
 * Created by officeaccount on 17/02/2017.
 */
/**
 * Created by officeaccount on 09/02/2017.
 */
/**
 * Created by officeaccount on 11/01/2017.
 */

import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {TimelineService} from "../../services/timeline.service";
import {User} from "../../models/User";
import {Timeline} from "../../models/Timeline";

@Injectable()
export class CreateCustomLogResolver implements Resolve<any> {
    constructor(
        public auth:AuthService,
        public timelineService:TimelineService
    ) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any>|any {
        return new Promise((resolve, reject)=>{
            resolve(this.timelineService.getAllTimelinesWithEntries());
        });
    }
}