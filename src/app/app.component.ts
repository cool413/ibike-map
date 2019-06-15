import { Component } from '@angular/core';
import { IbikeService } from 'src/app/ibike.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ibike-map';
  lat: number = 24.1516183;
  lng: number = 120.6137263;
  zoomValue: number = 15;
  iconUrl: string = 'http://i.imgur.com/0TctIfY.png';
  isOpen: boolean = false;

  ngOnInit(): void {}

  public markerClick(e) {
    this.isOpen = true;
  }
}
