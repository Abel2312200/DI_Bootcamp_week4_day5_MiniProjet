export class Book {
    previewMode = true;
    constructor(public title: string, public authors: string[], public coverImage: string) { }
    /**
   * 
   * @param empty
   * @return
   * 
   */
    getAuthorsList(): string {
        return this.authors.join(", ");
    }
}
