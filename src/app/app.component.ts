import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ibike-map';
  lat: number = 24.1518446;
  lng: number = 120.6118282;
  zoomValue: number = 15;
}
