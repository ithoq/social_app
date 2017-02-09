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

@Injectable()
export class ViewProfileResolver implements Resolve<any> {
    constructor(public auth:AuthService, private timelineService:TimelineService, private route:ActivatedRoute, private router:Router) {

    }
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any>|any {
        let auth = this.auth;
        let timelineService = this.timelineService;
        let router = this.router;
        return new Promise(function(resolve, reject){
            let params:any = route.params;
            let user:User = JSON.parse(localStorage.getItem('viewUserProfile'));
            if(user != null && user.UserId == params.id)
                resolve(user);
            resolve(null);
        });
    }
}