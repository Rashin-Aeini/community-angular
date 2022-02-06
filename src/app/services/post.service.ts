import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PostFilter } from "../models/get.post.filter";
import { Posts } from "../models/get.posts";
import { CreatePost } from "../models/post.create.post";

import { ConfigService } from "./config.service";

@Injectable()
export class PostService {

    //private http: HttpClient;

    constructor(private http: HttpClient, private config: ConfigService) {
        //this.http = http;
    }

    get(entry: PostFilter): Observable<Posts> {
        return this.http.get<Posts>(this.config.ServerAddress + '/post', {
            params: new HttpParams({
                fromObject: { ...entry }
            })
        }); // select
    }

    getById(id: number) : Observable<CreatePost>{
        return this.http.get<CreatePost>(this.config.ServerAddress + '/post/' + id);
    }

    post(entry : CreatePost) : Observable<any> {
        return this.http.post(this.config.ServerAddress + '/post', entry);
    }

    update(id: number, entry: CreatePost) : Observable<any> {
        return this.http.post(this.config.ServerAddress + '/post/' + id, entry);
    }

    delete(id : number) : Observable<any> {
        return this.http.delete(this.config.ServerAddress + '/post/' + id);
    }
}