import { Component } from '@angular/core';
import { IbikeService } from 'src/app/ibike.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ibike-map';
  lat = 24.178695;
  lng = 120.64501;
  zoomValue = 15;
  iconUrl = 'https://i.youbike.com.tw/images/map/icon_nomo.png';

  constructor(private ibikeService: IbikeService, private datePipe: DatePipe) {}
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

  convertToDate(str, opt) {
    const DateSeparator = '/';

    // Date
    str.replace(/[\/:]/g, '');
    let DateStr =
      str.slice(0, 4) +
      DateSeparator +
      str.slice(4, 6) +
      DateSeparator +
      str.slice(6, 8);

    // Time
    if (str.length >= 12) {
      DateStr += ' ' + str.slice(8, 10) + ':' + str.slice(10, 12);
      if (str.length >= 14) {
        DateStr += ':' + str.slice(12, 14);
      }
    }

    return this.datePipe.transform(DateStr, opt);
  }
}
