import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ApiModule, BASE_PATH, Configuration } from 'src/backend-connector';
import { RestClientService } from './rest-client.service';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';
import { HeaderComponent } from './ui/header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BooksComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ApiModule,

    /** PrimeNg modules */
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ListboxModule,
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
