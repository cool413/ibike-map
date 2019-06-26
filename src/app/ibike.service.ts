import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { stationInfo } from 'src/app/station-info';

const apiURL = 'https://ibike-api.herokuapp.com/stationInfo';

@Injectable({
  providedIn: 'root'
})
export class IbikeService {
  constructor(private http: HttpClient) {}

  getBikeStationInfo() {
    return this.http.get<stationInfo>(apiURL);
  }
}
