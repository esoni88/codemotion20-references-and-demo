import { Component, OnInit } from '@angular/core';
import { Book, BookService } from 'src/backend-connector';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  selectedBook: Book;
  books: Book[];
  
  searchInput: string = '';
  
  constructor(
    private readonly bookService: BookService
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
}
