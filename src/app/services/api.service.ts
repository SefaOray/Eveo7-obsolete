import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class ApiService{
    constructor(){};
    baseUrl: string = "sefa";
    http : Http;
    
    get(endpoint: string) : Observable<Response>{
        return this.http.get(this.baseUrl + endpoint);
    }
}