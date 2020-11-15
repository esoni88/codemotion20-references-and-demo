import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss']
})
export class BookDetailsDialogComponent implements OnInit {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter();
  @Input() book = null;

  constructor() { }

  ngOnInit(): void {
  }

  visibleChanged() {
    this.visible = false;
    this.visibleChange.emit(false);
  }
}
