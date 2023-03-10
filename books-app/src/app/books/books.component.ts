import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books !: Book[] ;
  searchedString = "" ;

  constructor(private booksService : BookService){ 
  }
  ngOnInit(): void {  
    this.getBooks();// datas initialization

  }
  /**
   * change the previewMode value of current book
   * @param book 
   * @returns void
   */
  onClickImage( book : Book) {
    book.previewMode = !book.previewMode;
  }

  private getBooks() {
    this.booksService.getBooksByHttp(this.searchedString).then((data: Book[]) => {
      this.books = data;
    })
  }

  onSubmit() {
    this.getBooks()
  }

}
