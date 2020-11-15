import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book, BookService } from 'src/backend-connector';
import { RestClientService } from '../rest-client.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  selectedBook: Book;
  books: Book[];
  searchInput: string = '';
  isDetailsDialogVisible: boolean = false;
  
  constructor(
    private readonly restClient: RestClientService,
    private readonly bookService: BookService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
   this.findBooks();
  }

  searchBook(searchString: string): void {
    if (searchString) {
      this.findBooks(searchString);
      this.searchInput = '';
    }
  }

  findBooks(searchString?: string) {
    this.bookService.findBooks(0, 100, undefined, searchString)
      .subscribe((books: Book[]) => {
        this.books = books;
      });
  }

  showAddBookDialog() {
    
  }

  showDetailsDialog(book: Book) {
    this.selectedBook = book;
    this.isDetailsDialogVisible = true;
  }

  logout() {
    this.restClient.removeAccessToken();
    this.router.navigate(['/login']);
  }
}
