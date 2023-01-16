import { Injectable } from '@angular/core';
import { Book } from './models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  testData : Book[] = [ new Book("The Coma",["Alex Garland"],"http://books.google.com/books/content?id=LB2oAAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api")
                  , new Book("Ex Machina",["Alex Garland"],"http://books.google.com/books/content?id=yvFMBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"),
                    new Book("Annihilation",["Alex Garland"],"http://books.google.com/books/content?id=pjBHDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api")
  ];
  constructor() { }

  /**
   * @param empty
   * @returns Book[]
   */
  getBooks() : Book[]{
    return this.testData;
  }

}
