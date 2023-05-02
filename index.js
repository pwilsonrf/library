let myLibrary = new Array();

function Book(){
    
}

function addBookToLibrary (title, author, noOfPages, status, myLibrary){
    myLibrary.push(`${title} by ${author}, ${noOfPages} pages, ${status}`);
    return `${title} by ${author}, ${noOfPages} pafges, ${status}`;
}

function myLibraryLoop (myLibrary){
    const bookShelf = document.querySelector('.book-shelf');
    for(i = 0; i < myLibrary.length; i++){

        //Create card
        let currentBook = document.createElement("div");
        currentBook.id = 'book' + i;
        currentBook.className = "book-item";

        //Organize Book Data
        let currentBookArray = myLibrary[i].split(","); //Separate data
        console.log(currentBookArray)
         
        let currentBookTitle = document.createElement("h3");
        currentBookTitle.innerText = currentBookArray[0];

        let currentBookPages = document.createElement("p");
        currentBookPages.innerText = currentBookArray[1];

        let currentBookStatus = document.createElement("p");
        currentBookStatus.id = "book-status"
        currentBookStatus.innerText = currentBookArray[2];

        //Push book elements into Div

        currentBook.appendChild(currentBookTitle);
        currentBook.appendChild(currentBookPages);
        currentBook.appendChild(currentBookStatus);
        bookShelf.appendChild(currentBook);
        

        currentBook = ""; //Delete previous entry

    }

}


addBookToLibrary ("Greatness", "Lewis Howes", 259, "Not Read", myLibrary)
addBookToLibrary ("Brand With Purpose", "Ivan Estrada", 148, "In Progress", myLibrary)
addBookToLibrary ("I will Teach you to Be Rich", "Ramit Sethi", 278, "Read", myLibrary)

myLibraryLoop(myLibrary)
console.log(myLibrary)