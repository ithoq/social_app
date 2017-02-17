/**
 * Created by officeaccount on 11/01/2017.
 */

import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {TimelineService} from "../../services/timeline.service";
import {AppService} from "../../app.service";
import {Timeline} from "../../models/Timeline";

@Injectable()
export class LogResolver implements Resolve<any> {
    constructor(
        public auth:AuthService,
        private timelineService:TimelineService,
        private route:ActivatedRoute,
        private router:Router,
        public app:AppService
    ) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any>|any {
        let auth = this.auth;
        let timelineService = this.timelineService;
        let router = this.router;
        return new Promise((resolve, reject)=>{
            let params:any = route.params;
            let existingTimelines:Array<Timeline> = this.timelineService.getAllTimelinesWithEntries();
            let foundTimeline:Timeline = this.app.find_obj_by_prop('Id',params.id,existingTimelines);
            if(foundTimeline != null){
                resolve(foundTimeline);
            }else{
                timelineService.get(params.id).subscribe(
                    (data:any)=> {
                        console.log(data.json().payload);
                        let mapedTimeline:Timeline = this.app.map(data.json().payload, new Timeline());
                        this.timelineService.pushTimelineWithEntires(mapedTimeline);
                        resolve(mapedTimeline);
                    },
                    (error)=>{
                        resolve(null);
                    }
                );
            }
        });
    }
}