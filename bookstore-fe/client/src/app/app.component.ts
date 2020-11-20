import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, BookService } from 'src/backend-connector';
import { RestClientService } from './rest-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private readonly restClient: RestClientService,
    private readonly auth: AuthenticationService,
    private readonly bookService: BookService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.restClient.initializeAccessToken();
  }
}
