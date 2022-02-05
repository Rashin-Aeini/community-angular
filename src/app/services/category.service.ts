import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Categories } from "../models/get.categories";
import { CategoryFilter } from "../models/get.category.filter";
import { ConfigService } from "./config.service";

@Injectable()
export class CategoryService {

    constructor(private http: HttpClient, private config: ConfigService) {

    }

    get(entry: CategoryFilter): Observable<Categories> {
        return this.http.get<Categories>(this.config.ServerAddress + '/category', {
            params: new HttpParams({
                fromObject: { ...entry }
            })
        });
    }
}