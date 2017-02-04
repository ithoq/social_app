/**
 * Created by officeaccount on 11/01/2017.
 */

import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {TimelineService} from "../../services/timeline.service";

@Injectable()
export class LogResolver implements Resolve<any> {
    constructor(private auth:AuthService, private timelineService:TimelineService, private route:ActivatedRoute, private router:Router) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any>|any {
        let auth = this.auth;
        let timelineService = this.timelineService;
        let router = this.router;
        return new Promise(function(resolve, reject){
            let params:any = route.params;
            timelineService.get(params.id, auth.getUser().profile.UserId).subscribe(
                (data:any)=> {
                    resolve(data);
                },
                (error)=>{
                    resolve(null);
                }
            );
        });
    }
}