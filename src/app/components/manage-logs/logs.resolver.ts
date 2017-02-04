/**
 * Created by officeaccount on 11/01/2017.
 */

import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {TimelineService} from "../../services/timeline.service";
import {Response} from "@angular/http";

@Injectable()
export class LogsResolver implements Resolve<any> {
    constructor(private auth:AuthService, private timelineService:TimelineService, private route:ActivatedRoute, private router:Router) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any>|any {
            let timelineService = this.timelineService;
        return new Promise(function (resolve, reject) {
            timelineService.getUserTimelines().subscribe((data:Response)=>{
                resolve(data);
            });
        });
    }
}