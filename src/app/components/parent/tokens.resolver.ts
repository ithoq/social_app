/**
 * Created by officeaccount on 11/01/2017.
 */

import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {AuthService} from "../../services/auth.service";

@Injectable()
export class TokensResolver implements Resolve<any> {
    constructor(private auth:AuthService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any>|any {
        let auth = this.auth;
        let set_app_token = new Promise(function(resolve, reject){
            if(auth.get_app_token() == null){
                auth.grab_app_key().subscribe(
                    (app_key)=> {
                        auth.set_app_token(app_key);
                        resolve(app_key);
                    }, (error)=>{ reject(error) }
                );
            }else{
                resolve(auth.get_app_token());
            }
        });
        return set_app_token.then(function (app_key) {
            return new Promise(function (resolve, reject) {
                if(auth.get_session_token() == null){
                    auth.grab_session_token(auth.get_app_token()).subscribe(  //fetching the session token from api
                        (data:Response) => {
                            let session_token = data.json().payload.SessionToken;
                            auth.set_session_token(session_token);
                            resolve(session_token);
                        }, (error)=>{
                            reject(error);
                        }
                    );
                }else{
                    resolve(auth.get_session_token());
                }
            });
        }, function (error) {
            return error;
        });
    }
}