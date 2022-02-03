import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { ConfigService } from "./config.service";

@Injectable()
export class PostService {

    //private http: HttpClient;

    constructor(private http: HttpClient, private config: ConfigService) {
        //this.http = http;
    }

    get() : Observable<any>
    {
        return this.http.get(this.config.ServerAddress + '/post');
    }
}