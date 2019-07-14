import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmSnazzyInfoWindowModule,
    AgmCoreModule.forRoot({
      apiKey: '',
      language: 'zh-TW'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
