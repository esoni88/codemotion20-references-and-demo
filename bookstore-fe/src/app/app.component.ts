import { Component, OnInit } from '@angular/core';
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
    private readonly bookService: BookService) {
  }
  ngOnInit(): void {
    this.auth.login({username: 'ciao', password: 'ciao'}).subscribe((v) => {
      console.log('esempio login', v);
      this.restClient.setAccessToken(v.accessToken);
      this.bookService.findBooks(0, 100).subscribe((books) => {
        console.log('books', books);
      })
    });
  }
  title = 'bookstore-fe';

}
