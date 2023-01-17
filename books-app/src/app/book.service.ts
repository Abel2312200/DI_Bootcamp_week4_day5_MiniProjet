import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  testData !: Book[] /* = [ new Book("The Coma",["Alex Garland"],"http://books.google.com/books/content?id=LB2oAAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api")
                  , new Book("Ex Machina",["Alex Garland"],"http://books.google.com/books/content?id=yvFMBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"),
                    new Book("Annihilation",["Alex Garland"],"http://books.google.com/books/content?id=pjBHDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api")
  ]; */

  apiRoot = "https://www.googleapis.com/books/v1/volumes";



  constructor(private httpClient: HttpClient) { }

  /**
   * @param empty
   * @returns 
   */
  getBooks(): Book[] {
    return this.testData;
  }

  /**
   * 
   * @param author 
   * @returns 
   */
  getBooksByAuthor(author: string): Book[] {
    if (author == "Alex Garland") {
      return this.testData;
    }
    else return [];
  }

  /**
   * 
   * @param author 
   * @returns 
   */
  getBooksByHttp(author: string): Promise<Book[]> {
    let apiURL = `https://www.googleapis.com/books/v1/volumes?q=inauthor:%22Alex%20Garland%22&langRestrict=en`;

    return new Promise((resolve, reject) => {
      this.httpClient.get(apiURL).toPromise().then((data: any) => {
        let results: Book[] = data.items.map((item: { volumeInfo: { title: string; authors: string[]; imageLinks: { thumbnail: string; }; }; }) => {
          return new Book(
            item.volumeInfo.title,
            item.volumeInfo.authors,
            item.volumeInfo.imageLinks.thumbnail
          )
        })
        resolve(results);
      });
    });

  }
}

