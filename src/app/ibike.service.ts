import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiURL = 'https://ibike-api.herokuapp.com/stationInfo';

@Injectable({
  providedIn: 'root'
})
export class IbikeService {
  constructor(private http: HttpClient) {}

  getBikeStationInfo() {
    return this.http.get(apiURL);
  }
}
