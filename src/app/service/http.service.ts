import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http:HttpClient
  ) { }
  getSpaceXList(launch?,land?,year?): Observable<any>{
    let limit = 100;
    let url = 'https://api.spaceXdata.com/v3/launches';
    let launch_success = launch? `&launch_success=${launch}`:''
    let land_success = land? `&land_success=${land}`:''
    let launch_year = year? `&launch_year=${year}`:''
    return this.http.get(url+`?limit=${limit}`+launch_success+land_success+launch_year);
  }
}
