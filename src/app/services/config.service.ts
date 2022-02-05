import { Injectable } from "@angular/core";

@Injectable()
export class ConfigService{
    public get  ServerAddress() : string { return 'https://localhost:44309'; }
}