import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ApiModule, BASE_PATH, Configuration } from 'src/backend-connector';
import { RestClientService } from './rest-client.service';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';
import { FormsModule } from '@angular/forms';
import { BookDetailsDialogComponent } from './ui/book-details-dialog/book-details-dialog.component';
import { AddBookDialogComponent } from './ui/add-book-dialog/add-book-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BooksComponent,
    BookDetailsDialogComponent,
    AddBookDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    DialogModule,
    RadioButtonModule,
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
