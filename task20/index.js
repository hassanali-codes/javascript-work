// -----------------TASK 20---------------------------
// Mini Project
class book {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }
}

class library {
    constructor() {
        this.books = []
    }
    addBook(book) {
        this.books.push(book)
    }
    removeBook(title) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].title === title) {
                this.books.splice(i, 1)
                break
            }
        }
    }
    showBooks() {
        this.books.forEach(book => {
            console.log(`Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`);
        });
    }
}

const book1 = new book("Harry Potter", "J.K. Rowling", 1997);
const book2 = new book("wild life", "science", 1937);

const myLibrary = new library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.showBooks();
myLibrary.removeBook("wild life");
console.log("Books in the library after removing wild life':");
myLibrary.showBooks();