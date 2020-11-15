import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Author, Book, BookService } from 'src/backend-connector';

@Component({
  selector: 'app-add-book-dialog',
  templateUrl: './add-book-dialog.component.html',
  styleUrls: ['./add-book-dialog.component.scss']
})
export class AddBookDialogComponent implements OnInit {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter();

  book: Book = {
    id: 123,
    title: '',
    totalPages: 0,
    publishingHouse: '',
    genre: null,
    author: {
      fullname: '',
      country: '',
      birthYear: null,
      gender: Author.GenderEnum.MALE
    }
  };

  constructor(private readonly bookService: BookService) { }

  ngOnInit(): void {
  }

  onSubmit(bookForm: NgForm) {
    const book = bookForm.form.value;
    book.id = this.book.id;
    this.bookService.addBook(book as Book).subscribe((book: Book) => {
      this.visible = false;
    });
  }

  visibleChanged() {
    this.visible = false;
    this.visibleChange.emit(false);
  }
}
