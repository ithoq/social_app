/**
 * Created by officeaccount on 17/02/2017.
 */
import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {TimelineService} from "../../services/timeline.service";
import {AppService} from "../../app.service";
import {Timeline} from "../../models/Timeline";

declare var LZString:any;
@Injectable()
export class CustomLogResolver implements Resolve<any> {
    constructor(
        public auth:AuthService,
        public app:AppService
    ) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any>|any {
        return new Promise((resolve, reject)=>{
            let customLogString = localStorage.getItem('custom_log');
            if(customLogString != null){
                resolve(JSON.parse(LZString.decompress(customLogString)));
            }
            else{
                resolve(null);
            }
        });
    }
}