let myLibrary = new Array();

/*
Creates a Book class, with class fields
Args:
    title: Title of book
    author: Book author
    noOfPages: No. of pages of book
    status: Readding status (e.g. Read, Not Read, In Progress)
*/
class Book {
   constructor(title, author, noOfPages, status) {
      this.title = title;
      this.author = author;
      this.noOfPages = noOfPages;
      this.status = status;
   }
}

//Create initial books and add them to library
const book1 = new Book("Greatness", "Lewis Howes", 259, "Not Read");
myLibrary.push(book1);

const book2 = new Book(
   "Brand With Purpose",
   "Ivan Estrada",
   148,
   "In Progress"
);
myLibrary.push(book2);

const book3 = new Book(
   "I Will Teach You To Be Rich",
   "Ramit Sethi",
   278,
   "Read"
);
myLibrary.push(book3);
console.log(myLibrary);

//Display initial library of books on BookShelf
myLibraryLoop(myLibrary);

/*Display an array of book objects
    Args: myLibrary (array of book objects)
*/
function myLibraryLoop(myLibrary) {
   const bookShelf = document.querySelector(".book-shelf");
   for (i = 0; i < myLibrary.length; i++) {
      addBookToShelf(myLibrary[i], i, bookShelf);
   }
}

/*Add new book on Shelf
    Args:
        - book (object)
        - i (book position on book array of objects)
        - bookShelf (containing books)
*/
function addBookToShelf(book, i, bookShelf) {
   //Create card
   let currentBook = document.createElement("div");
   currentBook.id = "book" + i;
   currentBook.className = "book-item";

   //Organize Book Data
   //Add book title
   let currentBookTitle = document.createElement("h3");
   currentBookTitle.innerText = book.title;

   //Add book author
   let currentBookAuthor = document.createElement("h2");
   currentBookAuthor.innerText = book.author;

   //Add number of pages
   let currentBookPages = document.createElement("p");
   currentBookPages.innerText = `${book.noOfPages} pages`;

   //Add book status
   let currentBookStatus = document.createElement("p");
   currentBookStatus.className = "book-status";
   currentBookStatus.id = `book-status${i}`;
   currentBookStatus.innerText = book.status;

   //Create delete button
   let currentBookDeleteButton = document.createElement("div");
   currentBookDeleteButton.id = `delete-book-button${i}`;
   currentBookDeleteButton.className = "delete-book-button";

   //Create delete button image
   let deleteImg = document.createElement("img");
   deleteImg.src = "/img/trash-can-outline.svg";
   deleteImg.alt = `Delete button icon`;
   deleteImg.id = `delete-book-icon-${i}`;
   deleteImg.className = `delete-book-icon`;
   deleteImg.addEventListener("click", function (e) {
      console.log(e.target.id.split("-").slice(-1)[0]);
      deleteBookFromShelf(i, bookShelf, myLibrary);
   });
   currentBookDeleteButton.appendChild(deleteImg);

   //Create change read
   let changeToRead = document.createElement("div");
   changeToRead.id = `book-read-${i}`;
   changeToRead.className = "book-read-button";

   //Create read status image
   let changeToReadImg = document.createElement("img");
   changeToReadImg.src = "/img/read.svg";
   changeToReadImg.alt = `Book read button icon`;
   changeToReadImg.id = `read-book-icon-${i}`;
   changeToReadImg.className = "read-book-icon";
   changeToReadImg.addEventListener("click", function (e) {
      console.log(e.target.id.split("-").slice(-1)[0]);
      changeStatusToRead(i);
   });

   changeToRead.appendChild(changeToReadImg);

   //Push book elements into Div
   currentBook.appendChild(currentBookDeleteButton);
   currentBook.appendChild(changeToRead);
   currentBook.appendChild(currentBookTitle);
   currentBook.appendChild(currentBookAuthor);
   currentBook.appendChild(currentBookPages);
   currentBook.appendChild(currentBookStatus);

   //Append current book container to Book Shelf
   bookShelf.appendChild(currentBook);

   currentBook = ""; //Delete previous entry
}

/*Delete a book from BookShelf
    Args:
        - i (book position on BookShelf)
        - bookShelf (current BookShelf)
        - myLibrary (current Library)
*/
function deleteBookFromShelf(i, bookShelf, myLibrary) {
   let book = document.getElementById(`book${i}`);
   bookShelf.removeChild(book);
   myLibrary.pop([i]);
}

/*Change book status to Read
    Args:
        - i (book position on BookShelf)
*/
function changeStatusToRead(i) {
   document.getElementById(`book-status${i}`).innerText = "Read";
}

//Pop up form when AddBook button is clicked
let popUpForm = document.querySelector("#popUpForm"); //Pop-up Form
let button = document.getElementById("addBook"); //Add Book Button

//AddBook Button pop up form
button.addEventListener("click", function () {
   document.getElementById("popUpForm").style.display = "block";
});

//Grab information from form
let titleValue = document
   .getElementById("form-id")
   .addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);

      //Add book to library
      const bookShelf = document.querySelector(".book-shelf"); //Current book shelf
      const newBook = new Book(
         formProps.title,
         formProps.author,
         formProps.noOfPages,
         formProps.status
      ); //Create book object
      myLibrary.push(newBook); //Add book to existing library
      let i = myLibrary.length - 1; //Book Counter

      addBookToShelf(myLibrary[i], i, bookShelf);
      console.log(formProps);

      //Reset form
      document.getElementById("form-id").reset();

      //Hide form after submission
      document.getElementById("popUpForm").style.display = "none";
   });
