let myLibrary = new Array();

//Book object constructor
function Book(title, author, noOfPages, status){
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.status = status;
}

//Create initial books and add them to library
const book1 = new Book("Greatness", "Lewis Howes", 259, "Not Read");
myLibrary.push(book1);

const book2 = new Book("Brand With Purpose", "Ivan Estrada", 148, "In Progress");
myLibrary.push(book2);

const book3 = new Book("I Will Teach You To Be Rich", "Ramit Sethi", 278, "Read");
myLibrary.push(book3);
console.log(myLibrary)


//Run initial loop to display Library 
myLibraryLoop(myLibrary);


//Displaying existing Library array
function myLibraryLoop (myLibrary){
    const bookShelf = document.querySelector('.book-shelf');
    for(i = 0; i < myLibrary.length; i++){
        addBookToShelf(myLibrary[i], i, bookShelf)
    }
}


//Displaying a book on shelf
function addBookToShelf(book, i, bookShelf){
    //Create card
    let currentBook = document.createElement("div");
    currentBook.id = 'book' + i;
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
    currentBookPages.innerText = book.noOfPages;

    //Add book status
    let currentBookStatus = document.createElement("p");
    currentBookStatus.id = "book-status"
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
    deleteImg.addEventListener("click", function (e){
        console.log(e.target.id.split("-").slice(-1)[0]);
        deleteBook(i, bookShelf, myLibrary);
    });
    currentBookDeleteButton.appendChild(deleteImg);

    //Push book elements into Div
    currentBook.appendChild(currentBookDeleteButton);
    currentBook.appendChild(currentBookTitle);
    currentBook.appendChild(currentBookAuthor);
    currentBook.appendChild(currentBookPages);
    currentBook.appendChild(currentBookStatus);
    
    //Append current book container to Book Shelf
    bookShelf.appendChild(currentBook);
    
    currentBook = ""; //Delete previous entry
};


function deleteBook(i, bookShelf, myLibrary){
        let book = document.getElementById(`book${i}`);
        bookShelf.removeChild(book);
        myLibrary.pop([i]);
    
}
//         // bookShelf.removeChild(currentBook);
// })}
    



//Pop up form when AddBook button is clicked
let popUpForm = document.querySelector("#popUpForm"); //Pop-up Form
let button = document.getElementById("addBook"); //Add Book Button

//Button behavior
button.addEventListener("click", function () {
    document.getElementById("popUpForm").style.display = "block";
});



//Grab information from form
let titleValue = document.getElementById("form-id").addEventListener("submit", function (e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    //Add book to library
    addBookToLibrary(formProps.title, formProps.author, formProps.noOfPages, formProps.status, myLibrary);
    addBookToShelf(myLibrary[myLibrary.length-1]);
    console.log(formProps);

    //Reset form
    document.getElementById("form-id").reset();

    //Hide form after submission
    document.getElementById("popUpForm").style.display = "none";



})
