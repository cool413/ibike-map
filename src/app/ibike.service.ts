import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const headers = new HttpHeaders()
  .set('Content-Type', 'application/json; charset=UTF-8')
  .append('Referer', 'https://i.youbike.com.tw/station/map')
  .append('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class IbikeService {
  constructor(private http: HttpClient) {}

  getBikeStation() {
    let formData: FormData = new FormData();
    formData.append('action', 'ub_site_by_sno_class');
    formData.append('datas%5Blang%5D', 'tw');
    formData.append('datas%5Bloc%5D', 'taichung');
    this.http
      .post('https://apis.youbike.com.tw/useAPI', formData, { headers })
      .subscribe(
        val => {
          console.log('Post call successful value returned in body', val);
        },
        error => {
          console.log('Post call in error', error);
        },
        () => {
          console.log('The Post observable is now completed.');
        }
      );
  }
}
