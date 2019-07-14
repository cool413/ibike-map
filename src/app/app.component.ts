import { Component } from '@angular/core';
import { IbikeService } from 'src/app/ibike.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ibike-map';
  lat: number = 24.178695;
  lng: number = 120.64501;
  zoomValue: number = 15;
  iconUrl: string = 'https://i.youbike.com.tw/images/map/icon_nomo.png';

  constructor(private ibikeService: IbikeService) {}
  stationdata = [];

  ngOnInit(): void {
    this.ibikeService.getBikeStationInfo().subscribe(
      resp => {
        console.log('GET call successful value returned ', resp[0]);
        this.stationdata = Object.keys(resp[0]['resdata']).map(key => ({
          id: key,
          value: resp[0]['resdata'][key]
        }));
        console.log(this.stationdata);
      },
      error => {
        console.log('GET call in error', error);
      },
      () => {
        console.log('The GET observable is now completed.');
      }
    );
  }
}
