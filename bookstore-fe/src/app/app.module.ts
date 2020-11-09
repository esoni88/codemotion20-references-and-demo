import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ApiModule, BASE_PATH, Configuration } from 'src/backend-connector';
import { RestClientService } from './rest-client.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApiModule,
  ],
  //providers: [{ provide: BASE_PATH, useValue: environment.baseurl }],
  providers: [
    {
      provide: Configuration,
      useFactory: (authService: RestClientService) => new Configuration(
        {
          basePath: environment.baseurl,
          accessToken: authService.getAccessToken.bind(authService)
        }
      ),
      deps: [RestClientService],
      multi: false
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
