let myLibrary = new Array();
addBookToLibrary ("Greatness", "Lewis Howes", 259, "Not Read", myLibrary)
addBookToLibrary ("Brand With Purpose", "Ivan Estrada", 148, "In Progress", myLibrary)
addBookToLibrary ("I will Teach you to Be Rich", "Ramit Sethi", 278, "Read", myLibrary)
myLibraryLoop(myLibrary);

function Book(){
    
}

//Adding new book to existing Library array
function addBookToLibrary (title, author, noOfPages, status, myLibrary){
    myLibrary.push(`${title} by ${author}, ${noOfPages} pages, ${status}`);

}


//Displaying existing Library array
function myLibraryLoop (myLibrary){
    const bookShelf = document.querySelector('.book-shelf');
    for(i = 0; i < myLibrary.length; i++){
        addBookToShelf(myLibrary[i], i)
    }
}


//Displaying a book on shelf
function addBookToShelf(book, i){

    const bookShelf = document.querySelector('.book-shelf');

    //Create card
    let currentBook = document.createElement("div");
    currentBook.id = 'book' + i;
    currentBook.className = "book-item";

    //Organize Book Data
    let currentBookArray = book.split(","); //Separate data
    console.log(currentBookArray)
     
    let currentBookTitle = document.createElement("h3");
    currentBookTitle.innerText = currentBookArray[0];

    let currentBookPages = document.createElement("p");
    currentBookPages.innerText = currentBookArray[1];

    let currentBookStatus = document.createElement("p");
    currentBookStatus.id = "book-status"
    currentBookStatus.innerText = currentBookArray[2];


    //Create delete button
    let currentBookDeleteButton = document.createElement("div");
    currentBookDeleteButton.id = `delete-book-button${i}`;
    currentBookDeleteButton.className = "delete-book-button";

    let deleteImg = document.createElement("img");
    deleteImg.src = "/img/trash-can-outline.svg";
    deleteImg.alt = `delete book icon ${i}`;
    currentBookDeleteButton.appendChild(deleteImg);
    
    
    

    //Push book elements into Div
    currentBook.appendChild(currentBookDeleteButton);
    currentBook.appendChild(currentBookTitle);
    currentBook.appendChild(currentBookPages);
    currentBook.appendChild(currentBookStatus);
    
    bookShelf.appendChild(currentBook);
    

    currentBook = ""; //Delete previous entry

    //Delete Book Behavior
    document.getElementById(currentBookDeleteButton.id).addEventListener("click", function (e){
        console.log(e.target);
    
});
    
}


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





console.log(titleValue);




console.log(myLibrary)