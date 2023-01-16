import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../models/book';
import { dataTest } from '../models/testdata';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  books !: Book[] ;

  constructor(private booksService : BookService){ 
  }
  ngOnInit(): void {  
    this.books = this.booksService.getBooks() // datas initialization

  }
  /**
   * change the previewMode value of current book
   * @param book 
   * @returns void
   */
  onClickImage( book : Book) {
    book.previewMode = !book.previewMode;
  }

}
