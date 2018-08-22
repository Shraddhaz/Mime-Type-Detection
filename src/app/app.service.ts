import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class AppService {

    private url = "http://localhost:8080/";
    constructor(private http: Http) {}

    getMimeType(fileName:string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        const body = JSON.stringify({name: fileName});
        return this.http.post(this.url, body, options);
    }
}