import { CONFIG } from './app-config';
import { Injectable } from '@angular/core';
import { Headers, Http as AngularHttp } from '@angular/http';

@Injectable()
export class Http {
  constructor(private http: AngularHttp) {}

  get(path: string, otherUrl: boolean = false) {
    if (!otherUrl)
      return this.http.get(CONFIG.url + path); // , {withCredentials: true}
    else
    {
      //alert("p: " + path);
      return this.http.get(path);
    } 
  }

  post(path: string, data: any) {
    return this.http.post(CONFIG.url + path, JSON.stringify(data), {
      headers: new Headers({'Content-Type': 'application/json'})
    }); // ,withCredentials: true
  }
};
